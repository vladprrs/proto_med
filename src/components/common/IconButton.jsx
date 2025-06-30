import React from 'react';
import styled from 'styled-components';
import { buttonIcon } from '../../styles/mixins';
import { theme } from '../../styles/theme';

const StyledIconButton = styled.button`
  ${buttonIcon}
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
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

const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m19 19-3.5-3.5' stroke='%23898989' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='11' cy='11' r='8' stroke='%23898989' stroke-width='2'/%3E%3C/svg%3E");
  flex-shrink: 0;
`;

const ChevronIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.5 5l5 5-5 5' stroke='%23898989' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
`;

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 3px;
    width: 18px;
    height: 2px;
    background-color: ${theme.colors.textPrimary};
    border-radius: 1px;
  }
  
  &::before {
    top: 7px;
    box-shadow: 0 5px 0 ${theme.colors.textPrimary}, 0 10px 0 ${theme.colors.textPrimary};
  }
`;

const iconComponents = {
  back: BackIcon,
  close: CloseIcon,
  search: SearchIcon,
  chevron: ChevronIcon,
  menu: MenuIcon,
};

const IconButton = ({ icon, onClick, disabled, ...props }) => {
  const IconComponent = iconComponents[icon];
  
  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found. Available icons: ${Object.keys(iconComponents).join(', ')}`);
    return null;
  }

  return (
    <StyledIconButton onClick={onClick} disabled={disabled} {...props}>
      <IconComponent />
    </StyledIconButton>
  );
};

export default IconButton; 