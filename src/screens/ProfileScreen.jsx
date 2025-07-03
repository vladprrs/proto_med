import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import AppointmentCard from '../components/AppointmentCard';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  position: relative;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
`;

const Header = styled.div`
  background: white;
  padding: 60px 16px 20px 16px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
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

const MenuButton = styled.button`
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

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: #141414;
    border-radius: 50%;
  }

  &::before {
    top: 6px;
    left: 10px;
  }

  &::after {
    top: 14px;
    left: 10px;
  }

  & {
    &::before {
      box-shadow:
        0 4px 0 #141414,
        0 8px 0 #141414;
    }
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;
  border: 3px solid #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #141414;
  margin: 0;
  text-align: center;
`;

const UserPhone = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #898989;
  margin: 4px 0 0 0;
  text-align: center;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 20px;
  border: none;
  background: #f0f0f0;
  color: #141414;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #e8e8e8;
  }

  &.selected {
    background: #1ba136;
    color: white;
  }
`;

const ActionIcon = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

const GeolocationIcon = styled(ActionIcon)`
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 2C10.55 2 11 2.45 11 3V4.07C13.39 4.54 15.46 6.61 15.93 9H17C17.55 9 18 9.45 18 10C18 10.55 17.55 11 17 11H15.93C15.46 13.39 13.39 15.46 11 15.93V17C11 17.55 10.55 18 10 18C9.45 18 9 17.55 9 17V15.93C6.61 15.46 4.54 13.39 4.07 11H3C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9H4.07C4.54 6.61 6.61 4.54 9 4.07V3C9 2.45 9.45 2 10 2ZM10 6C7.79 6 6 7.79 6 10C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10C14 7.79 12.21 6 10 6Z' fill='%23898989'/%3E%3C/svg%3E")
    no-repeat center;
`;

const BookmarkIcon = styled(ActionIcon)`
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 2C4.45 2 4 2.45 4 3V18L10 15L16 18V3C16 2.45 15.55 2 15 2H5Z' fill='%23898989'/%3E%3C/svg%3E")
    no-repeat center;
`;

const TabsContainer = styled.div`
  display: flex;
  background: white;
  border-bottom: 1px solid #e8e8e8;
`;

const Tab = styled.button`
  flex: 1;
  padding: 16px 12px;
  border: none;
  background: none;
  color: ${props => (props.$active ? '#1BA136' : '#898989')};
  font-size: 14px;
  font-weight: ${props => (props.$active ? '600' : '500')};
  cursor: pointer;
  position: relative;
  border-bottom: ${props => (props.$active ? '2px solid #1BA136' : '2px solid transparent')};

  &:hover {
    color: ${props => (props.$active ? '#1BA136' : '#141414')};
  }
`;

const TabLabel = styled.span`
  margin-right: 4px;
`;

const TabCounter = styled.span`
  color: ${props => (props.$active ? '#1BA136' : '#898989')};
  font-weight: 500;
`;

const Content = styled.div`
  background: #f5f5f5;
  min-height: calc(100vh - 400px);
  padding: 16px;
`;

const AppointmentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PlaceCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
`;

const PlaceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const PlaceInfo = styled.div`
  flex: 1;
`;

const PlaceImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

const PlaceTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #141414;
  margin: 0 0 4px 0;
`;

const PlaceCategory = styled.p`
  font-size: 14px;
  color: #898989;
  margin: 0 0 4px 0;
`;

const PlaceAddress = styled.p`
  font-size: 14px;
  color: #898989;
  margin: 0 0 8px 0;
`;

const PlaceDate = styled.p`
  font-size: 12px;
  color: #c4c4c4;
  margin: 0 0 12px 0;
  text-align: center;
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f8f8;
  border-radius: 8px;
  padding: 12px;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;
`;

const Star = styled.div`
  width: 24px;
  height: 24px;
  background: #e8e8e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c4c4c4;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #ffd700;
    color: white;
  }
`;

const RatingActions = styled.div`
  display: flex;
  gap: 16px;
`;

const RatingAction = styled.button`
  background: none;
  border: none;
  color: #898989;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #141414;
  }
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
  margin: 0;
  line-height: 1.4;
`;

const ProfileScreen = () => {
  const navigate = useNavigate();
  const { appointments: appointmentsState, user } = useAppContext();
  const { appointments } = appointmentsState;
  const [activeTab, setActiveTab] = useState('appointments');

  const handleBack = () => {
    navigate('/');
  };

  const tabs = [
    { id: 'appointments', label: 'Записи', count: appointments.length },
    { id: 'photos', label: 'Фото', count: 5 },
    { id: 'reviews', label: 'Отзывы', count: 8 },
    { id: 'notes', label: 'Уточнения', count: 0 },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
    case 'appointments':
      return (
        <AppointmentsList>
          {appointments.length > 0 ? (
            appointments.map(appointment => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))
          ) : (
            <EmptyState>
              <EmptyIcon>📅</EmptyIcon>
              <EmptyTitle>У вас пока нет записей</EmptyTitle>
              <EmptyText>Запишитесь на прием к врачу через поиск</EmptyText>
            </EmptyState>
          )}
        </AppointmentsList>
      );

    case 'photos':
      return (
        <EmptyState>
          <EmptyIcon>📷</EmptyIcon>
          <EmptyTitle>Фотографии</EmptyTitle>
          <EmptyText>Здесь будут отображаться ваши фотографии</EmptyText>
        </EmptyState>
      );

    case 'reviews':
      return (
        <div>
          <PlaceCard>
            <PlaceDate>24 June</PlaceDate>
            <PlaceHeader>
              <PlaceInfo>
                <PlaceTitle>МедЦентр «Здоровье»</PlaceTitle>
                <PlaceCategory>Медицинский центр</PlaceCategory>
                <PlaceAddress>Тверская, 15, Москва</PlaceAddress>
              </PlaceInfo>
              <PlaceImage src="/assets/clinic_placeholder.svg" />
            </PlaceHeader>
            <RatingSection>
              <Stars>
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star}>★</Star>
                ))}
              </Stars>
              <RatingActions>
                <RatingAction>Пропустить</RatingAction>
                <RatingAction>Не был здесь</RatingAction>
              </RatingActions>
            </RatingSection>
          </PlaceCard>

          <PlaceCard>
            <PlaceDate>23 June</PlaceDate>
            <PlaceHeader>
              <PlaceInfo>
                <PlaceTitle>Клиника «ПремиумМед»</PlaceTitle>
                <PlaceCategory>Частная клиника</PlaceCategory>
                <PlaceAddress>Арбат, 25, Москва</PlaceAddress>
              </PlaceInfo>
              <PlaceImage src="/assets/clinic_placeholder.svg" />
            </PlaceHeader>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1BA136',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#1BA136',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                }}
              >
                  ✓
              </div>
                Был друг
            </div>
          </PlaceCard>
        </div>
      );

    case 'notes':
      return (
        <EmptyState>
          <EmptyIcon>📝</EmptyIcon>
          <EmptyTitle>Уточнения</EmptyTitle>
          <EmptyText>Здесь будут отображаться ваши уточнения</EmptyText>
        </EmptyState>
      );

    default:
      return null;
    }
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <BackButton onClick={handleBack}>
            <BackIcon />
          </BackButton>
          <div /> {/* Spacer */}
          <MenuButton>
            <MenuIcon />
          </MenuButton>
        </HeaderContent>

        <ProfileSection>
          <Avatar src={user.currentUser.avatar} />
          <UserName>{user.currentUser.name}</UserName>
          <UserPhone>{user.currentUser.phone}</UserPhone>
        </ProfileSection>

        <ActionButtons>
          <ActionButton>
            <GeolocationIcon />
            Делиться геопозицией
          </ActionButton>
          <ActionButton className="selected">
            <BookmarkIcon />
            Избранное
          </ActionButton>
        </ActionButtons>
      </Header>

      <TabsContainer>
        {tabs.map(tab => (
          <Tab key={tab.id} $active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>
            <TabLabel>{tab.label}</TabLabel>
            <TabCounter $active={activeTab === tab.id}>{tab.count}</TabCounter>
          </Tab>
        ))}
      </TabsContainer>

      <Content>{renderTabContent()}</Content>
    </Container>
  );
};

export default ProfileScreen;
