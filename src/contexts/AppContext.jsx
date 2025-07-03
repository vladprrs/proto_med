import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const initialState = {
  appointments: [],
  activeAppointment: null,
  booking: {
    selectedClinic: null,
    selectedServices: [],
    selectedSpecialist: null,
    selectedDate: null,
    selectedTime: null,
    bookingResult: null,
  },
  user: {
    currentUser: {
      name: 'Владислав Прищепов',
      phone: '+7(999)4620809',
      email: '',
      avatar: '/assets/images/0235e2ec7b64e89803c2ebe320dbddf014cebf7a_48.jpg',
    },
    patientInfo: {
      name: 'Владислав Прищепов',
      phone: '+7(999)4620809',
      email: '',
      comment: '',
    },
  },
  ui: {
    toast: null,
  },
};

export function AppProvider({ children }) {
  const [state, setState] = useState(initialState);

  // Appointments
  const addAppointment = appointment =>
    setState(prev => ({ ...prev, appointments: [...prev.appointments, appointment] }));
  const removeAppointment = id =>
    setState(prev => ({ ...prev, appointments: prev.appointments.filter(a => a.id !== id) }));
  const updateAppointment = appointment =>
    setState(prev => ({
      ...prev,
      appointments: prev.appointments.map(a => (a.id === appointment.id ? { ...a, ...appointment } : a)),
    }));
  const setActiveAppointment = appointment =>
    setState(prev => ({ ...prev, activeAppointment: appointment }));
  const clearActiveAppointment = () => setActiveAppointment(null);

  // Booking
  const selectClinic = clinic =>
    setState(prev => ({ ...prev, booking: { ...prev.booking, selectedClinic: clinic } }));
  const selectServices = services =>
    setState(prev => ({ ...prev, booking: { ...prev.booking, selectedServices: services } }));
  const selectSpecialist = specialist =>
    setState(prev => ({ ...prev, booking: { ...prev.booking, selectedSpecialist: specialist } }));
  const selectDateTime = (date, time) =>
    setState(prev => ({ ...prev, booking: { ...prev.booking, selectedDate: date, selectedTime: time } }));
  const setBookingResult = result =>
    setState(prev => ({ ...prev, booking: { ...prev.booking, bookingResult: result } }));
  const resetBookingFlow = () => setState(prev => ({ ...prev, booking: initialState.booking }));

  // User
  const updatePatientInfo = info =>
    setState(prev => ({
      ...prev,
      user: { ...prev.user, patientInfo: { ...prev.user.patientInfo, ...info } },
    }));

  // UI
  const showSuccess = (message, duration = 3000) =>
    setState(prev => ({
      ...prev,
      ui: { ...prev.ui, toast: { type: 'success', message, duration, show: true } },
    }));
  const showError = (message, duration = 3000) =>
    setState(prev => ({
      ...prev,
      ui: { ...prev.ui, toast: { type: 'error', message, duration, show: true } },
    }));
  const hideToast = () => setState(prev => ({ ...prev, ui: { ...prev.ui, toast: null } }));

  const contextValue = {
    appointments: {
      appointments: state.appointments,
      activeAppointment: state.activeAppointment,
      actions: {
        addAppointment,
        removeAppointment,
        updateAppointment,
        setActiveAppointment,
        clearActiveAppointment,
      },
    },
    booking: {
      ...state.booking,
      actions: {
        selectClinic,
        selectServices,
        selectSpecialist,
        selectDateTime,
        setBookingResult,
        resetBookingFlow,
      },
    },
    user: {
      ...state.user,
      actions: {
        updatePatientInfo,
      },
    },
    ui: {
      ...state.ui,
      actions: {
        showSuccess,
        showError,
        hideToast,
      },
    },
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
