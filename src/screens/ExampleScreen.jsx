import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Новые компоненты
import { MapScreenLayout, BottomSheet, Navigation } from '../components/layout';
import { SearchField, Button, Card, SegmentedControl } from '../components/common';
import { theme } from '../styles/theme';
import { typography, flexColumn } from '../styles/mixins';

const ContentSection = styled.div`
  display: flex;
  padding: ${theme.spacing.xs} ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md};
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  align-self: stretch;
  background: ${theme.colors.backgroundPrimary};
  position: relative;
  flex: 1;
  overflow-y: auto;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  align-self: stretch;
  background: ${theme.colors.backgroundPrimary};
  position: relative;
`;

const CardTitle = styled.div`
  ${typography.body}
  color: ${theme.colors.textPrimary};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing.sm};
`;

const CardDescription = styled.div`
  ${typography.footnote}
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.md};
`;

const ButtonGroup = styled.div`
  ${flexColumn}
  gap: ${theme.spacing.sm};
  width: 100%;
`;

const ExampleScreen = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [selectedSegment, setSelectedSegment] = useState('all');

  const handleBack = () => {
    navigate(-1);
  };

  const handleClose = () => {
    navigate('/');
  };

  const handleSearchChange = e => {
    setSearchValue(e.target.value);
  };

  const segmentOptions = [
    { label: 'Все', value: 'all' },
    { label: 'Врачи', value: 'doctors' },
    { label: 'Услуги', value: 'services' },
  ];

  return (
    <MapScreenLayout mapImage="/assets/images/ac1a736678ef011fb9dd2811df6a312eb7f804bd_750.jpg">
      <BottomSheet scrollable showDragger>
        <Navigation
          showBackButton
          showCloseButton
          subtitle="Демонстрация новых компонентов"
          title="Пример экрана"
          onBack={handleBack}
          onClose={handleClose}
        />

        <ContentSection>
          <SearchSection>
            <SearchField
              large
              background={theme.colors.backgroundSecondary}
              height="48px"
              placeholder="Поиск..."
              value={searchValue}
              onChange={handleSearchChange}
            />

            <SegmentedControl
              options={segmentOptions}
              selectedValue={selectedSegment}
              onChange={setSelectedSegment}
            />
          </SearchSection>

          <Card fullWidth hoverable>
            <CardTitle>Интерактивная карточка</CardTitle>
            <CardDescription>
              Эта карточка использует новый компонент Card с эффектом наведения
            </CardDescription>
          </Card>

          <Card fullWidth>
            <CardTitle>Кнопки</CardTitle>
            <CardDescription>Примеры различных вариантов кнопок</CardDescription>
            <ButtonGroup>
              <Button fullWidth variant="primary">
                Основная кнопка
              </Button>
              <Button fullWidth variant="secondary">
                Вторичная кнопка
              </Button>
            </ButtonGroup>
          </Card>

          <Card fullWidth>
            <CardTitle>Поиск и фильтры</CardTitle>
            <CardDescription>
              Поле поиска: "{searchValue || 'не введено'}"<br />
              Выбранная категория:{' '}
              {segmentOptions.find(opt => opt.value === selectedSegment)?.label}
            </CardDescription>
          </Card>

          <Card
            fullWidth
            customStyles={`
              background: linear-gradient(135deg, ${theme.colors.brandPrimary} 0%, ${theme.colors.brandAccent} 100%);
              color: ${theme.colors.textWhite};
            `}
            padding={theme.spacing.xl}
          >
            <CardTitle style={{ color: theme.colors.textWhite }}>Кастомная карточка</CardTitle>
            <CardDescription style={{ color: theme.colors.textWhite, opacity: 0.9 }}>
              Эта карточка использует кастомные стили с градиентом
            </CardDescription>
          </Card>
        </ContentSection>
      </BottomSheet>
    </MapScreenLayout>
  );
};

export default ExampleScreen;
