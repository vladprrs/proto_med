import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useClinic, useDoctors, useSlots, useServices, useSpecialists, useTimeSlots } from '../hooks/useApi';
import { MapScreenLayout } from '../components/layout';
import { useAppContext } from '../contexts/AppContext';
import AppointmentCard from '../components/AppointmentCard';

// Удалены Container, MapBackground, BlurOverlay - заменены на ScreenLayout

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 0;
  width: 100%;
  min-height: calc(100vh - 211px);
`;

const OrganizationCard = styled.div`
  display: flex;
  padding-bottom: 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: #FFF;
  box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.06);
  position: relative;
`;

const HeaderSection = styled.div`
  display: flex;
  padding: 16px 0px 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: linear-gradient(157deg, #E8F5E8 0%, #FFF 78.03%);
  position: relative;
`;

const NavBar = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  align-self: stretch;
  position: relative;
`;

const NavContent = styled.div`
  display: flex;
  padding: 0px 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  position: relative;
`;

const HeaderTitle = styled.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`;

const Title = styled.div`
  flex: 1 0 0;
  color: #141414;
  font-family: 'SB Sans Text';
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
`;

const BackIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::after {
    content: '';
    width: 10px;
    height: 17px;
    background-color: #141414;
    position: absolute;
    left: 7px;
    top: 3px;
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%, 85% 50%);
  }
`;

const Dragger = styled.div`
  display: flex;
  height: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  position: relative;

  &::after {
    content: '';
    width: 40px;
    height: 4px;
    border-radius: 6px;
    background: rgba(137, 137, 137, 0.25);
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  position: relative;
`;

const TopSection = styled.div`
  display: flex;
  padding: 0px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  position: relative;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`;

const FriendsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  position: relative;
  margin-bottom: 8px;
`;

const FriendsAvatars = styled.div`
  display: flex;
  align-items: center;
  gap: -8px;
  position: relative;
`;

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 2px solid #FFF;
  background: url('/assets/wizard/angelika.jpg') center / cover no-repeat;
  position: relative;
  margin-left: ${props => props.index > 0 ? '-8px' : '0'};
  z-index: ${props => 10 - props.index};
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const ClinicName = styled.div`
  color: #141414;
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.437px;
`;

const CrownBadge = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CrownIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

const SubtitleText = styled.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
  margin-top: 2px;
`;

const CloseButton = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;

const NavButton = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.06);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: rgba(20, 20, 20, 0.12);
  }
`;

const CloseIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 13px;
    height: 2px;
    background-color: #141414;
    transform-origin: center;
  }
  
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const SecondaryLine = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const SecondaryContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  position: relative;
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  position: relative;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
`;

const Star = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  
  &::after {
    content: '★';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    color: ${props => props.filled ? '#FFD700' : '#D4D4D4'};
  }
`;

const RatingText = styled.div`
  color: #141414;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
`;

const ReviewCount = styled.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
`;

const RideTime = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const TimeIcon = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  
  &::after {
    content: '🚗';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
  }
`;

const TimeText = styled.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
`;

const QuickBookingSection = styled.div`
  display: flex;
  padding: 0px 16px 8px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

const QuickBookingContent = styled.div`
  display: flex;
  padding: 8px 16px 0px 0px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  background: rgba(0, 0, 0, 0.00);
  box-shadow: 0px 0.5px 0px 0px rgba(137, 137, 137, 0.30) inset;
  position: relative;
`;

const QuickBookingTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
`;

const QuickBookingTitle = styled.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin-bottom: 4px;
`;

const DoctorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  margin-top: 8px;
`;

const DoctorName = styled.div`
  color: #141414;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
`;

const DoctorSpecialty = styled.div`
  color: rgba(20, 20, 20, 0.70);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const DoctorExperience = styled.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.234px;
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const PriceText = styled.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const FirstVisitBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CheckIcon = styled.div`
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 4.5L6 12L2.5 8.5' stroke='%231BA136' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
`;

const FirstVisitText = styled.div`
  color: #1BA136;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.234px;
`;

const SlotsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  margin-top: 8px;
`;

const SlotsDate = styled.div`
  color: rgba(20, 20, 20, 0.70);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const SlotsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const SlotButton = styled.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #1BA136;
  cursor: pointer;
  
  &:hover {
    background: #169A2E;
  }
`;

const SlotText = styled.div`
  color: #FFF;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const AdButton = styled.button`
  display: flex;
  padding: 13px 16px 15px 16px;
  margin-top: 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 10px;
  border: none;
  background: #1ba136;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;

  &:hover {
    background: #169a2e;
  }
`;

const AdButtonText = styled.div`
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

// Стили для карточек услуг (как в поисковой выдаче)
const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ServiceCard = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 12px;
  background: #FFF;
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

const ServiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`;

const ServiceName = styled.div`
  color: #141414;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.374px;
  margin-bottom: 4px;
`;

const ServiceDescription = styled.div`
  color: rgba(20, 20, 20, 0.70);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
  margin-bottom: 8px;
`;

const ServiceMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ServicePrice = styled.div`
  color: #141414;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.374px;
`;

const ServiceDuration = styled.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
`;

const ServiceCategory = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  border-radius: 6px;
  background: rgba(27, 161, 54, 0.10);
  color: #1BA136;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.24px;
`;

const AvailableDoctors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`;

const DoctorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background: #F8F8F8;
  border-radius: 12px;
`;

const DoctorCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  margin-bottom: 8px;
`;

const DoctorCardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DoctorCardName = styled.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 2px;
`;

const DoctorCardSpecialty = styled.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 8px;
`;

const DoctorCardPrice = styled.div`
  color: #141414;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 4px;
`;

const DoctorFirstVisitBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;

const DoctorCheckIcon = styled.div`
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 4.5L6 12l-3.5-3.5' stroke='%231BA136' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
`;

const DoctorFirstVisitText = styled.div`
  color: #1BA136;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const DoctorSlots = styled.div`
  display: flex;
  flex-direction: column;
`;

const DoctorSlotsDate = styled.div`
  color: #898989;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 8px;
`;

const DoctorSlotsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const DoctorSlotButton = styled.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  background: #1BA136;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background: #169A2E;
  }
`;

const DoctorSlotText = styled.div`
  color: #FFF;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const TabBar = styled.div`
  width: 100%;
  height: 48px;
  position: relative;
  background: #FFF;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0;
  padding: 0 16px;
  height: 48px;
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  background: ${props => props.active ? '#F1F1F1' : 'transparent'};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
`;

const TabLabel = styled.div`
  color: ${props => props.active ? '#141414' : '#898989'};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const TabCounter = styled.div`
  display: flex;
  padding: 1px 5px 2px 5px;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 0.30);
  border-radius: 12px;
`;

const CounterText = styled.div`
  color: #FFF;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.234px;
`;

const MainContent = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  background: #F1F1F1;
  position: relative;
  min-height: 400px;
`;

const ContentCard = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 12px;
  background: #FFF;
`;

const ContentTitle = styled.div`
  color: #141414;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.374px;
`;

const ContentText = styled.div`
  color: rgba(20, 20, 20, 0.70);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
`;

const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const InfoLabel = styled.div`
  color: rgba(20, 20, 20, 0.50);
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
`;

const InfoValue = styled.div`
  color: #141414;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
  text-align: right;
`;

const ClinicScreen = () => {
  const navigate = useNavigate();
  const { clinicId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Получаем записи пользователя из контекста
  const { appointments: appointmentsState } = useAppContext();
  const { appointments, actions } = appointmentsState;

  // Используем API хуки для получения данных клиники, докторов и слотов
  const { data: clinicData, isLoading, error } = useClinic(clinicId);
  const { data: doctors } = useDoctors();
  const { data: slots } = useSlots();
  const { data: services } = useServices(clinicId);
  const { data: specialists } = useSpecialists(clinicId);
  const { data: timeSlots } = useTimeSlots(1, '2024-01-15'); // Для примера используем специалиста 1 и дату
  
  // Фильтруем записи пользователя в эту клинику
  const clinicAppointments = appointments.filter(appointment => {
    if (!appointment.clinic) return false;
    
    // Сравниваем по ID клиники или по названию (для совместимости)
    const appointmentClinicId = appointment.clinic.id?.toString();
    const currentClinicId = clinicId?.toString();
    
    return appointmentClinicId === currentClinicId || 
           appointment.clinic.name === clinicData?.name;
  });

  // Функция для обогащения данных клиники информацией о докторе
  const enrichClinicWithDoctorData = (clinic, doctors, slots) => {
    if (!clinic.featuredDoctorId || !doctors || !slots) {
      return clinic;
    }

    const doctor = doctors.find(d => d.id === clinic.featuredDoctorId);
    if (!doctor) {
      return clinic;
    }

    const doctorSlots = slots.find(s => s.doctorId === doctor.id);
    if (!doctorSlots) {
      return clinic;
    }
    
    return {
      ...clinic,
      availableDoctor: {
        id: doctor.id,
        name: doctor.name,
        specialty: doctor.specialty,
        experience: doctor.experience,
        photo: doctor.photo,
        price: doctor.price,
        firstVisitPrice: doctor.firstVisitPrice,
        availableSlots: doctorSlots.slots || [],
        todaySlots: doctorSlots.dateLabel || 'Сегодня',
        date: doctorSlots.date,
      },
    };
  };

  // Функция для связывания услуг со специалистами
  const getServicesWithSpecialists = () => {
    if (!services || !Array.isArray(services) || !specialists || !Array.isArray(specialists) || !timeSlots) {
      return [];
    }


    // Создаем маппинг категорий услуг к специальностям
    const categoryToSpecialty = {
      'Терапия': ['Терапевт'],
      'Кардиология': ['Кардиолог', 'Терапевт'],
      'Эндокринология': ['Эндокринолог', 'Терапевт'],
      'Неврология': ['Невролог'],
      'Стоматология': ['Стоматолог'],
      'Гинекология': ['Гинеколог'],
      'Диагностика': ['Терапевт', 'Кардиолог', 'Эндокринолог'],
      'Лабораторная диагностика': ['Терапевт', 'Кардиолог', 'Эндокринолог']
    };

          return services.map(service => {
        // Находим специалистов, которые могут выполнить эту услугу
        const availableSpecialists = specialists.filter(specialist => {
          const specialtiesForCategory = categoryToSpecialty[service.category] || [];
          return specialtiesForCategory.includes(specialist.specialty);
        });


        // Для каждого специалиста получаем доступные слоты
        const specialistsWithSlots = availableSpecialists.map(specialist => {
          const availableSlots = timeSlots?.filter(slot => 
            slot.specialistId === specialist.id && slot.available
          ).map(slot => slot.time).slice(0, 4) || []; // Показываем максимум 4 слота


          return {
            ...specialist,
            availableSlots,
            slotsDate: 'Сегодня, 15 янв'
          };
        });

        return {
          ...service,
          availableSpecialists: specialistsWithSlots
        };
      });
  };

  // Функция для обработки клика по слоту
  const handleSlotClick = (slot, event) => {
    event.preventDefault();
    event.stopPropagation();
    
    // Переходим на визард с предзаполненными данными
    const fallbackClinicId = clinicId || '1';
    navigate(`/clinic/${fallbackClinicId}/services`, {
      state: {
        prefilledData: {
          clinic: enrichedClinicData,
          doctor: enrichedClinicData.availableDoctor,
          selectedTime: slot,
          skipSteps: ['specialist'] // Пропускаем выбор специалиста, но проходим через услуги
        }
      }
    });
  };

  // Функция для обработки клика по слоту врача в услуге
  const handleServiceSlotClick = (service, specialist, slot, event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const fallbackClinicId = clinicId || '1';
    navigate(`/clinic/${fallbackClinicId}/services`, {
      state: {
        prefilledData: {
          clinic: enrichedClinicData,
          service: service,
          specialist: specialist,
          selectedTime: slot,
          skipSteps: ['service', 'specialist'] // Пропускаем выбор услуги и специалиста
        }
      }
    });
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleBookAppointment = () => {
    const fallbackClinicId = clinicId || '1';
    navigate(`/clinic/${fallbackClinicId}/services`);
  };

  // Debug функция для создания тестовой записи в эту клинику
  const createTestAppointmentForClinic = () => {
    const testAppointment = {
      id: `test-clinic-${clinicId}-${Date.now()}`,
      clinic: { 
        id: parseInt(clinicId),
        name: clinicData?.name || `Клиника ${clinicId}` 
      },
      dateTime: {
        date: '2024-07-15',
        time: '14:00'
      },
      services: [{ name: 'Консультация терапевта', price: '1500 ₽' }],
      specialist: { name: 'Петров Дмитрий Сергеевич', specialty: 'Терапевт' },
      status: 'active',
      patient: { name: 'Владислав Прищепов', phone: '+7(999)4620809' }
    };
    
    // Добавляем через actions из контекста
    if (actions?.addAppointment) {
      actions.addAppointment(testAppointment);
    } else {
      console.error('❌ Actions not available in context');
    }
  };

  // Добавляем debug функцию в window для тестирования
  React.useEffect(() => {
    window.debugClinicAppointments = {
      create: createTestAppointmentForClinic,
      check: () => {
        return { all: appointments, clinic: clinicAppointments, clinicId, clinicData };
      }
    };
    
  }, [appointments, clinicAppointments, clinicId, clinicData]);

  // Обработка состояний загрузки и ошибок
  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error || !clinicData) {
    return <div>Клиника не найдена</div>;
  }

  // Обогащаем данные клиники информацией о докторе
  const enrichedClinicData = enrichClinicWithDoctorData(clinicData, doctors, slots);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star key={i} filled={i < fullStars} />
      );
    }
    return stars;
  };

  const tabs = [
    { id: 'overview', label: 'Обзор' },
    { id: 'menu', label: 'Услуги', counter: 213 },
    { id: 'photos', label: 'Фото', counter: 432 },
    { id: 'reviews', label: 'Отзывы', counter: 232 },
    { id: 'info', label: 'Инфо' },
    { id: 'promotions', label: 'Акции' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ContentCard>
              <ContentTitle>О клинике</ContentTitle>
              <ContentText>
                {clinicData.subtitle ||
                  'Многопрофильная клиника с современным оборудованием и квалифицированными специалистами.'}
              </ContentText>
            </ContentCard>

            {clinicData.hasCrown && enrichedClinicData.availableDoctor && (
              <ContentCard>
                <ContentTitle>Ближайшие доступные слоты</ContentTitle>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
                  <img src={enrichedClinicData.availableDoctor.photo} style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                  <div>
                    <ContentText style={{ fontWeight: '600' }}>{enrichedClinicData.availableDoctor.name}</ContentText>
                    <ContentText style={{ fontSize: '14px', color: 'rgba(20, 20, 20, 0.7)' }}>
                      {enrichedClinicData.availableDoctor.specialty}
                    </ContentText>
                  </div>
                </div>

                <div style={{ marginTop: '16px', width: '100%' }}>
                  <ContentText style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                    {enrichedClinicData.availableDoctor.todaySlots}
                  </ContentText>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {enrichedClinicData.availableDoctor.availableSlots.map((slot, index) => (
                      <AdButton
                        key={index}
                        onClick={(e) => handleSlotClick(slot, e)}
                        style={{ flex: '1 1 calc(25% - 8px)', background: '#1BA136', color: 'white', padding: '8px 12px' }}
                      >
                        {slot}
                      </AdButton>
                    ))}
                  </div>
                </div>
              </ContentCard>
            )}

            <ContentCard>
              <ContentTitle>Контактная информация</ContentTitle>
              <InfoGrid>
                <InfoRow>
                  <InfoLabel>Адрес</InfoLabel>
                  <InfoValue>{clinicData.address}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Телефон</InfoLabel>
                  <InfoValue>{clinicData.phone}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Режим работы</InfoLabel>
                  <InfoValue>{clinicData.workingHours}</InfoValue>
                </InfoRow>
              </InfoGrid>
            </ContentCard>
            
            <ContentCard>
              <ContentTitle>Популярные услуги</ContentTitle>
              <InfoGrid>
                <InfoRow>
                  <InfoLabel>Консультация терапевта</InfoLabel>
                  <InfoValue>от 1500 ₽</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>УЗИ диагностика</InfoLabel>
                  <InfoValue>от 2000 ₽</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Анализы крови</InfoLabel>
                  <InfoValue>от 800 ₽</InfoValue>
                </InfoRow>
              </InfoGrid>
            </ContentCard>
          </div>
        );
      
      case 'menu':
        // Проверяем наличие данных перед вызовом функции
        if (!services || !specialists) {
          return (
            <ContentCard>
              <ContentTitle>Медицинские услуги</ContentTitle>
              <ContentText>Загрузка услуг...</ContentText>
            </ContentCard>
          );
        }
        
        const servicesWithSpecialists = getServicesWithSpecialists();

        if (servicesWithSpecialists.length === 0) {
          return (
            <ContentCard>
              <ContentTitle>Медицинские услуги</ContentTitle>
              <ContentText>Услуги не найдены или недоступны для онлайн записи</ContentText>
            </ContentCard>
          );
        }

        return (
          <ServicesContainer>
            {servicesWithSpecialists.map((service) => (
              <ServiceCard key={service.id}>
                <ServiceHeader>
                  <ServiceInfo>
                    <ServiceName>{service.name}</ServiceName>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <ServiceMeta>
                      <ServicePrice>{service.price}</ServicePrice>
                      <ServiceDuration>{service.duration}</ServiceDuration>
                    </ServiceMeta>
                  </ServiceInfo>
                  <ServiceCategory>{service.category}</ServiceCategory>
                </ServiceHeader>
                
                {service.availableSpecialists.length > 0 && (
                  <AvailableDoctors>
                    {service.availableSpecialists.map((specialist) => (
                                             <DoctorCard key={specialist.id}>
                         <DoctorCardHeader>
                           <DoctorCardInfo>
                             <DoctorCardName>{specialist.name}</DoctorCardName>
                             <DoctorCardSpecialty>{specialist.specialty} • {specialist.experience}</DoctorCardSpecialty>
                           </DoctorCardInfo>
                           <DoctorCardPrice>{specialist.price}</DoctorCardPrice>
                         </DoctorCardHeader>
                         
                         {specialist.firstVisitPrice && (
                           <DoctorFirstVisitBadge>
                             <DoctorCheckIcon />
                             <DoctorFirstVisitText>Цена за первый приём</DoctorFirstVisitText>
                           </DoctorFirstVisitBadge>
                         )}
                        
                        {specialist.availableSlots.length > 0 ? (
                          <DoctorSlots>
                            <DoctorSlotsDate>{specialist.slotsDate}</DoctorSlotsDate>
                            <DoctorSlotsContainer>
                              {specialist.availableSlots.map((slot, index) => (
                                <DoctorSlotButton 
                                  key={index} 
                                  onClick={(e) => handleServiceSlotClick(service, specialist, slot, e)}
                                >
                                  <DoctorSlotText>{slot}</DoctorSlotText>
                                </DoctorSlotButton>
                              ))}
                            </DoctorSlotsContainer>
                          </DoctorSlots>
                                                 ) : (
                           <DoctorSlots>
                             <DoctorSlotsDate>Нет доступных слотов</DoctorSlotsDate>
                             <DoctorSlotsContainer>
                               <DoctorSlotButton 
                                 style={{ background: '#898989' }}
                                 onClick={(e) => handleServiceSlotClick(service, specialist, null, e)}
                               >
                                 <DoctorSlotText>Записаться</DoctorSlotText>
                               </DoctorSlotButton>
                             </DoctorSlotsContainer>
                           </DoctorSlots>
                         )}
                      </DoctorCard>
                    ))}
                  </AvailableDoctors>
                )}
                
                {service.availableSpecialists.length === 0 && (
                  <ContentText style={{ color: 'rgba(20, 20, 20, 0.50)', fontSize: '14px' }}>
                    Нет доступных специалистов для данной услуги
                  </ContentText>
                )}
              </ServiceCard>
            ))}
          </ServicesContainer>
        );
      
      case 'photos':
        return (
          <ContentCard>
            <ContentTitle>Фотографии клиники</ContentTitle>
            <ContentText>Галерея из 432 фотографий будет загружена...</ContentText>
          </ContentCard>
        );
      
      case 'reviews':
        return (
          <ContentCard>
            <ContentTitle>Отзывы пациентов</ContentTitle>
            <ContentText>232 отзыва от пациентов будут загружены...</ContentText>
          </ContentCard>
        );
      
      case 'info':
        return (
          <ContentCard>
            <ContentTitle>Дополнительная информация</ContentTitle>
            <ContentText>Подробная информация о клинике, лицензиях и сертификатах...</ContentText>
          </ContentCard>
        );
      
      case 'promotions':
        return (
          <ContentCard>
            <ContentTitle>Акции и скидки</ContentTitle>
            <ContentText>Актуальные акции и специальные предложения клиники...</ContentText>
          </ContentCard>
        );
      
      default:
        return (
          <ContentCard>
            <ContentTitle>Контент не найден</ContentTitle>
            <ContentText>Выберите другую вкладку</ContentText>
          </ContentCard>
        );
    }
  };

  return (
    <MapScreenLayout 
      mapImage="/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg"
      mapHeight="244px"
      contentTop="211px"
    >
      <ContentContainer>
        <OrganizationCard>
          <HeaderSection>
            <Dragger />
            <NavBar>
              <NavContent>
                <NavButton onClick={() => navigate(-1)}>
                  <BackIcon />
                </NavButton>
                <HeaderTitle>
                  <Title>{clinicData.name}</Title>
                </HeaderTitle>
                <NavButton onClick={handleClose}>
                  <CloseIcon />
                </NavButton>
              </NavContent>
            </NavBar>
            
            <HeaderContent>
              <TopSection>
                <TopRow>
                  <ContentSection>
                    <FriendsSection>
                      <FriendsAvatars>
                        {[0, 1, 2, 3].map(index => (
                          <Avatar key={index} index={index} />
                        ))}
                      </FriendsAvatars>
                    </FriendsSection>
                    
                    <TitleSection>
                      <TitleRow>
                        <CrownBadge>
                          <CrownIcon width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.42163 0.410057C7.76809 0.164421 8.23191 0.164421 8.57837 0.410058L9.49903 1.06279C9.69411 1.2011 9.9323 1.26493 10.1704 1.24269L11.2941 1.13773C11.7169 1.09823 12.1186 1.33015 12.2959 1.7161L12.7668 2.74172C12.8666 2.95904 13.041 3.13341 13.2583 3.2332L14.2839 3.70414C14.6699 3.88137 14.9018 4.28305 14.8623 4.70591L14.7573 5.8296C14.7351 6.0677 14.7989 6.30588 14.9372 6.50097L15.5899 7.42163C15.8356 7.76809 15.8356 8.23191 15.5899 8.57837L14.9372 9.49903C14.7989 9.69411 14.7351 9.9323 14.7573 10.1704L14.8623 11.2941C14.9018 11.7169 14.6699 12.1186 14.2839 12.2959L13.2583 12.7668C13.041 12.8666 12.8666 13.041 12.7668 13.2583L12.2959 14.2839C12.1186 14.6699 11.7169 14.9018 11.2941 14.8623L10.1704 14.7573C9.9323 14.7351 9.69411 14.7989 9.49903 14.9372L8.57837 15.5899C8.23191 15.8356 7.76809 15.8356 7.42163 15.5899L6.50097 14.9372C6.30588 14.7989 6.0677 14.7351 5.82959 14.7573L4.70591 14.8623C4.28305 14.9018 3.88137 14.6699 3.70414 14.2839L3.2332 13.2583C3.13341 13.041 2.95904 12.8666 2.74172 12.7668L1.7161 12.2959C1.33015 12.1186 1.09823 11.7169 1.13773 11.2941L1.24269 10.1704C1.26493 9.9323 1.2011 9.69411 1.06279 9.49903L0.410057 8.57837C0.164421 8.23191 0.164421 7.76809 0.410058 7.42163L1.06279 6.50097C1.2011 6.30588 1.26493 6.0677 1.24269 5.8296L1.13773 4.70591C1.09823 4.28305 1.33015 3.88137 1.7161 3.70414L2.74172 3.2332C2.95904 3.13341 3.13341 2.95904 3.2332 2.74172L3.70414 1.7161C3.88137 1.33014 4.28305 1.09823 4.70591 1.13773L5.8296 1.24269C6.0677 1.26493 6.30588 1.2011 6.50097 1.06279L7.42163 0.410057Z" fill="#1BA136"/>
                            <path d="M4 5L5 11H11L12 5L10 6L8 4L6 6L4 5Z" fill="white"/>
                          </CrownIcon>
                        </CrownBadge>
                      </TitleRow>
                      <SubtitleText>{clinicData.subtitle}</SubtitleText>
                    </TitleSection>
                  </ContentSection>
                </TopRow>
                
                <SecondaryLine>
                  <SecondaryContent>
                    <RatingSection>
                      <StarsContainer>
                        {renderStars(clinicData.rating)}
                      </StarsContainer>
                      <RatingText>{clinicData.rating}</RatingText>
                      <ReviewCount>{clinicData.reviewCount} оценок</ReviewCount>
                    </RatingSection>
                    <RideTime>
                      <TimeIcon />
                      <TimeText>{clinicData.time}</TimeText>
                    </RideTime>
                  </SecondaryContent>
                </SecondaryLine>
              </TopSection>

              {clinicData.hasOnlineBooking && enrichedClinicData.availableDoctor && (
                <QuickBookingSection>
                  <AdButton onClick={handleBookAppointment}>Записаться на прием</AdButton>
                </QuickBookingSection>
              )}
            </HeaderContent>
          </HeaderSection>
          
          {/* Табы */}
          <TabBar>
            <TabsContainer>
              {tabs.map((tab) => (
                <Tab key={tab.id} active={tab.id === activeTab} onClick={() => setActiveTab(tab.id)}>
                  <TabLabel active={tab.id === activeTab}>{tab.label}</TabLabel>
                  {tab.counter && (
                    <TabCounter>
                      <CounterText>{tab.counter}</CounterText>
                    </TabCounter>
                  )}
                </Tab>
              ))}
            </TabsContainer>
          </TabBar>
          
          <MainContent>
            {renderTabContent()}
          </MainContent>
        </OrganizationCard>
      </ContentContainer>
    </MapScreenLayout>
  );
};

export default ClinicScreen; 