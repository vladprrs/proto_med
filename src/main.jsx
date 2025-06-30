import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { ContextProvider } from './contexts/index.jsx';

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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <GlobalStyles />
          <App />
          {/* {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />} */}
        </ContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
