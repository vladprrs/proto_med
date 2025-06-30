import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'
import { typography, focusVisible, textSelection } from './mixins'

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors from original design */
    --Background-01: #F1F1F1;
    --Background-02: #FFF;
    --Surface-02: rgba(20, 20, 20, 0.09);
    --Surface-01: rgba(20, 20, 20, 0.06);
    --text-icons-secondary: #898989;
    --Button-Secondary: rgba(20, 20, 20, 0.06);
    --text-icons-primary: #141414;
    --text-icons-traffic-heavy: #F5373C;
    --text-icons-traffic-average: #EFA701;
    --text-icons-traffic-light: #1BA136;
    --text-icons-accent-brand: #1BA136;
    --Special-Divider: rgba(137, 137, 137, 0.40);
    --Surface-Section-02: rgba(20, 20, 20, 0.06);
    --Surface-Section-01: #FFF;
    --text-icons-tertiary: #B8B8B8;
    --text-icons-accent-subtle: #5A5A5A;
    --Surface-00: rgba(0, 0, 0, 0.00);
    --Button-Primary-brand: #1DB93C;
    --text-icons-global-white-primary: #FFF;
    --Background-Blur-02: rgba(255, 255, 255, 0.70);
    --text-icons-status-success: #1BA136;
    --Background-Blur-01: rgba(241, 241, 241, 0.70);
    --text-icons-accen-link-green: #1BA136;
    --Background-Default-white: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${theme.fonts.primary};
    line-height: 1.5;
    color: ${theme.colors.textPrimary};
    background-color: ${theme.colors.backgroundPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Typography styles */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${theme.fontWeights.semibold};
    line-height: 1.2;
  }

  h1 { ${typography.largeTitle} }
  h2 { ${typography.title1} }
  h3 { ${typography.title2} }
  h4 { ${typography.title3} }

  p {
    margin: 0;
    line-height: 1.5;
  }

  /* Utility classes for typography */
  .body-text { ${typography.body} }
  .subhead-text { ${typography.subhead} }
  .footnote-text { ${typography.footnote} }
  .caption-text { ${typography.caption} }
  .caption2-text { ${typography.caption2} }

  /* Button styles */
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    outline: none;
    transition: ${theme.transitions.normal};
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.3px;
    text-decoration: none;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
  }

  .btn-primary {
    background: var(--Button-Primary-brand);
    color: var(--text-icons-global-white-primary);
  }

  .btn-primary:hover {
    background: #16a32e;
  }

  .btn-secondary {
    background: var(--Button-Secondary);
    color: var(--text-icons-primary);
  }

  .btn-secondary:hover {
    background: rgba(20, 20, 20, 0.12);
  }

  .btn-icon {
    padding: 8px;
    width: 40px;
    height: 40px;
  }

  /* Form elements */
  input, textarea, select {
    font-family: inherit;
    border: none;
    outline: none;
    background: transparent;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.textTertiary};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.textSecondary};
  }

  /* Focus styles */
  ${focusVisible}

  /* Selection styles */
  ${textSelection}

  /* Mobile optimizations */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    
    body {
      -webkit-text-size-adjust: 100%;
    }
  }

  /* Touch targets */
  @media (pointer: coarse) {
    .btn, button, [role="button"] {
      min-height: 44px;
      min-width: 44px;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    :root {
      --text-icons-secondary: #000;
      --text-icons-tertiary: #000;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Dark mode support (for future use) */
  @media (prefers-color-scheme: dark) {
    /* Will be implemented when dark theme is required */
  }
`

export default GlobalStyles 