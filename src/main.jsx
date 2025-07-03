import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { AppProvider } from './contexts/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <GlobalStyles />
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
