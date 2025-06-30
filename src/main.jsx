import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { ContextProvider } from './contexts/index.jsx';
import { ErrorBoundary } from './components/common';
import PerformanceMonitor from './components/common/PerformanceMonitor';

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (ранее cacheTime)
    },
  },
});

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
        <QueryClientProvider client={queryClient}>
          <ContextProvider>
            <PerformanceMonitor enabled={process.env.NODE_ENV === 'development'} />
            <GlobalStyles />
            <App />
            {/* {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />} */}
          </ContextProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
