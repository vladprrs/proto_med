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
  font-family:
    'SB Sans Text',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
`;

function App() {
  return (
    <AppProvider>
      <AppContainer>
        <Routes>
          {/* Main routes */}
          <Route element={<Dashboard />} path="/" />
          <Route element={<SearchPageScreen />} path="/search" />
          <Route element={<AppointmentsScreen />} path="/appointments" />
          <Route element={<ProfileScreen />} path="/profile" />
          <Route element={<ExampleScreen />} path="/example" />

          {/* Clinic routes */}
          <Route element={<ClinicScreen />} path="/clinic/:clinicId" />
          <Route element={<ServicesScreen />} path="/clinic/:clinicId/services" />
          <Route element={<SpecialistsScreen />} path="/clinic/:clinicId/specialists" />
          <Route element={<DateTimeScreen />} path="/clinic/:clinicId/datetime" />
          <Route element={<ConfirmationScreen />} path="/clinic/:clinicId/confirmation" />
          <Route element={<DoneScreen />} path="/clinic/:clinicId/done" />

          {/* Appointment ticket route */}
          <Route element={<DoneScreen />} path="/appointment" />

          {/* Fallback */}
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>

        {/* Global Toast notifications */}
        <Toast />
      </AppContainer>
    </AppProvider>
  );
}

export default App;
