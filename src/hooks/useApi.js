import { useState, useEffect } from 'react';

// Base API configuration
const BASE_URL = '/data/';
const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

// Simple in-memory cache for fetched data
const cache = {};

// Generic helper to run async functions in React hooks
function useAsync(fn, deps = [], enabled = true) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }
    let ignore = false;
    setLoading(true);
    fn()
      .then(result => {
        if (!ignore) {
          setData(result);
          setError(null);
        }
      })
      .catch(err => {
        if (!ignore) setError(err);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [...deps, enabled]);

  return { data, isLoading, error };
}

// Generic fetch function
async function fetchData(endpoint) {
  if (cache[endpoint]) return cache[endpoint];

  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  // Проверяем, что ответ действительно JSON, а не HTML fallback от Vite
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error(`Invalid content-type: ${contentType}, expected JSON`);
  }

  const data = await response.json();
  cache[endpoint] = data;
  return data;
}

// Search clinics with filters
function searchClinics(clinics, query, filters = {}) {
  let results = clinics;

  // Text search - если запрос пустой, показываем все клиники
  if (query && query.trim() && query.trim() !== '') {
    const searchTerm = query.toLowerCase().trim();
    results = results.filter(
      clinic =>
        clinic.name.toLowerCase().includes(searchTerm) ||
        clinic.address.toLowerCase().includes(searchTerm) ||
        clinic.subtitle?.toLowerCase().includes(searchTerm) ||
        clinic.specialties?.some(specialty => specialty.toLowerCase().includes(searchTerm)),
    );
  }

  // Apply filters
  if (filters.rating) {
    results = results.filter(clinic => clinic.rating >= 4.5);
  }

  if (filters.price) {
    results = results.filter(clinic => {
      const price = parseInt(clinic.priceFrom?.replace(/[^\d]/g, ''));
      return price <= 1500;
    });
  }

  if (filters['24h']) {
    results = results.filter(clinic => clinic.is24h);
  }

  if (filters.open) {
    results = results.filter(clinic => clinic.isOpen);
  }

  if (filters.onlineBooking) {
    results = results.filter(clinic => clinic.hasOnlineBooking === true);
  }

  // Sort by relevance (rating + distance)
  results.sort((a, b) => {
    const scoreA = a.rating * 0.7 + (5 - parseFloat(a.distance)) * 0.3;
    const scoreB = b.rating * 0.7 + (5 - parseFloat(b.distance)) * 0.3;
    return scoreB - scoreA;
  });

  return results;
}

// Helper function to combine clinic data with doctor and slots
function enrichClinicWithDoctorData(clinic, doctors, slots) {
  if (!clinic.hasOnlineBooking || !clinic.featuredDoctorId) {
    return clinic;
  }

  const doctor = doctors.find(d => d.id === clinic.featuredDoctorId);

  if (!doctor) {
    return clinic;
  }

  const doctorSlots = slots.find(s => s.doctorId === doctor.id);

  const enriched = {
    ...clinic,
    availableDoctor: {
      name: doctor.name,
      specialty: doctor.specialty,
      experience: doctor.experience,
      photo: doctor.photo,
      price: doctor.price,
      firstVisitPrice: doctor.firstVisitPrice,
      availableSlots: doctorSlots?.slots || [],
      todaySlots: doctorSlots?.dateLabel || 'Нет доступных слотов',
      date: doctorSlots?.date,
    },
  };

  return enriched;
}

// Generate available dates
function generateAvailableDates(daysAhead = 14) {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < daysAhead; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayName = getDayName(date);
    const isToday = i === 0;
    const isTomorrow = i === 1;

    let displayName = dayName;
    if (isToday) {
      displayName = 'Сегодня';
    } else if (isTomorrow) {
      displayName = 'Завтра';
    }

    dates.push({
      date: date.toISOString().split('T')[0],
      dayName,
      displayName,
      isToday,
      isTomorrow,
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
    });
  }

  return dates;
}

function getDayName(date) {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[date.getDay()];
}

// Mock data generators (fallbacks)
const getMockClinics = () => [
  {
    id: 1,
    name: 'Медицинский центр "Здоровье+"',
    address: 'ул. Ленина, 123, Москва',
    rating: 4.8,
    distance: '0.5 км',
    time: '3 мин',
    priceFrom: '1200 ₽',
    specialties: ['Терапия', 'Кардиология', 'Неврология'],
    hasCrown: false,
    hasAd: false,
    logo: '/assets/clinic_placeholder.svg',
  },
  {
    id: 2,
    name: 'Клиника "МедПлюс"',
    address: 'пр. Мира, 45, Москва',
    rating: 4.6,
    distance: '1.2 км',
    time: '5 мин',
    priceFrom: '1500 ₽',
    specialties: ['Хирургия', 'Офтальмология', 'Ортопедия'],
    hasCrown: false,
    hasAd: false,
    logo: '/assets/clinic_placeholder.svg',
  },
];

const getMockDoctors = () => [
  {
    id: 1,
    clinicId: 1,
    name: 'Иванов Иван Иванович',
    specialty: 'Терапевт',
    experience: 'Стаж 10 лет',
    price: 'от 1200 ₽',
    rating: 4.8,
    reviewCount: 120,
  },
  {
    id: 2,
    clinicId: 2,
    name: 'Петров Дмитрий Сергеевич',
    specialty: 'Кардиолог',
    experience: 'Стаж 15 лет',
    price: 'от 1500 ₽',
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 3,
    clinicId: 3,
    name: 'Сидорова Анна Дмитриевна',
    specialty: 'Невролог',
    experience: 'Стаж 7 лет',
    price: 'от 1400 ₽',
    rating: 4.5,
    reviewCount: 98,
  },
  {
    id: 4,
    clinicId: 4,
    name: 'Королева Анна Викторовна',
    specialty: 'Гинеколог',
    experience: 'Стаж 14 лет',
    price: 'от 1600 ₽',
    rating: 4.8,
    reviewCount: 203,
  },
  {
    id: 5,
    clinicId: 5,
    name: 'Комогоров Александр Иванович',
    specialty: 'Стоматолог',
    experience: 'Стаж 29 лет',
    price: 'от 800 ₽',
    rating: 4.3,
    reviewCount: 312,
  },
  {
    id: 6,
    clinicId: 6,
    name: 'Фролов Сергей Павлович',
    specialty: 'Ортопед',
    experience: 'Стаж 8 лет',
    price: 'от 1800 ₽',
    rating: 4.6,
    reviewCount: 87,
  },
  {
    id: 7,
    clinicId: 7,
    name: 'Лебедева Юлия Николаевна',
    specialty: 'Кардиолог',
    experience: 'Стаж 12 лет',
    price: 'от 2000 ₽',
    rating: 4.9,
    reviewCount: 165,
  },
  {
    id: 8,
    clinicId: 9,
    name: 'Сидоров Николай Игоревич',
    specialty: 'Стоматолог',
    experience: 'Стаж 10 лет',
    price: 'от 1700 ₽',
    rating: 4.7,
    reviewCount: 142,
  },
  {
    id: 9,
    clinicId: 11,
    name: 'Иванов Алексей Петрович',
    specialty: 'Терапевт',
    experience: '15 лет',
    price: '1500 ₽',
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: 10,
    clinicId: 11,
    name: 'Петрова Елена Викторовна',
    specialty: 'Кардиолог',
    experience: '22 года',
    price: '2200 ₽',
    rating: 4.8,
    reviewCount: 134,
  },
];

const getMockSlots = () => [
  {
    doctorId: 1,
    clinicId: 1,
    date: '2024-01-18',
    dateLabel: 'Сегодня',
    slots: ['14:00', '15:30', '16:15'],
  },
  {
    doctorId: 2,
    clinicId: 2,
    date: '2024-01-19',
    dateLabel: 'Завтра',
    slots: ['10:00', '12:30', '14:45'],
  },
  {
    doctorId: 3,
    clinicId: 3,
    date: '2024-01-20',
    dateLabel: 'Пятница',
    slots: ['09:00', '10:30', '11:15'],
  },
  {
    doctorId: 4,
    clinicId: 4,
    date: '2024-01-23',
    dateLabel: 'Понедельник',
    slots: ['11:00', '13:20', '15:00'],
  },
  {
    doctorId: 5,
    clinicId: 5,
    date: '2024-01-25',
    dateLabel: 'Среда',
    slots: ['09:30', '11:15', '14:30'],
  },
  {
    doctorId: 6,
    clinicId: 6,
    date: '2024-01-26',
    dateLabel: 'Четверг',
    slots: ['17:30', '18:00'],
  },
  {
    doctorId: 7,
    clinicId: 7,
    date: '2024-01-27',
    dateLabel: 'Пятница',
    slots: ['08:00', '09:40', '13:10'],
  },
  {
    doctorId: 8,
    clinicId: 9,
    date: '2024-01-19',
    dateLabel: 'Завтра',
    slots: ['10:00', '11:30', '13:00'],
  },
  {
    doctorId: 9,
    clinicId: 11,
    date: '2024-01-19',
    dateLabel: 'Завтра',
    slots: ['09:00', '10:30', '12:00'],
  },
  {
    doctorId: 10,
    clinicId: 11,
    date: '2024-01-20',
    dateLabel: 'Пятница',
    slots: ['14:00', '15:45', '17:15'],
  },
];

const getMockServices = () => [
  {
    id: 1,
    name: 'Консультация терапевта',
    price: '1200 ₽',
    duration: '30 мин',
    category: 'Терапия',
  },
  {
    id: 2,
    name: 'Общий анализ крови',
    price: '500 ₽',
    duration: '15 мин',
    category: 'Анализы',
  },
];

const getMockSpecialists = () => [
  {
    id: 1,
    name: 'Иванов Алексей Петрович',
    specialty: 'Терапевт',
    experience: '15 лет',
    rating: 4.9,
    reviewCount: 89,
    price: '1500 ₽',
    firstVisitPrice: true,
    photo: 'https://via.placeholder.com/150x150',
  },
  {
    id: 2,
    name: 'Петрова Елена Викторовна',
    specialty: 'Кардиолог',
    experience: '22 года',
    rating: 4.8,
    reviewCount: 134,
    price: '2200 ₽',
    firstVisitPrice: true,
    photo: 'https://via.placeholder.com/150x150',
  },
  {
    id: 3,
    name: 'Смирнов Дмитрий Александрович',
    specialty: 'Эндокринолог',
    experience: '18 лет',
    rating: 4.7,
    reviewCount: 76,
    price: '2000 ₽',
    photo: 'https://via.placeholder.com/150x150',
  },
  {
    id: 4,
    name: 'Козлова Марина Сергеевна',
    specialty: 'Невролог',
    experience: '12 лет',
    rating: 4.6,
    reviewCount: 52,
    price: '1900 ₽',
    photo: 'https://via.placeholder.com/150x150',
  },
  {
    id: 5,
    name: 'Сидоров Николай Игоревич',
    specialty: 'Стоматолог',
    experience: '10 лет',
    rating: 4.7,
    reviewCount: 142,
    price: '1700 ₽',
    firstVisitPrice: true,
    photo: 'https://via.placeholder.com/150x150',
  },
];

const getMockTimeSlots = () => [
  { time: '09:00', available: true, period: 'morning' },
  { time: '09:30', available: true, period: 'morning' },
  { time: '10:00', available: false, period: 'morning' },
  { time: '10:30', available: true, period: 'morning' },
  { time: '11:00', available: true, period: 'morning' },
  { time: '14:00', available: true, period: 'afternoon' },
  { time: '14:30', available: true, period: 'afternoon' },
  { time: '15:00', available: false, period: 'afternoon' },
  { time: '15:30', available: true, period: 'afternoon' },
  { time: '16:00', available: true, period: 'afternoon' },
];

// Hook-based API access

// Get all clinics
export function useClinics() {
  return useAsync(
    async () => {
      try {
        return await fetchData('clinics.json');
      } catch (error) {
        console.warn('Failed to load clinics, using mock data:', error);
        return getMockClinics();
      }
    },
    []
  );
}

// Get clinic by ID
export function useClinic(clinicId) {
  const { data: clinics, isLoading, error } = useClinics();
  const [clinic, setClinic] = useState(null);

  useEffect(() => {
    if (clinics && clinicId) {
      setClinic(clinics.find(c => String(c.id) === String(clinicId)) || null);
    }
  }, [clinics, clinicId]);

  return { data: clinic, isLoading, error };
}

// Get all doctors
export function useDoctors() {
  return useAsync(
    async () => {
      try {
        return await fetchData('doctors.json');
      } catch (error) {
        console.warn('Failed to load doctors, using mock data:', error);
        return getMockDoctors();
      }
    },
    []
  );
}

// Get doctor by ID
export function useDoctor(doctorId) {
  const { data: doctors, isLoading, error } = useDoctors();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (doctors && doctorId) {
      setDoctor(doctors.find(d => String(d.id) === String(doctorId)) || null);
    }
  }, [doctors, doctorId]);

  return { data: doctor, isLoading, error };
}

// Get doctors by clinic ID
export function useDoctorsByClinic(clinicId) {
  const { data: doctors, isLoading, error } = useDoctors();
  const [list, setList] = useState([]);

  useEffect(() => {
    if (doctors && clinicId) {
      setList(doctors.filter(d => String(d.clinicId) === String(clinicId)));
    }
  }, [doctors, clinicId]);

  return { data: list, isLoading, error };
}

// Get all slots
export function useSlots() {
  const slotsData = [
      {
        doctorId: 1,
        clinicId: 1,
        date: '2024-01-18',
        dateLabel: 'Сегодня, 18.06',
        slots: ['14:00', '15:30', '16:15'],
      },
      {
        doctorId: 2,
        clinicId: 2,
        date: '2024-01-19',
        dateLabel: 'Завтра, 19.06',
        slots: ['10:00', '12:30', '14:45'],
      },
      {
        doctorId: 3,
        clinicId: 3,
        date: '2024-01-20',
        dateLabel: 'Пятница, 20.06',
        slots: ['09:00', '10:30', '11:15'],
      },
      {
        doctorId: 4,
        clinicId: 4,
        date: '2024-01-23',
        dateLabel: 'Понедельник, 23.06',
        slots: ['11:00', '13:20', '15:00'],
      },
      {
        doctorId: 5,
        clinicId: 5,
        date: '2024-01-25',
        dateLabel: 'Среда, 25.06',
        slots: ['09:30', '11:15', '14:30'],
      },
      {
        doctorId: 6,
        clinicId: 6,
        date: '2024-01-26',
        dateLabel: 'Четверг, 26.06',
        slots: ['17:30', '18:00'],
      },
      {
        doctorId: 7,
        clinicId: 7,
        date: '2024-01-27',
        dateLabel: 'Пятница, 27.06',
        slots: ['08:00', '09:40', '13:10'],
      },
      ];

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(slotsData);
  }, []);

  return { data, isLoading: false, error: null };
}

// Get slots by doctor ID
export function useSlotsByDoctor(doctorId) {
  const { data: slots, isLoading, error } = useSlots();
  const [slot, setSlot] = useState(null);

  useEffect(() => {
    if (slots && doctorId) {
      setSlot(slots.find(s => String(s.doctorId) === String(doctorId)) || null);
    }
  }, [slots, doctorId]);

  return { data: slot, isLoading, error };
}

// Search clinics with enriched doctor data
export function useSearchClinics(query, filters) {
  const { data: clinics, isLoading: clinicsLoading, error: clinicsError } = useClinics();
  const { data: doctors, isLoading: doctorsLoading } = useDoctors();
  const { data: slots, isLoading: slotsLoading, error: slotsError } = useSlots();
  const [results, setResults] = useState([]);

  const loading = clinicsLoading || doctorsLoading || slotsLoading;
  const error = clinicsError || slotsError;

  useEffect(() => {
    if (!clinics) return;

    const filteredClinics = searchClinics(clinics, query, filters);
    if (doctors && slots) {
      const enriched = filteredClinics.map(c => enrichClinicWithDoctorData(c, doctors, slots));
      setResults(enriched);
    } else {
      setResults(filteredClinics);
    }
  }, [clinics, doctors, slots, query, JSON.stringify(filters)]);

  return { data: results, isLoading: loading, error };
}

// Get services for a clinic
export function useServices(clinicId) {
  return useAsync(
    async () => {
      try {
        const data = await fetchData(`services_${clinicId}.json`);
        const result = Array.isArray(data) ? data : (data?.services || []);
        return result;
      } catch (error) {
        console.warn(`Failed to load services_${clinicId}.json, trying fallback...`, error);
        try {
          const fallbackData = await fetchData('services_1.json');
          return Array.isArray(fallbackData) ? fallbackData : (fallbackData?.services || []);
        } catch (fallbackError) {
          console.warn(`Failed to load fallback services, using mock data:`, fallbackError);
          const mockData = getMockServices();
          return Array.isArray(mockData) ? mockData : (mockData?.services || []);
        }
      }
    },
    [clinicId],
    !!clinicId
  );
}

// Get specialists for a clinic
export function useSpecialists(clinicId) {
  return useAsync(
    async () => {
      try {
        const data = await fetchData(`specialists_${clinicId}.json`);
        const result = Array.isArray(data) ? data : (data?.specialists || []);
        return result;
      } catch (error) {
        console.warn(`Failed to load specialists_${clinicId}.json, trying fallback...`, error);
        try {
          const fallbackData = await fetchData('specialists_1.json');
          return Array.isArray(fallbackData) ? fallbackData : (fallbackData?.specialists || []);
        } catch (fallbackError) {
          console.warn(`Failed to load fallback specialists, using mock data:`, fallbackError);
          const mockData = getMockSpecialists();
          return Array.isArray(mockData) ? mockData : (mockData?.specialists || []);
        }
      }
    },
    [clinicId],
    !!clinicId
  );
}

// Get time slots for a specialist on a specific date
export function useTimeSlots(specialistId, date) {
  return useAsync(
    async () => {
      try {
        return await fetchData(`slots_${specialistId}_${date}.json`);
      } catch (error) {
        console.warn(
          `Failed to load time slots for specialist ${specialistId} on ${date}, using mock data:`,
          error,
        );
        return getMockTimeSlots();
      }
    },
    [specialistId, date],
    !!specialistId && !!date
  );
}

// Get available dates for clinic
export function useAvailableDates(clinicId, daysAhead = 14) {
  return useAsync(
    () => generateAvailableDates(daysAhead),
    [clinicId, daysAhead],
    !!clinicId
  );
}

// Create booking mutation
export function useCreateBooking() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBooking = async bookingData => {
    setLoading(true);
    setError(null);
    try {
      const result = await new Promise(resolve => {
        setTimeout(() => {
          resolve({
            id: Math.random().toString(36).substr(2, 9),
            ...bookingData,
            status: 'confirmed',
            createdAt: new Date().toISOString(),
          });
        }, 1000);
      });
      return result;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { createBooking, isLoading, error };
}

// Prefetch data for better UX
export function usePrefetchData() {
  const prefetchClinics = () => {
    fetchData('clinics.json').catch(() => {});
  };

  const prefetchServices = clinicId => {
    if (clinicId) fetchData(`services_${clinicId}.json`).catch(() => {});
  };

  const prefetchSpecialists = clinicId => {
    if (clinicId) fetchData(`specialists_${clinicId}.json`).catch(() => {});
  };

  const prefetchDoctors = () => {
    fetchData('doctors.json').catch(() => {});
  };

  const prefetchSlots = () => {
    fetchData('slots.json').catch(() => {});
  };

  return {
    prefetchClinics,
    prefetchServices,
    prefetchSpecialists,
    prefetchDoctors,
    prefetchSlots,
  };
}
