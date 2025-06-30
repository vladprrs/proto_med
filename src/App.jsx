import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppProvider } from './contexts/AppContext';
import Toast from './components/common/Toast';

// Screens
import Dashboard from './screens/Dashboard';
import SearchPageScreen from './screens/SearchPageScreen';
import ClinicScreen from './screens/ClinicScreen';
import ServicesScreen from './screens/ServicesScreen';
import SpecialistsScreen from './screens/SpecialistsScreen';
import DateTimeScreen from './screens/DateTimeScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import DoneScreen from './screens/DoneScreen';
import AppointmentsScreen from './screens/AppointmentsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExampleScreen from './screens/ExampleScreen';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f1f1f1;
  font-family: 'SB Sans Text', -apple-system, BlinkMacSystemFont, sans-serif;
`;

function App() {
  return (
    <AppProvider>
      <AppContainer>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<SearchPageScreen />} />
          <Route path="/appointments" element={<AppointmentsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/example" element={<ExampleScreen />} />
          
          {/* Clinic routes */}
          <Route path="/clinic/:clinicId" element={<ClinicScreen />} />
          <Route path="/clinic/:clinicId/services" element={<ServicesScreen />} />
          <Route path="/clinic/:clinicId/specialists" element={<SpecialistsScreen />} />
          <Route path="/clinic/:clinicId/datetime" element={<DateTimeScreen />} />
          <Route path="/clinic/:clinicId/confirmation" element={<ConfirmationScreen />} />
          <Route path="/clinic/:clinicId/done" element={<DoneScreen />} />
          
          {/* Appointment ticket route */}
          <Route path="/appointment" element={<DoneScreen />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        {/* Global Toast notifications */}
        <Toast />
      </AppContainer>
    </AppProvider>
  );
}

export default App; 