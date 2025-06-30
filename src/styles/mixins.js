import { css } from 'styled-components';
import { theme } from './theme';

// Типографика
export const typography = {
  largeTitle: css`
    font-size: ${theme.fontSizes.largeTitle};
    font-weight: ${theme.fontWeights.semibold};
    line-height: ${theme.lineHeights.title};
  `,
  
  title1: css`
    font-size: ${theme.fontSizes.title1};
    font-weight: ${theme.fontWeights.semibold};
    line-height: ${theme.lineHeights.title};
  `,
  
  title2: css`
    font-size: ${theme.fontSizes.title2};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights.title};
    letter-spacing: ${theme.letterSpacings.title2};
  `,
  
  title3: css`
    font-size: ${theme.fontSizes.title3};
    font-weight: ${theme.fontWeights.semibold};
    line-height: ${theme.lineHeights.title};
    letter-spacing: ${theme.letterSpacings.title3};
  `,
  
  body: css`
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights.body};
    letter-spacing: ${theme.letterSpacings.body};
  `,
  
  subhead: css`
    font-size: ${theme.fontSizes.subhead};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights.subhead};
    letter-spacing: ${theme.letterSpacings.subhead};
  `,
  
  footnote: css`
    font-size: ${theme.fontSizes.footnote};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.footnote};
    letter-spacing: ${theme.letterSpacings.footnote};
  `,
  
  caption: css`
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.caption};
    letter-spacing: ${theme.letterSpacings.caption};
  `,
  
  caption2: css`
    font-size: ${theme.fontSizes.caption2};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.caption2};
    letter-spacing: ${theme.letterSpacings.caption2};
  `,
};

// Позиционирование и флексбокс
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumnCenter = css`
  ${flexColumn}
  align-items: center;
  justify-content: center;
`;

// Контейнеры
export const fullScreen = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

export const scrollContainer = css`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.textTertiary};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.textSecondary};
  }
`;

// Кнопки
export const buttonBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: ${theme.fonts.primary};
  outline: none;
  transition: ${theme.transitions.normal};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const buttonPrimary = css`
  ${buttonBase}
  background: ${theme.colors.buttonPrimary};
  color: ${theme.colors.textWhite};
  border-radius: ${theme.borderRadius.medium};
  padding: 10px 16px;
  ${typography.subhead}
  
  &:hover:not(:disabled) {
    background: ${theme.colors.buttonPrimaryHover};
  }
`;

export const buttonSecondary = css`
  ${buttonBase}
  background: ${theme.colors.buttonSecondary};
  color: ${theme.colors.textPrimary};
  border-radius: ${theme.borderRadius.medium};
  padding: 10px 16px;
  ${typography.subhead}
  
  &:hover:not(:disabled) {
    background: ${theme.colors.buttonSecondaryHover};
  }
`;

export const buttonIcon = css`
  ${buttonBase}
  padding: ${theme.spacing.sm};
  width: 40px;
  height: 40px;
  background: ${theme.colors.buttonSecondary};
  border-radius: ${theme.borderRadius.medium};
  
  &:hover:not(:disabled) {
    background: ${theme.colors.buttonSecondaryHover};
  }
`;

// Карточки
export const card = css`
  background: ${theme.colors.backgroundSecondary};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.card};
  transition: ${theme.transitions.normal};
`;

export const cardHover = css`
  ${card}
  cursor: pointer;
  
  &:hover {
    box-shadow: ${theme.shadows.cardHover};
  }
`;

// Поля ввода
export const inputBase = css`
  font-family: ${theme.fonts.primary};
  border: none;
  outline: none;
  background: transparent;
  color: ${theme.colors.textPrimary};
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

// Модальные окна и листы
export const bottomSheet = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: ${theme.borderRadius.xlarge} ${theme.borderRadius.xlarge} 0px 0px;
  background: ${theme.colors.backgroundPrimary};
  position: relative;
  min-height: calc(100vh - 64px);
  overflow: hidden;
`;

export const dragger = css`
  display: flex;
  height: 0px;
  padding-bottom: 6px;
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

// Фокус и выделение
export const focusVisible = css`
  &:focus-visible {
    outline: 2px solid ${theme.colors.brandAccent};
    outline-offset: 2px;
  }
`;

export const textSelection = css`
  ::selection {
    background: ${theme.colors.brandAccent};
    color: ${theme.colors.textWhite};
  }
`;

// Медиа-запросы
export const media = {
  mobile: (styles) => css`
    @media (max-width: ${theme.breakpoints.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles) => css`
    @media (min-width: ${theme.breakpoints.tablet}) {
      ${styles}
    }
  `,
  desktop: (styles) => css`
    @media (min-width: ${theme.breakpoints.desktop}) {
      ${styles}
    }
  `,
}; 