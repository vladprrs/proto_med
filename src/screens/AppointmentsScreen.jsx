import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import AppointmentCard from '../components/AppointmentCard';
import { MapScreenLayout } from '../components/layout';

// Удален Container - заменен на MapScreenLayout

const Header = styled.div`
  background: white;
  padding: 60px 16px 16px 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background: #f8f8f8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #eeeeee;
  }
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

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #141414;
  margin: 0;
`;

const FilterTabs = styled.div`
  display: flex;
  background: #f8f8f8;
  border-radius: 12px;
  padding: 4px;
  margin-top: 16px;
`;

const FilterTab = styled.button`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: ${props => (props.$active ? 'white' : 'transparent')};
  color: ${props => (props.$active ? '#141414' : '#898989')};
  font-weight: ${props => (props.$active ? '600' : '400')};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => (props.$active ? 'white' : '#EEEEEE')};
  }
`;

const Content = styled.div`
  padding: 16px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #898989;
`;

const EmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const EmptyTitle = styled.h3`
  font-size: 18px;
  color: #141414;
  margin: 0 0 8px 0;
`;

const EmptyText = styled.p`
  font-size: 15px;
  color: #898989;
  margin: 0 0 24px 0;
  line-height: 1.4;
`;

const CreateAppointmentButton = styled.button`
  background: #1ba136;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #169a2e;
  }
`;

const AppointmentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #141414;
  margin: 0 0 12px 0;
`;

const AppointmentsScreen = () => {
  const navigate = useNavigate();
  const { appointments: appointmentsState } = useAppContext();
  const { appointments } = appointmentsState;
  const [activeFilter, setActiveFilter] = useState('all');

  const handleBack = () => {
    navigate(-1);
  };

  const handleCreateAppointment = () => {
    navigate('/search?q=Клиника');
  };

  const filterAppointments = (appointments, filter) => {
    switch (filter) {
    case 'active':
      return appointments.filter(apt => apt.status === 'active' || !apt.status);
    case 'completed':
      return appointments.filter(apt => apt.status === 'completed');
    case 'cancelled':
      return appointments.filter(apt => apt.status === 'cancelled');
    default:
      return appointments;
    }
  };

  const filteredAppointments = filterAppointments(appointments, activeFilter);

  const getFilterTitle = filter => {
    switch (filter) {
    case 'active':
      return 'Активные записи';
    case 'completed':
      return 'Завершенные записи';
    case 'cancelled':
      return 'Отмененные записи';
    default:
      return 'Все записи';
    }
  };

  return (
    <MapScreenLayout
      noRadius
      contentTop="0px"
      mapImage="/assets/images/dbeabc5ac0f4d8edc9feb4b0b06f4520eafc61ab_750.jpg"
    >
      <Header>
        <HeaderContent>
          <BackButton onClick={handleBack}>
            <BackIcon />
          </BackButton>
          <Title>Мои записи</Title>
          <div style={{ width: '40px' }} /> {/* Spacer */}
        </HeaderContent>

        <FilterTabs>
          <FilterTab $active={activeFilter === 'all'} onClick={() => setActiveFilter('all')}>
            Все ({appointments.length})
          </FilterTab>
          <FilterTab $active={activeFilter === 'active'} onClick={() => setActiveFilter('active')}>
            Активные ({filterAppointments(appointments, 'active').length})
          </FilterTab>
          <FilterTab
            $active={activeFilter === 'completed'}
            onClick={() => setActiveFilter('completed')}
          >
            Завершенные ({filterAppointments(appointments, 'completed').length})
          </FilterTab>
          <FilterTab
            $active={activeFilter === 'cancelled'}
            onClick={() => setActiveFilter('cancelled')}
          >
            Отмененные ({filterAppointments(appointments, 'cancelled').length})
          </FilterTab>
        </FilterTabs>
      </Header>

      <Content>
        {filteredAppointments.length === 0 ? (
          <EmptyState>
            <EmptyIcon>📅</EmptyIcon>
            <EmptyTitle>
              {activeFilter === 'all'
                ? 'У вас пока нет записей'
                : `Нет ${getFilterTitle(activeFilter).toLowerCase()}`}
            </EmptyTitle>
            <EmptyText>
              {activeFilter === 'all'
                ? 'Запишитесь на прием к врачу или в салон красоты'
                : 'В этой категории записей не найдено'}
            </EmptyText>
            {activeFilter === 'all' && (
              <CreateAppointmentButton onClick={handleCreateAppointment}>
                Записаться
              </CreateAppointmentButton>
            )}
          </EmptyState>
        ) : (
          <AppointmentsList>
            <SectionTitle>{getFilterTitle(activeFilter)}</SectionTitle>
            {filteredAppointments.map(appointment => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </AppointmentsList>
        )}
      </Content>
    </MapScreenLayout>
  );
};

export default AppointmentsScreen;
