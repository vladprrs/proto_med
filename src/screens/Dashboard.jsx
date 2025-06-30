import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  useAppointmentsContext,
  useBookingContext,
  useUserContext,
  useUIContext,
} from '../contexts/index.jsx';
import AppointmentCard from '../components/AppointmentCard';
import BottomNavBar from '../components/BottomNavBar';

// Новые компоненты
import { MapScreenLayout, BottomSheet } from '../components/layout';
import { SearchField, IconButton } from '../components/common';
import { theme } from '../styles/theme';
import { typography, flexBetween } from '../styles/mixins';

// Status Bar компонент
const StatusBar = styled.div`
  width: 100%;
  height: 20px;
  backdrop-filter: blur(20px);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;
  z-index: 100;
`;

const TimeDisplay = styled.div`
  color: #000;
  font-family:
    'SF Pro Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-weight: 600;
  margin-left: 135px;
`;

// Nav bar
const NavBar = styled.div`
  ${flexBetween}
  align-self: stretch;
  padding: 0 ${theme.spacing.lg} ${theme.spacing.lg} ${theme.spacing.lg};
  gap: ${theme.spacing.md};
`;

const SalutIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: ${theme.borderRadius.small};
  background-image: url('/assets/images/0235e2ec7b64e89803c2ebe320dbddf014cebf7a_48.jpg');
  background-size: cover;
`;

// Transport section
const TransportSection = styled.div`
  display: flex;
  padding: ${theme.spacing.lg} 0px 0px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  height: 40px;
  overflow: hidden;
  background: ${theme.colors.backgroundSecondary};
`;

const FadeMask = styled.div`
  display: flex;
  width: 320px;
  height: 40px;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const TransportButtons = styled.div`
  display: flex;
  width: 586px;
  align-items: center;
  gap: ${theme.spacing.sm};
  position: absolute;
  left: ${theme.spacing.lg};
  top: 0px;
  height: 40px;
`;

const TransportButton = styled.div`
  display: flex;
  padding: 10px 14px;
  align-items: center;
  gap: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.medium};
  background: ${theme.colors.surface01};
  white-space: nowrap;
`;

const TrafficTime = styled.span`
  color: ${props => props.color || theme.colors.textPrimary};
  ${typography.subhead}
  text-align: center;
  font-weight: 500;
`;

// Main content sections
const ContentSection = styled.div`
  display: flex;
  padding: ${theme.spacing.lg} ${theme.spacing.lg} 0px ${theme.spacing.lg};
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  align-self: stretch;
  background: ${theme.colors.backgroundPrimary};
`;

const SectionTitle = styled.div`
  ${typography.title2}
  color: ${theme.colors.textPrimary};
  font-weight: 600;
  padding-bottom: ${theme.spacing.md};
`;

// Advices section
const AdvicesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: ${theme.spacing.md};
`;

const CardsGrid = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
`;

// Cards
const InterestingCard = styled.div`
  display: flex;
  height: 244px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  background: ${theme.colors.backgroundSecondary};
  flex-direction: column;
  cursor: pointer;
`;

const CardTextSection = styled.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const CardTitle = styled.div`
  ${typography.body}
  color: ${theme.colors.textPrimary};
  font-weight: 500;
  padding: 10px 0px 2px 0px;
`;

const CardSubtitle = styled.div`
  ${typography.footnote}
  color: ${theme.colors.textSecondary};
  padding-bottom: 12px;
`;

const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1 0 0;
  align-self: stretch;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
`;

// Meta cards
const MetaCard = styled.div`
  display: flex;
  height: 116px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  background: ${theme.colors.backgroundSecondary};
  position: relative;
  cursor: pointer;
`;

const MetaCardContent = styled.div`
  display: flex;
  padding: 0px 16px 12px 16px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 116px;
`;

const MetaCardTitle = styled.div`
  ${typography.body}
  color: ${theme.colors.textPrimary};
  font-weight: 500;
  padding: 10px 0px 2px 0px;
`;

const MetaCardIcon = styled.div`
  display: flex;
  height: 1px;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: stretch;
`;

const IconPlace = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: ${theme.colors.surface01};
  font-size: 32px;
`;

// Bottom spacing
const BottomSpacing = styled.div`
  height: 60px;
  background: ${theme.colors.backgroundPrimary};
`;

// Удалены старые стили BottomTabBar - заменены на BottomNavBar компонент

const Dashboard = () => {
  const navigate = useNavigate();
  const { appointments, addAppointment } = useAppointmentsContext();
  const booking = useBookingContext();
  const user = useUserContext();
  const ui = useUIContext();

  const handleSearchClick = () => {
    navigate('/search?q=Клиника');
  };

  // Создаем тестовую запись если её нет
  const createTestAppointment = () => {
    if (appointments.length === 0) {
      const testAppointment = {
        id: 'test-appointment-1',
        clinic: { name: 'МедЦентр «Здоровье»' },
        dateTime: {
          date: '2024-06-14',
          time: '10:30',
        },
        services: ['Консультация терапевта'],
        specialist: { name: 'Иванов И.И.' },
      };
      addAppointment(testAppointment);
    }
  };

  useEffect(() => {
    //createTestAppointment();

    // Debug functions available in console
    window.debugAppointments = {
      check: () => {
        const stored = localStorage.getItem('medpoisk-appointments');
        console.log('🔍 localStorage content:', stored);
        console.log('🔍 Parsed:', stored ? JSON.parse(stored) : 'empty');
        console.log('🔍 Context appointments:', appointments);
        console.log('🔍 Storage loaded flag:', appointments.isStorageLoaded);
        return {
          stored,
          parsed: stored ? JSON.parse(stored) : null,
          context: appointments,
          isStorageLoaded: appointments.isStorageLoaded,
        };
      },
      clear: () => {
        localStorage.removeItem('medpoisk-appointments');
        console.log('🧹 localStorage cleared');
        window.location.reload();
      },
      add: () => {
        const testAppointment = {
          id: `test-${Date.now()}`,
          clinic: { name: 'Тестовая клиника' },
          dateTime: { date: '2024-06-15', time: '10:00' },
          services: [{ name: 'Тестовая услуга' }],
          specialist: { name: 'Тестовый врач' },
          status: 'active',
        };
        addAppointment(testAppointment);
        console.log('➕ Test appointment added:', testAppointment);
      },
    };

    console.log('🔧 Debug functions available:');
    console.log('  window.debugAppointments.check() - проверить localStorage');
    console.log('  window.debugAppointments.clear() - очистить localStorage');
    console.log('  window.debugAppointments.add() - добавить тестовую запись');
  }, [appointments, addAppointment, appointments.isStorageLoaded]);

  const categories = [
    { id: 1, title: 'Поесть', icon: '🍽️' },
    { id: 2, title: 'Банкоматы', icon: '💳' },
    { id: 3, title: 'Катки', icon: '⛸️' },
    { id: 4, title: 'Салоны красоты', subtitle: '5671 место', icon: '💄' },
    { id: 5, title: 'Пожить', icon: '🏨' },
    { id: 6, title: 'Все рубрики', icon: '⋯' },
  ];

  return (
    <MapScreenLayout
      contentTop="64px"
      mapImage="/assets/images/1787ae2a5cea9bf92b50b8f4cc908087feab9732_640.jpg"
    >
      <StatusBar>
        <div style={{ fontSize: '12px', color: '#000' }}>LTE</div>
        <TimeDisplay>09:41</TimeDisplay>
        <div style={{ fontSize: '12px', color: '#000' }}>100%</div>
      </StatusBar>

      <BottomSheet showDragger>
        <NavBar>
          <SearchField readOnly placeholder="Поиск в Москве" onClick={handleSearchClick} />
          <SalutIcon />
          <IconButton icon="menu" />
        </NavBar>

        {appointments.length > 0 &&
          (() => {
            // Находим ближайшую запись по дате и времени
            const getNextAppointment = appointments => {
              const now = new Date();

              // Сортируем записи по дате и времени
              const sortedAppointments = appointments
                .filter(appointment => appointment.dateTime)
                .sort((a, b) => {
                  const dateA = new Date(`${a.dateTime.date  } ${  a.dateTime.time}`);
                  const dateB = new Date(`${b.dateTime.date  } ${  b.dateTime.time}`);
                  return dateA - dateB;
                });

              // Ищем первую запись в будущем
              const futureAppointment = sortedAppointments.find(appointment => {
                const appointmentDate = new Date(
                  `${appointment.dateTime.date  } ${  appointment.dateTime.time}`,
                );
                return appointmentDate > now;
              });

              // Если нет будущих записей, возвращаем самую свежую
              return futureAppointment || sortedAppointments[0];
            };

            const nextAppointment = getNextAppointment(appointments);

            return (
              <ContentSection>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <SectionTitle style={{ margin: 0 }}>Ближайшая запись</SectionTitle>
                  {appointments.length > 1 && (
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#1BA136',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        transition: 'background 0.2s',
                      }}
                      onClick={() => navigate('/profile')}
                      onMouseEnter={e => (e.target.style.background = '#F0F9F3')}
                      onMouseLeave={e => (e.target.style.background = 'none')}
                    >
                      Все записи
                    </button>
                  )}
                </div>
                {nextAppointment && (
                  <AppointmentCard key={nextAppointment.id} appointment={nextAppointment} />
                )}
              </ContentSection>
            );
          })()}

        <ContentSection>
          <SectionTitle>Советы к месту</SectionTitle>
          <AdvicesSection>
            <CardsGrid>
              <LeftColumn>
                <InterestingCard>
                  <CardTextSection>
                    <CardTitle>Интересное в городе</CardTitle>
                    <CardSubtitle>37 подборок</CardSubtitle>
                  </CardTextSection>
                  <CardImage src="/assets/images/15fcb5df22f040135b4b4a6c11ee1f9feba9623b_276.jpg" />
                </InterestingCard>

                {categories.slice(0, 3).map(category => (
                  <MetaCard key={category.id}>
                    <MetaCardContent>
                      <MetaCardTitle>{category.title}</MetaCardTitle>
                      <MetaCardIcon>
                        <IconPlace>{category.icon}</IconPlace>
                      </MetaCardIcon>
                    </MetaCardContent>
                  </MetaCard>
                ))}
              </LeftColumn>

              <RightColumn>
                {categories.slice(3).map(category => (
                  <MetaCard key={category.id}>
                    <MetaCardContent>
                      <MetaCardTitle>{category.title}</MetaCardTitle>
                      {category.subtitle && <CardSubtitle>{category.subtitle}</CardSubtitle>}
                      <MetaCardIcon>
                        <IconPlace>{category.icon}</IconPlace>
                      </MetaCardIcon>
                    </MetaCardContent>
                  </MetaCard>
                ))}
              </RightColumn>
            </CardsGrid>
          </AdvicesSection>
        </ContentSection>

        <BottomSpacing />
      </BottomSheet>

      <BottomNavBar activeTab="overview" />
    </MapScreenLayout>
  );
};

export default Dashboard;
