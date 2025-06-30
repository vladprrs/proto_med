# Архитектура МедПоиска

Этот документ описывает техническую архитектуру медицинского приложения МедПоиск для поиска клиник и записи на прием.

## 📋 Оглавление

- [Общий обзор](#общий-обзор)
- [Архитектурные принципы](#архитектурные-принципы)
- [Технологический стек](#технологический-стек)
- [Структура приложения](#структура-приложения)
- [Компонентная архитектура](#компонентная-архитектура)
- [Система стилей](#система-стилей)
- [Управление состоянием](#управление-состоянием)
- [Работа с данными](#работа-с-данными)
- [Маршрутизация](#маршрутизация)
- [Производительность](#производительность)

## 🎯 Общий обзор

МедПоиск построен как Single Page Application (SPA) на React с использованием современных подходов к разработке фронтенд-приложений. Архитектура спроектирована для обеспечения:

- **Масштабируемости** - легкое добавление новых функций
- **Консистентности** - единообразие UI компонентов и стилей
- **Производительности** - быстрая загрузка и отзывчивый интерфейс  
- **Надежности** - устойчивость к ошибкам и неполадкам
- **Удобства разработки** - понятная структура и переиспользуемые компоненты

### Архитектурная диаграмма

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser Layer                           │
│  ┌───────────────┐    ┌─────────────────────────────────┐   │
│  │ User Interface│    │      React Router               │   │
│  └───────────────┘    └─────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                                   │
┌─────────────────────────────────────────────────────────────┐
│                   Presentation Layer                        │
│  ┌──────────────┐ ┌─────────────┐ ┌────────────────────┐    │
│  │ Screen       │ │ Layout      │ │ Common             │    │
│  │ Components   │ │ Components  │ │ Components         │    │
│  └──────────────┘ └─────────────┘ └────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                                   │
┌─────────────────────────────────────────────────────────────┐
│                   Application Layer                         │
│  ┌──────────────┐ ┌─────────────┐ ┌────────────────────┐    │
│  │ App Context  │ │ Custom      │ │ Business Logic     │    │
│  │              │ │ Hooks       │ │                    │    │
│  └──────────────┘ └─────────────┘ └────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                                   │
┌─────────────────────────────────────────────────────────────┐
│                     Style Layer                             │
│  ┌──────────────┐ ┌─────────────┐ ┌────────────────────┐    │
│  │ Theme        │ │ Mixins      │ │ Global Styles      │    │
│  │ System       │ │             │ │                    │    │
│  └──────────────┘ └─────────────┘ └────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                                   │
┌─────────────────────────────────────────────────────────────┐
│                     Data Layer                              │
│  ┌──────────────┐ ┌─────────────┐ ┌────────────────────┐    │
│  │ React Query  │ │ Session     │ │ Static JSON        │    │
│  │ Cache        │ │ Storage     │ │ Files              │    │
│  └──────────────┘ └─────────────┘ └────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## 🏛️ Архитектурные принципы

### 1. Component-Based Architecture
Приложение построено из независимых, переиспользуемых компонентов, организованных в иерархию:
- **Layout компоненты** - структура экранов
- **Common компоненты** - переиспользуемые UI элементы
- **Screen компоненты** - конкретные экраны приложения

### 2. Design System First
Единая система дизайна с централизованным управлением:
- Цветовая палитра
- Типографическая шкала
- Размеры и отступы
- Компонентная библиотека

### 3. Atomic Design Principles
Компоненты организованы по принципу атомарного дизайна:
- **Atoms** - базовые элементы (Button, IconButton)
- **Molecules** - комбинации атомов (SearchField, Navigation)
- **Organisms** - сложные UI блоки (BottomSheet, ScreenLayout)
- **Templates** - структуры страниц
- **Pages** - конкретные экраны

### 4. Mobile-First Design
Архитектура оптимизирована для мобильных устройств с адаптивным дизайном.

### 5. Performance by Default
Встроенные оптимизации производительности через мемоизацию, ленивую загрузку и эффективное управление состоянием.

## 🛠️ Технологический стек

### Core Technologies

| Технология | Версия | Назначение |
|-----------|--------|------------|
| **React** | 18.2.0 | Основной UI фреймворк |
| **Vite** | 4.1.0 | Сборщик и dev-сервер |
| **React Router DOM** | 6.8.1 | Клиентская маршрутизация |
| **Styled Components** | 5.3.6 | CSS-in-JS стилизация |

### Development Tools

| Инструмент | Назначение |
|-----------|------------|
| **ESLint** | Проверка качества кода |
| **Vite Dev Server** | Горячая перезагрузка |

## 🏗️ Структура приложения

### Обновленная структура проекта

```
web_med/
├── public/                 # Статические файлы
│   ├── data/              # JSON данные (клиники, врачи, услуги)
│   └── assets/            # Изображения и иконки
├── src/                   # Исходный код
│   ├── components/        # Компонентная библиотека
│   │   ├── layout/        # Layout компоненты
│   │   │   ├── ScreenLayout.jsx
│   │   │   ├── BottomSheet.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── index.js
│   │   ├── common/        # Общие UI компоненты
│   │   │   ├── Button.jsx
│   │   │   ├── IconButton.jsx
│   │   │   ├── SearchField.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── SegmentedControl.jsx
│   │   │   └── index.js
│   │   └── README.md      # Документация по компонентам
│   ├── styles/            # Система стилей
│   │   ├── theme.js       # Дизайн-токены
│   │   ├── mixins.js      # Стилевые миксины
│   │   └── GlobalStyles.js # Глобальные стили
│   ├── screens/           # Экраны приложения
│   ├── contexts/          # React контексты
│   ├── hooks/             # Пользовательские хуки
│   ├── App.jsx            # Главный компонент
│   └── main.jsx           # Точка входа
├── scripts/               # Утилитарные скрипты
├── package.json           # Зависимости проекта
└── vite.config.js         # Конфигурация сборки
```

## 🧩 Компонентная архитектура

### Организация компонентов

#### Layout Components (`src/components/layout/`)
Отвечают за общую структуру и компоновку экранов:

```jsx
// ScreenLayout - основной layout экрана
<ScreenLayout 
  backgroundImage="/path/to/bg.jpg"
  hasBottomSheet={true}
  showStatusBar={true}
>
  <BottomSheet>
    <Navigation title="Заголовок" />
    {/* Контент */}
  </BottomSheet>
</ScreenLayout>
```

#### Common Components (`src/components/common/`)
Переиспользуемые UI элементы:

```jsx
// Button - универсальная кнопка
<Button variant="primary" fullWidth={true}>
  Действие
</Button>

// SearchField - поле поиска
<SearchField 
  placeholder="Поиск..."
  value={value}
  onChange={handleChange}
/>

// Card - карточка контента
<Card hoverable={true} fullWidth={true}>
  <h3>Заголовок</h3>
  <p>Содержимое</p>
</Card>
```

### Принципы создания компонентов

1. **Single Responsibility** - каждый компонент решает одну задачу
2. **Composability** - компоненты легко комбинируются
3. **Configurability** - гибкая настройка через props
4. **Consistency** - единообразие API и поведения

## 🎨 Система стилей

### Design Tokens (`src/styles/theme.js`)

Централизованное управление дизайн-токенами:

```javascript
export const theme = {
  colors: {
    brandPrimary: '#1DB93C',
    textPrimary: '#141414',
    backgroundPrimary: '#F1F1F1',
    // ... другие цвета
  },
  
  spacing: {
    xs: '4px',
    sm: '8px', 
    md: '12px',
    lg: '16px',
    // ... другие размеры
  },
  
  typography: {
    fontSizes: { /* ... */ },
    fontWeights: { /* ... */ },
    lineHeights: { /* ... */ }
  }
}
```

### Style Mixins (`src/styles/mixins.js`)

Переиспользуемые стилевые паттерны:

```javascript
// Типографика
export const typography = {
  body: css`
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights.body};
  `,
  // ... другие стили текста
}

// Layout миксины
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Компонентные миксины
export const card = css`
  background: ${theme.colors.backgroundSecondary};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.card};
`;
```

### Styled Components Architecture

```javascript
// Использование темы и миксинов
const StyledButton = styled.button`
  ${buttonPrimary}
  ${typography.subhead}
  
  // Условные стили
  ${props => props.fullWidth && `width: 100%;`}
  ${props => props.disabled && `opacity: 0.5;`}
`;
```

## 🔄 Управление состоянием

### Стратегия состояния

Приложение использует многоуровневый подход:

```
Global State (Context) ── Shared data, user session
    │
Local State (useState) ── Component-specific data
    │
Server State (hooks) ─── API data, caching
```

### App Context Structure

```javascript
const AppContext = createContext({
  // Состояние поиска
  searchQuery: '',
  searchResults: [],
  
  // Процесс записи
  selectedClinic: null,
  selectedServices: [],
  appointments: [],
  
  // Actions
  setSearchQuery: () => {},
  addAppointment: () => {},
  // ... другие действия
});
```

## 📊 Производительность

### Оптимизации компонентов

1. **React.memo** для предотвращения лишних рендеров
2. **useMemo/useCallback** для мемоизации
3. **Lazy loading** для больших компонентов
4. **Code splitting** на уровне роутов

### Bundle Optimization

```javascript
// Динамические импорты
const LazyScreen = lazy(() => import('./screens/HeavyScreen'));

// Tree shaking через ES modules
import { Button } from '../components/common';
```

### Style Performance

1. **Styled Components** с оптимизацией CSS-in-JS
2. **Theme Provider** для избежания дублирования стилей
3. **Critical CSS** для быстрого первого рендера

## 🚀 Развитие архитектуры

### Планируемые улучшения

1. **Storybook** - документация компонентов
2. **Testing Library** - автоматизированное тестирование
3. **Error Boundaries** - обработка ошибок
4. **Service Worker** - офлайн поддержка
5. **Web Components** - переиспользование вне React

### Принципы эволюции

1. **Backward Compatibility** - совместимость при обновлениях
2. **Incremental Migration** - постепенный переход на новые паттерны
3. **Performance Monitoring** - отслеживание метрик производительности
4. **User Feedback** - итеративные улучшения на основе отзывов

## 📝 Заключение

Архитектура МедПоиска спроектирована с учетом современных best practices React разработки. Акцент на переиспользуемости компонентов, консистентности дизайна и производительности обеспечивает масштабируемость и удобство разработки.

Ключевые принципы:
- ✅ Компонентная архитектура с четким разделением ответственности
- ✅ Единая система дизайна с централизованным управлением
- ✅ Производительность и масштабируемость
- ✅ Простота разработки и поддержки 