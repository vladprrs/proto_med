import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Base API configuration
const BASE_URL = '/data/';
const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

// Generic fetch function
async function fetchData(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
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
        clinic.specialties?.some(specialty => specialty.toLowerCase().includes(searchTerm))
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
  if (clinic.hasCrown) {
    console.log(
      '🔸 enrichClinicWithDoctorData:',
      clinic.name,
      'featuredDoctorId:',
      clinic.featuredDoctorId
    );
  }

  if (!clinic.featuredDoctorId) {
    if (clinic.hasCrown) {
      console.log('🔸 No featuredDoctorId for', clinic.name);
    }
    return clinic;
  }

  const doctor = doctors.find(d => d.id === clinic.featuredDoctorId);
  if (clinic.hasCrown) {
    console.log('🔸 Found doctor:', doctor?.name, 'for clinic:', clinic.name);
  }

  if (!doctor) {
    if (clinic.hasCrown) {
      console.log(
        '🔸 Doctor not found for clinic:',
        clinic.name,
        'doctorId:',
        clinic.featuredDoctorId
      );
    }
    return clinic;
  }

  const doctorSlots = slots.find(s => s.doctorId === doctor.id);
  if (clinic.hasCrown) {
    console.log('🔸 Found slots for doctor:', doctor.name, 'slots:', doctorSlots?.slots);
  }

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
    },
  };

  if (clinic.hasCrown) {
    console.log(
      '🔸 Enriched clinic:',
      clinic.name,
      'with doctor:',
      enriched.availableDoctor.name,
      'slots:',
      enriched.availableDoctor.availableSlots.length
    );
  }
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
    if (isToday) displayName = 'Сегодня';
    else if (isTomorrow) displayName = 'Завтра';

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
];

const getMockSlots = () => [
  {
    doctorId: 1,
    clinicId: 1,
    date: '2024-01-18',
    dateLabel: 'Сегодня',
    slots: ['14:00', '15:30', '16:15'],
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
    name: 'Петров Петр Петрович',
    specialty: 'Терапевт',
    experience: '15 лет',
    rating: 4.9,
    reviewCount: 234,
    price: 'от 1500 ₽',
    nextAvailable: 'Сегодня в 14:00',
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

// React Query hooks

// Get all clinics
export function useClinics() {
  return useQuery({
    queryKey: ['clinics'],
    queryFn: async () => {
      try {
        return await fetchData('clinics.json');
      } catch (error) {
        console.warn('Failed to load clinics, using mock data:', error);
        return getMockClinics();
      }
    },
    staleTime: CACHE_TIME,
    gcTime: CACHE_TIME, // Обновлено: cacheTime -> gcTime
    retry: 1,
  });
}

// Get clinic by ID
export function useClinic(clinicId) {
  const { data: clinics } = useClinics();

  return useQuery({
    queryKey: ['clinic', clinicId],
    queryFn: () => {
      if (!clinics) return null;
      return clinics.find(clinic => String(clinic.id) === String(clinicId));
    },
    enabled: !!clinics && !!clinicId,
    staleTime: CACHE_TIME,
  });
}

// Get all doctors
export function useDoctors() {
  return useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        return await fetchData('doctors.json');
      } catch (error) {
        console.warn('Failed to load doctors, using mock data:', error);
        return getMockDoctors();
      }
    },
    staleTime: CACHE_TIME,
    gcTime: CACHE_TIME, // Обновлено: cacheTime -> gcTime
    retry: 1,
  });
}

// Get doctor by ID
export function useDoctor(doctorId) {
  const { data: doctors } = useDoctors();

  return useQuery({
    queryKey: ['doctor', doctorId],
    queryFn: () => {
      if (!doctors) return null;
      return doctors.find(doctor => String(doctor.id) === String(doctorId));
    },
    enabled: !!doctors && !!doctorId,
    staleTime: CACHE_TIME,
  });
}

// Get doctors by clinic ID
export function useDoctorsByClinic(clinicId) {
  const { data: doctors } = useDoctors();

  return useQuery({
    queryKey: ['doctors', 'clinic', clinicId],
    queryFn: () => {
      if (!doctors) return [];
      return doctors.filter(doctor => String(doctor.clinicId) === String(clinicId));
    },
    enabled: !!doctors && !!clinicId,
    staleTime: CACHE_TIME,
  });
}

// Get all slots
export function useSlots() {
  return useQuery({
    queryKey: ['slots'],
    queryFn: async () => {
      console.log('🔸 Loading slots data...');

      // Всегда используем статические данные для стабильности
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
          clinicId: 3,
          date: '2024-01-20',
          dateLabel: 'Пятница, 20.06',
          slots: ['09:00', '09:45', '10:30', '11:15'],
        },
        {
          doctorId: 3,
          clinicId: 4,
          date: '2024-01-23',
          dateLabel: 'Понедельник, 23.06',
          slots: ['11:00', '13:20', '15:00', '16:40'],
        },
        {
          doctorId: 4,
          clinicId: 5,
          date: '2024-01-25',
          dateLabel: 'Среда, 25.06',
          slots: ['09:30', '11:15', '14:30'],
        },
        {
          doctorId: 5,
          clinicId: 6,
          date: '2024-01-18',
          dateLabel: 'Сегодня, 18.06',
          slots: ['17:30'],
        },
        {
          doctorId: 6,
          clinicId: 2,
          date: '2024-01-19',
          dateLabel: 'Завтра, 19.06',
          slots: ['10:00', '12:30', '14:45'],
        },
      ];

      console.log('🔸 Slots loaded:', slotsData?.length);
      return slotsData;
    },
    staleTime: 0, // Без кэширования для стабильности
    gcTime: 0, // Обновлено: cacheTime -> gcTime
    retry: 0, // Без повторов
  });
}

// Get slots by doctor ID
export function useSlotsByDoctor(doctorId) {
  const { data: slots } = useSlots();

  return useQuery({
    queryKey: ['slots', 'doctor', doctorId],
    queryFn: () => {
      if (!slots) return null;
      return slots.find(slot => String(slot.doctorId) === String(doctorId));
    },
    enabled: !!slots && !!doctorId,
    staleTime: CACHE_TIME,
  });
}

// Search clinics with enriched doctor data
export function useSearchClinics(query, filters) {
  const { data: clinics, isLoading: clinicsLoading, error: clinicsError } = useClinics();
  const { data: doctors, isLoading: doctorsLoading } = useDoctors();
  const { data: slots, isLoading: slotsLoading, error: slotsError } = useSlots();

  console.log(
    '🔸 useSearchClinics - clinics:',
    clinics?.length,
    'doctors:',
    doctors?.length,
    'slots:',
    slots?.length
  );
  console.log(
    '🔸 Loading states - clinics:',
    clinicsLoading,
    'doctors:',
    doctorsLoading,
    'slots:',
    slotsLoading
  );
  if (slotsError) console.log('🔸 Slots error:', slotsError);

  return useQuery({
    queryKey: ['searchClinics', query, filters],
    queryFn: () => {
      console.log('useSearchClinics query function - clinics:', clinics?.length, 'query:', query);
      if (!clinics) return [];

      // First filter clinics
      const filteredClinics = searchClinics(clinics, query, filters);
      console.log('Filtered clinics:', filteredClinics.length);

      // Then enrich with doctor data if available
      if (doctors && slots) {
        console.log('🔸 Enriching clinics with doctor data...');
        const enriched = filteredClinics.map(clinic =>
          enrichClinicWithDoctorData(clinic, doctors, slots)
        );
        console.log('🔸 Enriched clinics:', enriched.length);

        // Проверяем, что обогащение прошло успешно для клиник с короной
        const crownClinics = enriched.filter(c => c.hasCrown);
        const enrichedCrownClinics = crownClinics.filter(c => c.availableDoctor);
        console.log(
          '🔸 Crown clinics:',
          crownClinics.length,
          'enriched:',
          enrichedCrownClinics.length
        );

        return enriched;
      }

      console.log(
        '🔸 Returning filtered clinics without enrichment - doctors:',
        !!doctors,
        'slots:',
        !!slots
      );
      return filteredClinics;
    },
    enabled: !!clinics,
    staleTime: CACHE_TIME,
  });
}

// Get services for a clinic
export function useServices(clinicId) {
  return useQuery({
    queryKey: ['services', clinicId],
    queryFn: async () => {
      try {
        const data = await fetchData(`services_${clinicId}.json`);
        // Извлекаем массив услуг из объекта response
        return data?.services || [];
      } catch (error) {
        console.warn(`Failed to load services for clinic ${clinicId}, using mock data:`, error);
        const mockData = getMockServices();
        return mockData?.services || mockData || [];
      }
    },
    enabled: !!clinicId,
    staleTime: CACHE_TIME,
  });
}

// Get specialists for a clinic
export function useSpecialists(clinicId) {
  return useQuery({
    queryKey: ['specialists', clinicId],
    queryFn: async () => {
      try {
        return await fetchData(`specialists_${clinicId}.json`);
      } catch (error) {
        console.warn(`Failed to load specialists for clinic ${clinicId}, using mock data:`, error);
        return getMockSpecialists();
      }
    },
    enabled: !!clinicId,
    staleTime: CACHE_TIME,
  });
}

// Get time slots for a specialist on a specific date
export function useTimeSlots(specialistId, date) {
  return useQuery({
    queryKey: ['timeSlots', specialistId, date],
    queryFn: async () => {
      try {
        return await fetchData(`slots_${specialistId}_${date}.json`);
      } catch (error) {
        console.warn(
          `Failed to load time slots for specialist ${specialistId} on ${date}, using mock data:`,
          error
        );
        return getMockTimeSlots();
      }
    },
    enabled: !!specialistId && !!date,
    staleTime: CACHE_TIME,
  });
}

// Get available dates for clinic
export function useAvailableDates(clinicId, daysAhead = 14) {
  return useQuery({
    queryKey: ['availableDates', clinicId, daysAhead],
    queryFn: () => generateAvailableDates(daysAhead),
    enabled: !!clinicId,
    staleTime: CACHE_TIME,
  });
}

// Create booking mutation
export function useCreateBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: bookingData => {
      // Mock booking creation - in real app would POST to API
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            id: Math.random().toString(36).substr(2, 9),
            ...bookingData,
            status: 'confirmed',
            createdAt: new Date().toISOString(),
          });
        }, 1000);
      });
    },
    onSuccess: () => {
      // Invalidate relevant queries to refresh data
      queryClient.invalidateQueries({ queryKey: ['timeSlots'] });
    },
  });
}

// Prefetch data for better UX
export function usePrefetchData() {
  const queryClient = useQueryClient();

  const prefetchClinics = () => {
    queryClient.prefetchQuery({
      queryKey: ['clinics'],
      queryFn: () => fetchData('clinics.json'),
    });
  };

  const prefetchServices = clinicId => {
    queryClient.prefetchQuery({
      queryKey: ['services', clinicId],
      queryFn: () => fetchData(`services_${clinicId}.json`),
    });
  };

  const prefetchSpecialists = clinicId => {
    queryClient.prefetchQuery({
      queryKey: ['specialists', clinicId],
      queryFn: () => fetchData(`specialists_${clinicId}.json`),
    });
  };

  const prefetchDoctors = () => {
    queryClient.prefetchQuery({
      queryKey: ['doctors'],
      queryFn: () => fetchData('doctors.json'),
    });
  };

  const prefetchSlots = () => {
    queryClient.prefetchQuery({
      queryKey: ['slots'],
      queryFn: () => fetchData('slots.json'),
    });
  };

  return {
    prefetchClinics,
    prefetchServices,
    prefetchSpecialists,
    prefetchDoctors,
    prefetchSlots,
  };
}
