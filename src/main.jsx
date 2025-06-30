import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'

import App from './App'
import GlobalStyles from './styles/GlobalStyles'
import { AppProvider } from './contexts/AppContext'

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 0, // Отключаем кэширование для отладки
      cacheTime: 0, // Отключаем кэширование
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <GlobalStyles />
          <App />
          {/* {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />} */}
        </AppProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
) 