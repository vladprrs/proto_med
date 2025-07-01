import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { typography } from '../../styles/mixins';

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: ${theme.colors.backgroundSecondary};
`;

const TabsHeader = styled.div`
  display: flex;
  padding: 0px 16px;
  align-items: flex-start;
  align-self: stretch;
  background: ${theme.colors.backgroundSecondary};
  border-bottom: 1px solid ${theme.colors.divider};
`;

const TabButton = styled.button`
  display: flex;
  padding: 12px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;

  ${props =>
    props.$active &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: ${theme.colors.brandPrimary};
      border-radius: 1px;
    }
  `}
`;

const TabText = styled.div`
  color: ${props => (props.$active ? theme.colors.textPrimary : theme.colors.textSecondary)};
  ${typography.subhead}
  font-weight: ${props => (props.$active ? theme.fontWeights.medium : theme.fontWeights.regular)};
  text-align: center;
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: ${theme.colors.backgroundPrimary};
  min-height: 400px;
`;

const tabs = [
  { id: 'services', label: 'Услуги' },
  { id: 'specialists', label: 'Специалисты' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'info', label: 'Инфо' },
];

const ClinicTabs = ({ activeTab, onTabChange, children }) => {
  return (
    <TabsContainer>
      <TabsHeader>
        {tabs.map(tab => (
          <TabButton key={tab.id} $active={activeTab === tab.id} onClick={() => onTabChange(tab.id)}>
            <TabText $active={activeTab === tab.id}>{tab.label}</TabText>
          </TabButton>
        ))}
      </TabsHeader>

      <TabContent>{children}</TabContent>
    </TabsContainer>
  );
};

export default ClinicTabs;
