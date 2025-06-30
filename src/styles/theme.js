// Дизайн-токены приложения
export const theme = {
  colors: {
    // Background colors
    backgroundPrimary: '#F1F1F1',
    backgroundSecondary: '#FFF',
    backgroundOverlay: 'rgba(0, 0, 0, 0.40)',

    // Surface colors
    surface01: 'rgba(20, 20, 20, 0.06)',
    surface02: 'rgba(20, 20, 20, 0.09)',
    surfaceSection01: '#FFF',
    surfaceSection02: 'rgba(20, 20, 20, 0.06)',

    // Text colors
    textPrimary: '#141414',
    textSecondary: '#898989',
    textTertiary: '#B8B8B8',
    textAccent: '#5A5A5A',
    textWhite: '#FFF',

    // Brand colors
    brandPrimary: '#1DB93C',
    brandAccent: '#1BA136',
    brandSuccess: '#1BA136',

    // Status colors
    statusError: '#F5373C',
    statusWarning: '#EFA701',
    statusSuccess: '#1BA136',

    // Traffic colors
    trafficHeavy: '#F5373C',
    trafficAverage: '#EFA701',
    trafficLight: '#1BA136',

    // Dividers
    divider: 'rgba(137, 137, 137, 0.40)',

    // Button colors
    buttonPrimary: '#1DB93C',
    buttonPrimaryHover: '#16a32e',
    buttonSecondary: 'rgba(20, 20, 20, 0.06)',
    buttonSecondaryHover: 'rgba(20, 20, 20, 0.12)',
  },

  fonts: {
    primary: "'SB Sans Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    system: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },

  fontSizes: {
    caption2: '11px',
    caption: '13px',
    footnote: '14px',
    subhead: '15px',
    body: '16px',
    title3: '18px',
    title2: '19px',
    title1: '20px',
    largeTitle: '24px',
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    caption2: '14px',
    caption: '16px',
    footnote: '18px',
    subhead: '20px',
    body: '20px',
    title: '24px',
  },

  letterSpacings: {
    caption2: '-0.176px',
    caption: '-0.234px',
    footnote: '-0.28px',
    subhead: '-0.3px',
    body: '-0.24px',
    title2: '-0.437px',
    title3: '-0.38px',
  },

  borderRadius: {
    small: '6px',
    medium: '8px',
    large: '12px',
    xlarge: '16px',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
  },

  shadows: {
    card: '0px 0px 0px 0.5px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.08)',
    cardHover: '0px 0px 0px 0.5px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.12)',
    bottomSheet: '0px -1px 2px 0px rgba(0, 0, 0, 0.06)',
  },

  zIndex: {
    base: 1,
    elevated: 10,
    overlay: 50,
    modal: 100,
    notification: 1000,
  },

  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px',
  },

  transitions: {
    fast: 'all 0.15s ease',
    normal: 'all 0.2s ease',
    slow: 'all 0.3s ease',
  },
};
