# Компоненты приложения

Архитектура компонентов разделена на две основные категории:
- **Layout компоненты** - для структуры экранов
- **Common компоненты** - переиспользуемые UI элементы

## Layout компоненты

### ScreenLayout
Основной layout для экранов приложения.

```jsx
import { ScreenLayout } from '../components/layout';

<ScreenLayout 
  backgroundImage="/path/to/image.jpg"  // Фоновое изображение
  hasBottomSheet={true}                 // Показать нижнюю панель
  showStatusBar={true}                  // Показать статус бар
  mapBackground="/path/to/map.jpg"      // Карта в качестве фона  
  hasBlurOverlay={true}                 // Размытие поверх карты
  mapHeight="244px"                     // Высота карты
>
  {children}
</ScreenLayout>
```

### BottomSheet
Нижняя панель с контентом.

```jsx
import { BottomSheet } from '../components/layout';

<BottomSheet 
  showDragger={true}    // Показать элемент перетаскивания
  fullHeight={false}    // Полная высота экрана
  scrollable={true}     // Включить прокрутку
>
  {children}
</BottomSheet>
```

### Navigation
Навигационная панель с заголовком и кнопками.

```jsx
import { Navigation } from '../components/layout';

<Navigation
  title="Заголовок"           // Основной заголовок
  subtitle="Подзаголовок"     // Дополнительный текст
  onBack={handleBack}         // Обработчик кнопки "Назад"
  onClose={handleClose}       // Обработчик кнопки "Закрыть"
  showBackButton={true}       // Показать кнопку "Назад"
  showCloseButton={true}      // Показать кнопку "Закрыть"
/>
```

## Common компоненты

### Button
Универсальная кнопка с разными вариантами.

```jsx
import { Button } from '../components/common';

<Button 
  variant="primary"     // primary | secondary | icon
  onClick={handleClick} // Обработчик клика
  disabled={false}      // Заблокировать кнопку
  fullWidth={true}      // Растянуть на всю ширину
>
  Текст кнопки
</Button>
```

### IconButton
Кнопка с иконкой.

```jsx
import { IconButton } from '../components/common';

<IconButton 
  icon="back"           // back | close | search | chevron | menu
  onClick={handleClick} // Обработчик клика
  disabled={false}      // Заблокировать кнопку
/>
```

### SearchField
Поле поиска с иконкой.

```jsx
import { SearchField } from '../components/common';

<SearchField 
  placeholder="Поиск..."        // Плейсхолдер
  value={searchValue}           // Значение
  onChange={handleChange}       // Обработчик изменения
  onClick={handleClick}         // Клик по полю (для readOnly)
  large={false}                 // Большой размер
  background="#fff"             // Цвет фона
  height="40px"                 // Высота
  readOnly={false}              // Только для чтения
/>
```

### Card
Карточка для контента.

```jsx
import { Card } from '../components/common';

<Card 
  onClick={handleClick}     // Обработчик клика
  hoverable={true}          // Эффект наведения
  padding="16px"            // Внутренние отступы
  fullWidth={true}          // Растянуть на всю ширину
  height="120px"            // Фиксированная высота
  customStyles={`           // Дополнительные стили
    background: linear-gradient(135deg, #1DB93C 0%, #1BA136 100%);
  `}
>
  {children}
</Card>
```

### SegmentedControl
Переключатель между вкладками.

```jsx
import { SegmentedControl } from '../components/common';

const options = [
  { label: 'Все', value: 'all' },
  { label: 'Врачи', value: 'doctors' }
];

<SegmentedControl 
  options={options}             // Массив опций
  selectedValue={selectedValue} // Выбранное значение
  onChange={setSelectedValue}   // Обработчик изменения
/>
```

## Стили и тема

### Использование темы
```jsx
import { theme } from '../styles/theme';

// Цвета
theme.colors.brandPrimary
theme.colors.textSecondary

// Размеры
theme.spacing.md
theme.borderRadius.large

// Типографика
theme.fontSizes.body
theme.fontWeights.semibold
```

### Использование миксинов
```jsx
import { typography, flexCenter, card } from '../styles/mixins';

const StyledComponent = styled.div`
  ${typography.body}
  ${flexCenter}
  ${card}
`;
```

## Пример использования

```jsx
import React, { useState } from 'react';
import { ScreenLayout, BottomSheet, Navigation } from '../components/layout';
import { SearchField, Button, Card } from '../components/common';
import { theme } from '../styles/theme';

const MyScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <ScreenLayout hasBottomSheet={true}>
      <BottomSheet>
        <Navigation
          title="Мой экран"
          showBackButton={true}
          onBack={() => navigate(-1)}
        />
        
        <div style={{ padding: theme.spacing.md }}>
          <SearchField
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Поиск..."
          />
          
          <Card fullWidth={true}>
            <h3>Заголовок карточки</h3>
            <p>Содержимое карточки</p>
            <Button variant="primary" fullWidth={true}>
              Действие
            </Button>
          </Card>
        </div>
      </BottomSheet>
    </ScreenLayout>
  );
};
``` 