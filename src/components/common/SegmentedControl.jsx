import React from 'react';
import styled from 'styled-components';
import { flexCenter, typography } from '../../styles/mixins';
import { theme } from '../../styles/theme';

const SegmentedContainer = styled.div`
  display: flex;
  padding: 2px;
  align-items: center;
  gap: 2px;
  align-self: stretch;
  border-radius: 10px;
  background: ${theme.colors.surface01};
  position: relative;
`;

const SegmentButton = styled.button`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  border-radius: ${theme.borderRadius.medium};
  background: ${props => props.selected ? theme.colors.backgroundSecondary : 'transparent'};
  box-shadow: ${props => props.selected ? theme.shadows.card : 'none'};
  border: none;
  cursor: pointer;
  padding: 6px 8px 8px 8px;
  justify-content: center;
  transition: ${theme.transitions.normal};
`;

const SegmentLabel = styled.div`
  flex: 1 0 0;
  color: ${theme.colors.textPrimary};
  text-align: center;
  font-family: ${theme.fonts.primary};
  ${typography.footnote}
`;

const SegmentedControl = ({ 
  options = [], 
  selectedValue, 
  onChange, 
  ...props 
}) => {
  return (
    <SegmentedContainer {...props}>
      {options.map((option) => (
        <SegmentButton
          key={option.value}
          selected={selectedValue === option.value}
          onClick={() => onChange(option.value)}
        >
          <SegmentLabel>{option.label}</SegmentLabel>
        </SegmentButton>
      ))}
    </SegmentedContainer>
  );
};

export default SegmentedControl; 