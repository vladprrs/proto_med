import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppointmentsContext, useUserContext } from '../contexts/index.jsx';

const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 393px;
  align-items: flex-start;
  flex-shrink: 0;
  background: rgba(241, 241, 241, 0.7);
  box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(20px);
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  height: 48px;
  z-index: 1000;
  margin: 0 auto;
`;

const TabItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  position: relative;
  cursor: pointer;
`;

const TabContent = styled.div`
  display: flex;
  width: 60px;
  height: 48px;
  padding: 6px 0px 3px 0px;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  position: relative;
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconColor = styled.div`
  width: ${props => props.width || '18px'};
  height: ${props => props.height || '18px'};
  flex-shrink: 0;
  position: absolute;
  left: ${props => props.left || '3px'};
  top: ${props => props.top || '3px'};
  background: ${props => (props.$active ? '#1BA136' : '#898989')};

  ${props =>
    props.isOverview &&
    `
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'/%3E%3C/svg%3E") no-repeat center;
    mask-size: contain;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'/%3E%3C/svg%3E") no-repeat center;
    -webkit-mask-size: contain;
  `}

  ${props =>
    props.isRoutes &&
    `
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z'/%3E%3C/svg%3E") no-repeat center;
    mask-size: contain;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z'/%3E%3C/svg%3E") no-repeat center;
    -webkit-mask-size: contain;
  `}
`;

const UserPic = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 12px;
  border: 0.5px solid rgba(137, 137, 137, 0.3);
  background: #fff;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
`;

const TabLabel = styled.span`
  align-self: stretch;
  color: ${props => (props.$active ? '#1BA136' : '#898989')};
  text-align: center;
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.176px;
  position: relative;
`;

const BottomNavBar = ({ activeTab = 'overview', onTabChange }) => {
  const navigate = useNavigate();
  const appointments = useAppointmentsContext();
  const user = useUserContext();

  const handleTabClick = tab => {
    switch (tab) {
    case 'overview':
      navigate('/');
      break;
    case 'routes':
      // TODO: Добавить маршрут для страницы маршрутов
      break;
    case 'profile':
      navigate('/profile');
      break;
    default:
      break;
    }

    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <NavBarContainer>
      {/* Обзор */}
      <TabItem onClick={() => handleTabClick('overview')}>
        <TabContent>
          <IconContainer>
            <IconColor
              isOverview
              $active={activeTab === 'overview'}
              height="18px"
              left="3px"
              top="3px"
              width="18px"
            />
          </IconContainer>
          <TabLabel $active={activeTab === 'overview'}>Обзор</TabLabel>
        </TabContent>
      </TabItem>

      {/* Маршруты */}
      <TabItem onClick={() => handleTabClick('routes')}>
        <TabContent>
          <IconContainer>
            <IconColor
              isRoutes
              $active={activeTab === 'routes'}
              height="18px"
              left="2px"
              top="3px"
              width="20px"
            />
          </IconContainer>
          <TabLabel $active={activeTab === 'routes'}>Маршруты</TabLabel>
        </TabContent>
      </TabItem>

      {/* Профиль */}
      <TabItem onClick={() => handleTabClick('profile')}>
        <TabContent>
          <IconContainer>
            <UserPic src={user.currentUser.avatar} />
          </IconContainer>
          <TabLabel $active={activeTab === 'profile'}>Профиль</TabLabel>
        </TabContent>
      </TabItem>
    </NavBarContainer>
  );
};

export default BottomNavBar;
