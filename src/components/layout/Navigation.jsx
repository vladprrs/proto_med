import React from 'react';
import styled from 'styled-components';
import { flexBetween, typography, buttonIcon } from '../../styles/mixins';
import { theme } from '../../styles/theme';
import IconButton from '../common/IconButton';

const NavBar = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  align-self: stretch;
  position: relative;
`;

const NavContent = styled.div`
  display: flex;
  padding: 0px ${theme.spacing.lg};
  align-items: center;
  gap: ${theme.spacing.md};
  flex: 1 0 0;
  position: relative;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
  padding-bottom: 8px;
`;

const Title = styled.div`
  flex: 1 0 0;
  color: ${theme.colors.textPrimary};
  ${typography.title2}
  padding: 7px 0px 1px 0px;
`;

const Subtitle = styled.div`
  flex: 1 0 0;
  color: ${theme.colors.textSecondary};
  ${typography.subhead}
  padding: 1px 0px 3px 0px;
`;

const Navigation = ({ 
  title, 
  subtitle, 
  onBack, 
  onClose, 
  showBackButton = false, 
  showCloseButton = false 
}) => {
  return (
    <NavBar>
      <NavContent>
        {showBackButton && (
          <IconButton icon="back" onClick={onBack} />
        )}
        
        <HeaderTitle>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </HeaderTitle>
        
        {showCloseButton && (
          <IconButton icon="close" onClick={onClose} />
        )}
      </NavContent>
    </NavBar>
  );
};

export default Navigation; 