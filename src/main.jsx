import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { AppProvider } from './contexts/AppContext';
import { ErrorBoundary } from './components/common';
import PerformanceMonitor from './components/common/PerformanceMonitor';


const handleGlobalError = (error, errorInfo, errorId) => {
  console.error('🚨 Global Error Caught:', { error, errorInfo, errorId });
  
  // В продакшене здесь можно отправить ошибку в систему мониторинга
  if (process.env.NODE_ENV === 'production') {
    // Например: sendErrorToSentry(error, errorInfo, errorId);
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary showDetails={process.env.NODE_ENV === 'development'} onError={handleGlobalError}>
      <BrowserRouter>
        <AppProvider>
          <PerformanceMonitor enabled={process.env.NODE_ENV === 'development'} />
          <GlobalStyles />
          <App />
        </AppProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
