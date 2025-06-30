import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state based on the original AppState class
const initialState = {
  // Search state
  searchQuery: '',
  searchFilters: {},
  searchResults: [],

  // Booking flow state
  selectedClinic: null,
  selectedServices: [],
  selectedSpecialist: null,
  selectedDate: null,
  selectedTime: null,

  // Current user information
  currentUser: {
    name: 'Владислав Прищепов',
    phone: '+7(999)4620809',
    email: '',
    avatar: '/assets/images/0235e2ec7b64e89803c2ebe320dbddf014cebf7a_48.jpg',
  },

  // Patient information (pre-filled with user data)
  patientInfo: {
    name: 'Владислав Прищепов',
    phone: '+7(999)4620809',
    email: '',
    comment: '',
  },

  // UI state
  currentStep: 'search',
  isLoading: false,
  errors: {},

  // Booking summary
  totalPrice: 0,
  estimatedDuration: 0,
  bookingResult: null,

  // Active appointment after successful booking
  activeAppointment: null,

  // Appointments list
  appointments: [],

  // Storage state
  isStorageLoaded: false,

  // Toast notifications
  toast: null,

  // Modal state
  modals: {
    filter: false,
    confirm: false,
  },
};

// Action types
const ActionTypes = {
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_SEARCH_FILTERS: 'SET_SEARCH_FILTERS',
  SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
  SELECT_CLINIC: 'SELECT_CLINIC',
  SELECT_SERVICES: 'SELECT_SERVICES',
  SELECT_SPECIALIST: 'SELECT_SPECIALIST',
  SELECT_DATE_TIME: 'SELECT_DATE_TIME',
  UPDATE_PATIENT_INFO: 'UPDATE_PATIENT_INFO',
  SET_CURRENT_STEP: 'SET_CURRENT_STEP',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  CLEAR_ALL_ERRORS: 'CLEAR_ALL_ERRORS',
  SET_BOOKING_RESULT: 'SET_BOOKING_RESULT',
  SET_ACTIVE_APPOINTMENT: 'SET_ACTIVE_APPOINTMENT',
  CLEAR_ACTIVE_APPOINTMENT: 'CLEAR_ACTIVE_APPOINTMENT',
  ADD_APPOINTMENT: 'ADD_APPOINTMENT',
  REMOVE_APPOINTMENT: 'REMOVE_APPOINTMENT',
  UPDATE_APPOINTMENT: 'UPDATE_APPOINTMENT',
  RESET_BOOKING_FLOW: 'RESET_BOOKING_FLOW',
  RESET_SEARCH: 'RESET_SEARCH',
  RESET_ALL: 'RESET_ALL',
  SHOW_TOAST: 'SHOW_TOAST',
  HIDE_TOAST: 'HIDE_TOAST',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  LOAD_FROM_STORAGE: 'LOAD_FROM_STORAGE',
  SET_STORAGE_LOADED: 'SET_STORAGE_LOADED',
};

// Reducer function
function appReducer(state, action) {
  switch (action.type) {
  case ActionTypes.SET_SEARCH_QUERY:
    return { ...state, searchQuery: action.payload };

  case ActionTypes.SET_SEARCH_FILTERS:
    return { ...state, searchFilters: action.payload };

  case ActionTypes.SET_SEARCH_RESULTS:
    return { ...state, searchResults: action.payload };

  case ActionTypes.SELECT_CLINIC:
    return {
      ...state,
      selectedClinic: action.payload,
      currentStep: 'services',
    };

  case ActionTypes.SELECT_SERVICES: {
    const services = action.payload;
    const totalPrice = services.reduce((sum, service) => sum + (service.price || 0), 0);
    const totalDuration = services.reduce((sum, service) => sum + (service.duration || 30), 0);

    return {
      ...state,
      selectedServices: services,
      totalPrice,
      estimatedDuration: totalDuration,
      currentStep: 'specialist',
    };
  }

  case ActionTypes.SELECT_SPECIALIST:
    return {
      ...state,
      selectedSpecialist: action.payload,
      currentStep: 'datetime',
    };

  case ActionTypes.SELECT_DATE_TIME:
    return {
      ...state,
      selectedDate: action.payload.date,
      selectedTime: action.payload.time,
      currentStep: 'confirm',
    };

  case ActionTypes.UPDATE_PATIENT_INFO:
    return {
      ...state,
      patientInfo: { ...state.patientInfo, ...action.payload },
    };

  case ActionTypes.SET_CURRENT_STEP:
    return { ...state, currentStep: action.payload };

  case ActionTypes.SET_LOADING:
    return { ...state, isLoading: action.payload };

  case ActionTypes.SET_ERROR:
    return {
      ...state,
      errors: { ...state.errors, [action.payload.field]: action.payload.error },
    };

  case ActionTypes.CLEAR_ERROR:
    const { [action.payload]: removed, ...remainingErrors } = state.errors;
    return { ...state, errors: remainingErrors };

  case ActionTypes.CLEAR_ALL_ERRORS:
    return { ...state, errors: {} };

  case ActionTypes.SET_BOOKING_RESULT:
    return {
      ...state,
      bookingResult: action.payload,
      currentStep: 'success',
    };

  case ActionTypes.SET_ACTIVE_APPOINTMENT:
    return {
      ...state,
      activeAppointment: action.payload,
    };

  case ActionTypes.CLEAR_ACTIVE_APPOINTMENT:
    return {
      ...state,
      activeAppointment: null,
    };

  case ActionTypes.ADD_APPOINTMENT:
    console.log('🔸 Reducer: ADD_APPOINTMENT called with:', action.payload);
    console.log('🔸 Reducer: Current appointments count:', state.appointments.length);
    const newAppointments = [...state.appointments, action.payload];
    console.log('🔸 Reducer: New appointments count:', newAppointments.length);
    return {
      ...state,
      appointments: newAppointments,
    };

  case ActionTypes.REMOVE_APPOINTMENT:
    return {
      ...state,
      appointments: state.appointments.filter(apt => apt.id !== action.payload),
    };

  case ActionTypes.UPDATE_APPOINTMENT:
    return {
      ...state,
      appointments: state.appointments.map(apt =>
        apt.id === action.payload.id ? { ...apt, ...action.payload } : apt,
      ),
    };

  case ActionTypes.RESET_BOOKING_FLOW:
    return {
      ...state,
      selectedClinic: null,
      selectedServices: [],
      selectedSpecialist: null,
      selectedDate: null,
      selectedTime: null,
      patientInfo: {
        name: '',
        phone: '',
        email: '',
        comment: '',
      },
      totalPrice: 0,
      estimatedDuration: 0,
      bookingResult: null,
      // НЕ очищаем activeAppointment - мы хотим его сохранить!
      currentStep: 'search',
      errors: {},
    };

  case ActionTypes.RESET_SEARCH:
    return {
      ...state,
      searchQuery: '',
      searchFilters: {},
      searchResults: [],
    };

  case ActionTypes.RESET_ALL:
    return { ...initialState };

  case ActionTypes.SHOW_TOAST:
    return { ...state, toast: action.payload };

  case ActionTypes.HIDE_TOAST:
    return { ...state, toast: null };

  case ActionTypes.TOGGLE_MODAL:
    return {
      ...state,
      modals: { ...state.modals, [action.payload.modal]: action.payload.isOpen },
    };

  case ActionTypes.LOAD_FROM_STORAGE:
    console.log('🔸 Reducer: LOAD_FROM_STORAGE called with payload:', action.payload);
    console.log('🔸 Reducer: Current state appointments:', state.appointments.length);
    console.log('🔸 Reducer: New appointments to set:', action.payload.appointments?.length || 0);
    return { ...state, ...action.payload, isStorageLoaded: true };

  case ActionTypes.SET_STORAGE_LOADED:
    return { ...state, isStorageLoaded: true };

  default:
    return state;
  }
}

// Storage key
const STORAGE_KEY = 'medpoisk-appointments';

// Create context
const AppContext = createContext();

// Provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load appointments from localStorage on mount
  useEffect(() => {
    console.log('🔸 AppContext: Initializing, checking localStorage for key:', STORAGE_KEY);
    const savedAppointments = localStorage.getItem(STORAGE_KEY);
    console.log('🔸 AppContext: Raw localStorage data:', savedAppointments);

    if (savedAppointments) {
      try {
        const parsedAppointments = JSON.parse(savedAppointments);
        console.log('🔸 AppContext: Parsed appointments:', parsedAppointments);
        console.log('🔸 AppContext: Number of appointments to load:', parsedAppointments.length);
        dispatch({
          type: ActionTypes.LOAD_FROM_STORAGE,
          payload: { appointments: parsedAppointments },
        });
      } catch (error) {
        console.error('Failed to load appointments from storage:', error);
        dispatch({ type: ActionTypes.SET_STORAGE_LOADED });
      }
    } else {
      console.log('🔸 AppContext: No saved appointments found in localStorage');
      dispatch({ type: ActionTypes.SET_STORAGE_LOADED });
    }
  }, []);

  // Save appointments to localStorage whenever they change (but only after initial load)
  useEffect(() => {
    // Don't save until we've loaded data from localStorage
    if (!state.isStorageLoaded) {
      console.log('🔸 AppContext: Skipping save - storage not loaded yet');
      return;
    }

    try {
      console.log('🔸 AppContext: Appointments changed, current count:', state.appointments.length);
      console.log('🔸 AppContext: Appointments data:', state.appointments);
      console.log('🔸 AppContext: Saving to localStorage with key:', STORAGE_KEY);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.appointments));

      // Verify save was successful
      const savedData = localStorage.getItem(STORAGE_KEY);
      console.log('🔸 AppContext: Verification - saved data:', savedData);
    } catch (error) {
      console.error('Failed to save appointments to storage:', error);
    }
  }, [state.appointments, state.isStorageLoaded]);

  // Action creators
  const actions = {
    // Search actions
    setSearchQuery: query => dispatch({ type: ActionTypes.SET_SEARCH_QUERY, payload: query }),
    setSearchFilters: filters =>
      dispatch({ type: ActionTypes.SET_SEARCH_FILTERS, payload: filters }),
    setSearchResults: results =>
      dispatch({ type: ActionTypes.SET_SEARCH_RESULTS, payload: results }),

    // Booking flow actions
    selectClinic: clinic => dispatch({ type: ActionTypes.SELECT_CLINIC, payload: clinic }),
    selectServices: services => dispatch({ type: ActionTypes.SELECT_SERVICES, payload: services }),
    selectSpecialist: specialist =>
      dispatch({ type: ActionTypes.SELECT_SPECIALIST, payload: specialist }),
    selectDateTime: (date, time) =>
      dispatch({ type: ActionTypes.SELECT_DATE_TIME, payload: { date, time } }),
    updatePatientInfo: info => dispatch({ type: ActionTypes.UPDATE_PATIENT_INFO, payload: info }),

    // UI actions
    setCurrentStep: step => dispatch({ type: ActionTypes.SET_CURRENT_STEP, payload: step }),
    setLoading: loading => dispatch({ type: ActionTypes.SET_LOADING, payload: loading }),
    setError: (field, error) =>
      dispatch({ type: ActionTypes.SET_ERROR, payload: { field, error } }),
    clearError: field => dispatch({ type: ActionTypes.CLEAR_ERROR, payload: field }),
    clearAllErrors: () => dispatch({ type: ActionTypes.CLEAR_ALL_ERRORS }),

    // Booking result
    setBookingResult: result => dispatch({ type: ActionTypes.SET_BOOKING_RESULT, payload: result }),

    // Active appointment
    setActiveAppointment: appointment =>
      dispatch({ type: ActionTypes.SET_ACTIVE_APPOINTMENT, payload: appointment }),
    clearActiveAppointment: () => dispatch({ type: ActionTypes.CLEAR_ACTIVE_APPOINTMENT }),

    // Appointments management
    addAppointment: appointment =>
      dispatch({ type: ActionTypes.ADD_APPOINTMENT, payload: appointment }),
    removeAppointment: appointmentId =>
      dispatch({ type: ActionTypes.REMOVE_APPOINTMENT, payload: appointmentId }),
    updateAppointment: appointment =>
      dispatch({ type: ActionTypes.UPDATE_APPOINTMENT, payload: appointment }),

    // Reset actions
    resetBookingFlow: () => dispatch({ type: ActionTypes.RESET_BOOKING_FLOW }),
    resetSearch: () => dispatch({ type: ActionTypes.RESET_SEARCH }),
    resetAll: () => dispatch({ type: ActionTypes.RESET_ALL }),

    // Toast actions
    showToast: (message, type = 'info', duration = 3000) => {
      dispatch({ type: ActionTypes.SHOW_TOAST, payload: { message, type, duration } });
      setTimeout(() => {
        dispatch({ type: ActionTypes.HIDE_TOAST });
      }, duration);
    },
    hideToast: () => dispatch({ type: ActionTypes.HIDE_TOAST }),

    // Modal actions
    toggleModal: (modal, isOpen) =>
      dispatch({ type: ActionTypes.TOGGLE_MODAL, payload: { modal, isOpen } }),

    // Alias methods for backward compatibility
    setFilters: filters => dispatch({ type: ActionTypes.SET_SEARCH_FILTERS, payload: filters }),
    getFilters: () => state.searchFilters,
    setSelectedClinic: clinic => dispatch({ type: ActionTypes.SELECT_CLINIC, payload: clinic }),
    setSelectedServices: services =>
      dispatch({ type: ActionTypes.SELECT_SERVICES, payload: services }),
    setSelectedSpecialist: specialist =>
      dispatch({ type: ActionTypes.SELECT_SPECIALIST, payload: specialist }),
    setSelectedDateTime: dateTime =>
      dispatch({
        type: ActionTypes.SELECT_DATE_TIME,
        payload: { date: dateTime?.date, time: dateTime?.time },
      }),
    setPatientData: data => dispatch({ type: ActionTypes.UPDATE_PATIENT_INFO, payload: data }),
    getPatientData: () => state.patientInfo,
    clearBookingData: () => dispatch({ type: ActionTypes.RESET_BOOKING_FLOW }),
  };

  // Helper getters
  const getters = {
    isBookingComplete: () => {
      return !!(
        state.selectedClinic &&
        state.selectedServices.length > 0 &&
        state.selectedSpecialist &&
        state.selectedDate &&
        state.selectedTime &&
        state.patientInfo.name &&
        state.patientInfo.phone
      );
    },

    getBookingData: () => ({
      clinic: state.selectedClinic,
      services: state.selectedServices,
      specialist: state.selectedSpecialist,
      date: state.selectedDate,
      time: state.selectedTime,
      patient: state.patientInfo,
      totalPrice: state.totalPrice,
      estimatedDuration: state.estimatedDuration,
    }),

    hasActiveFilters: () => {
      return Object.keys(state.searchFilters).length > 0;
    },
  };

  const contextValue = {
    state,
    actions,
    getters,
    dispatch,
    // Export commonly used values directly for convenience
    appointments: state.appointments,
    addAppointment: actions.addAppointment,
    removeAppointment: actions.removeAppointment,
    updateAppointment: actions.updateAppointment,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

export { ActionTypes };
