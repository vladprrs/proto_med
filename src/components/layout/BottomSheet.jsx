import React from 'react';
import styled from 'styled-components';
import { bottomSheet, dragger, scrollContainer } from '../../styles/mixins';
import { theme } from '../../styles/theme';

const BottomSheetContainer = styled.div`
  ${bottomSheet}
  padding: ${theme.spacing.lg} 0px ${theme.spacing.md} 0px;
  ${props => props.fullHeight && `
    min-height: 100vh;
    border-radius: 0;
  `}
`;

const Dragger = styled.div`
  ${dragger}
`;

const ContentArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  position: relative;
  ${props => props.scrollable && scrollContainer}
`;

const BottomSheet = ({ 
  children, 
  showDragger = true, 
  fullHeight = false, 
  scrollable = false 
}) => {
  return (
    <BottomSheetContainer fullHeight={fullHeight}>
      {showDragger && <Dragger />}
      <ContentArea scrollable={scrollable}>
        {children}
      </ContentArea>
    </BottomSheetContainer>
  );
};

export default BottomSheet; 