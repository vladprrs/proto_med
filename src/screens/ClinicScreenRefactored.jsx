import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useClinic, useDoctors, useSlots, useServices, useSpecialists } from '../hooks/useApi';
import { MapScreenLayout } from '../components/layout';
import { ClinicHeader, ClinicInfo, ClinicTabs } from '../components/clinic';
import { useBookingContext, useAppointmentsContext, useUIContext } from '../contexts/index.jsx';
import AppointmentCard from '../components/AppointmentCard';

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
  background: #fff;
  box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.06);
  position: relative;
`;

const TabContentContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #898989;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #f5373c;
`;

const ClinicScreenRefactored = () => {
  const { clinicId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('services');
  const booking = useBookingContext();
  const appointments = useAppointmentsContext();
  const ui = useUIContext();

  // API hooks
  const { data: clinic, isLoading: clinicLoading, error: clinicError } = useClinic(clinicId);
  const { data: services, isLoading: servicesLoading } = useServices(clinicId);
  const { data: specialists, isLoading: specialistsLoading } = useSpecialists(clinicId);
  const { data: doctors } = useDoctors();
  const { data: slots } = useSlots();

  // Mock data for demonstration
  const mockClinic = {
    id: clinicId,
    name: 'МедЦентр Здоровье',
    rating: 4.8,
    reviewCount: 234,
    distance: '1.2 км',
    address: 'ул. Примерная, 123',
    workingHours: '9:00 - 21:00',
  };

  const clinicData = clinic || mockClinic;

  // Получаем данные о докторе для клиник с короной
  const getAvailableDoctor = () => {
    if (!clinicData.hasCrown || !clinicData.featuredDoctorId || !doctors || !slots) {
      return null;
    }

    const doctor = doctors.find(d => d.id === clinicData.featuredDoctorId);
    if (!doctor) return null;

    const doctorSlots = slots.find(s => s.doctorId === doctor.id);

    return {
      name: doctor.name,
      specialty: doctor.specialty,
      experience: doctor.experience,
      photo: doctor.photo,
      price: doctor.price,
      availableSlots: doctorSlots?.slots || [],
      todaySlots: doctorSlots?.dateLabel || 'Нет доступных слотов',
    };
  };

  const handleClose = () => {
    booking.actions.resetBookingFlow();
    navigate(-1);
  };

  const handleBookingClick = () => {
    // Для клиник без короны - переход к услугам для выбора
    setActiveTab('services');
  };

  const handleSlotClick = (slot, doctor) => {
    // Для клиник с короной - быстрая запись на выбранный слот
    console.log('Выбран слот:', slot, 'врач:', doctor.name);

    // Устанавливаем данные для бронирования
    booking.actions.selectServices([
      {
        id: 'consultation',
        name: 'Консультация врача',
        price: doctor.price || 1500,
        duration: 30,
      },
    ]);

    booking.actions.selectSpecialist({
      id: doctor.id || 1,
      name: doctor.name,
      specialty: doctor.specialty,
      experience: doctor.experience,
      price: doctor.price || 1500,
    });

    booking.actions.selectDateTime('2024-01-18', slot);

    // Переходим к подтверждению
    navigate('/confirmation');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'services':
        if (servicesLoading) {
          return <LoadingContainer>Загрузка услуг...</LoadingContainer>;
        }
        return (
          <TabContentContainer>
            <h3>Услуги</h3>
            {services?.map(service => (
              <div key={service.id}>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <p>Цена: {service.price}₽</p>
              </div>
            )) || <p>Список услуг недоступен</p>}
          </TabContentContainer>
        );

      case 'specialists':
        if (specialistsLoading) {
          return <LoadingContainer>Загрузка специалистов...</LoadingContainer>;
        }
        return (
          <TabContentContainer>
            <h3>Специалисты</h3>
            {specialists?.map(specialist => (
              <div key={specialist.id}>
                <h4>{specialist.name}</h4>
                <p>{specialist.specialty}</p>
                <p>Опыт: {specialist.experience}</p>
                <p>Рейтинг: {specialist.rating}</p>
              </div>
            )) || <p>Список специалистов недоступен</p>}
          </TabContentContainer>
        );

      case 'reviews':
        return (
          <TabContentContainer>
            <h3>Отзывы</h3>
            <p>Отзывы пациентов будут доступны в следующих версиях.</p>
          </TabContentContainer>
        );

      case 'info':
        return (
          <TabContentContainer>
            <h3>Информация о клинике</h3>
            <p>
              <strong>Адрес:</strong> {clinicData.address}
            </p>
            <p>
              <strong>Режим работы:</strong> {clinicData.workingHours}
            </p>
            <p>
              <strong>Расстояние:</strong> {clinicData.distance}
            </p>
            <p>
              <strong>Рейтинг:</strong> {clinicData.rating} ({clinicData.reviewCount} отзывов)
            </p>
          </TabContentContainer>
        );

      default:
        return null;
    }
  };

  if (clinicLoading) {
    return (
      <MapScreenLayout
        mapImage="/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg"
        mapHeight="244px"
        contentTop="211px"
      >
        <LoadingContainer>Загрузка информации о клинике...</LoadingContainer>
      </MapScreenLayout>
    );
  }

  if (clinicError) {
    return (
      <MapScreenLayout
        mapImage="/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg"
        mapHeight="244px"
        contentTop="211px"
      >
        <ErrorContainer>Ошибка загрузки клиники</ErrorContainer>
      </MapScreenLayout>
    );
  }

  return (
    <MapScreenLayout
      mapImage="/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg"
      mapHeight="244px"
      contentTop="211px"
    >
      <ContentContainer>
        <OrganizationCard>
          <ClinicHeader clinicName={clinicData.name} onClose={handleClose} />

          <ClinicInfo
            clinic={clinicData}
            showCrown={clinicData.hasCrown}
            availableDoctor={getAvailableDoctor()}
            onBookingClick={handleBookingClick}
            onSlotClick={handleSlotClick}
          />

          <ClinicTabs activeTab={activeTab} onTabChange={setActiveTab}>
            {renderTabContent()}
          </ClinicTabs>
        </OrganizationCard>

        {/* Показать активную запись если есть */}
        {appointments.activeAppointment && (
          <div style={{ padding: '16px', width: '100%' }}>
            <AppointmentCard appointment={appointments.activeAppointment} isActive={true} />
          </div>
        )}
      </ContentContainer>
    </MapScreenLayout>
  );
};

export default ClinicScreenRefactored;
