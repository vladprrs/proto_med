import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { typography, flexBetween } from '../../styles/mixins';

const HeaderSection = styled.div`
  display: flex;
  padding: 16px 0px 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  background: linear-gradient(157deg, #e8f5e8 0%, #fff 78.03%);
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

const NavButton = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.surface01};
  border-radius: ${theme.borderRadius.medium};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.surface02};
  }
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
  color: ${theme.colors.textPrimary};
  ${typography.title2}
  font-weight: ${theme.fontWeights.medium};
`;

const BackIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;

  &::after {
    content: '';
    width: 10px;
    height: 17px;
    background-color: ${theme.colors.textPrimary};
    position: absolute;
    left: 7px;
    top: 3px;
    clip-path: polygon(100% 0%, 0% 50%, 100% 100%, 85% 50%);
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
    background-color: ${theme.colors.textPrimary};
    transform-origin: center;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
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

const ClinicHeader = ({ clinicName, onClose }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate('/');
    }
  };

  return (
    <HeaderSection>
      <Dragger />
      <NavBar>
        <NavContent>
          <NavButton onClick={handleBack}>
            <BackIcon />
          </NavButton>
          <HeaderTitle>
            <Title>{clinicName}</Title>
          </HeaderTitle>
          <NavButton onClick={handleClose}>
            <CloseIcon />
          </NavButton>
        </NavContent>
      </NavBar>
    </HeaderSection>
  );
};

export default ClinicHeader;
