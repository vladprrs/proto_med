import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state for appointments
const initialState = {
  appointments: [],
  activeAppointment: null,
  isStorageLoaded: false,
  isLoadingAppointments: false,
};

// Action types
const AppointmentsActionTypes = {
  SET_ACTIVE_APPOINTMENT: 'SET_ACTIVE_APPOINTMENT',
  CLEAR_ACTIVE_APPOINTMENT: 'CLEAR_ACTIVE_APPOINTMENT',
  ADD_APPOINTMENT: 'ADD_APPOINTMENT',
  REMOVE_APPOINTMENT: 'REMOVE_APPOINTMENT',
  UPDATE_APPOINTMENT: 'UPDATE_APPOINTMENT',
  SET_APPOINTMENTS: 'SET_APPOINTMENTS',
  SET_LOADING_APPOINTMENTS: 'SET_LOADING_APPOINTMENTS',
  LOAD_FROM_STORAGE: 'LOAD_FROM_STORAGE',
  SET_STORAGE_LOADED: 'SET_STORAGE_LOADED',
};

// Reducer function
function appointmentsReducer(state, action) {
  switch (action.type) {
    case AppointmentsActionTypes.SET_ACTIVE_APPOINTMENT:
      return {
        ...state,
        activeAppointment: action.payload,
      };

    case AppointmentsActionTypes.CLEAR_ACTIVE_APPOINTMENT:
      return {
        ...state,
        activeAppointment: null,
      };

    case AppointmentsActionTypes.ADD_APPOINTMENT:
      console.log('🔸 AppointmentsReducer: ADD_APPOINTMENT called with:', action.payload);
      console.log('🔸 AppointmentsReducer: Current appointments count:', state.appointments.length);
      const newAppointments = [...state.appointments, action.payload];
      console.log('🔸 AppointmentsReducer: New appointments count:', newAppointments.length);
      return {
        ...state,
        appointments: newAppointments,
      };

    case AppointmentsActionTypes.REMOVE_APPOINTMENT:
      return {
        ...state,
        appointments: state.appointments.filter(apt => apt.id !== action.payload),
      };

    case AppointmentsActionTypes.UPDATE_APPOINTMENT:
      return {
        ...state,
        appointments: state.appointments.map(apt =>
          apt.id === action.payload.id ? { ...apt, ...action.payload } : apt
        ),
      };

    case AppointmentsActionTypes.SET_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };

    case AppointmentsActionTypes.SET_LOADING_APPOINTMENTS:
      return {
        ...state,
        isLoadingAppointments: action.payload,
      };

    case AppointmentsActionTypes.LOAD_FROM_STORAGE:
      console.log('🔸 AppointmentsReducer: LOAD_FROM_STORAGE called with payload:', action.payload);
      console.log('🔸 AppointmentsReducer: Current state appointments:', state.appointments.length);
      console.log(
        '🔸 AppointmentsReducer: New appointments to set:',
        action.payload.appointments?.length || 0
      );
      return {
        ...state,
        ...action.payload,
        isStorageLoaded: true,
      };

    case AppointmentsActionTypes.SET_STORAGE_LOADED:
      return { ...state, isStorageLoaded: true };

    default:
      return state;
  }
}

// Storage key
const APPOINTMENTS_STORAGE_KEY = 'medpoisk-appointments';

// Create context
const AppointmentsContext = createContext();

// Provider component
export function AppointmentsProvider({ children }) {
  const [state, dispatch] = useReducer(appointmentsReducer, initialState);

  // Load appointments from localStorage on mount
  useEffect(() => {
    console.log(
      '🔸 AppointmentsContext: Initializing, checking localStorage for key:',
      APPOINTMENTS_STORAGE_KEY
    );
    const savedAppointments = localStorage.getItem(APPOINTMENTS_STORAGE_KEY);
    console.log('🔸 AppointmentsContext: Raw localStorage data:', savedAppointments);

    if (savedAppointments) {
      try {
        const parsedAppointments = JSON.parse(savedAppointments);
        console.log('🔸 AppointmentsContext: Parsed appointments:', parsedAppointments);
        console.log(
          '🔸 AppointmentsContext: Number of appointments to load:',
          parsedAppointments.length
        );
        dispatch({
          type: AppointmentsActionTypes.LOAD_FROM_STORAGE,
          payload: { appointments: parsedAppointments },
        });
      } catch (error) {
        console.error('Failed to load appointments from storage:', error);
        dispatch({ type: AppointmentsActionTypes.SET_STORAGE_LOADED, payload: true });
      }
    } else {
      console.log('🔸 AppointmentsContext: No saved appointments found in localStorage');
      dispatch({ type: AppointmentsActionTypes.SET_STORAGE_LOADED, payload: true });
    }
  }, []);

  // Save appointments to localStorage whenever they change (but only after initial load)
  useEffect(() => {
    // Don't save until we've loaded data from localStorage
    if (!state.isStorageLoaded) {
      console.log('🔸 AppointmentsContext: Skipping save - storage not loaded yet');
      return;
    }

    try {
      console.log(
        '🔸 AppointmentsContext: Appointments changed, current count:',
        state.appointments.length
      );
      console.log('🔸 AppointmentsContext: Appointments data:', state.appointments);
      console.log(
        '🔸 AppointmentsContext: Saving to localStorage with key:',
        APPOINTMENTS_STORAGE_KEY
      );
      localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(state.appointments));

      // Verify save was successful
      const savedData = localStorage.getItem(APPOINTMENTS_STORAGE_KEY);
      console.log('🔸 AppointmentsContext: Verification - saved data:', savedData);
    } catch (error) {
      console.error('Failed to save appointments to storage:', error);
    }
  }, [state.appointments, state.isStorageLoaded]);

  // Action creators
  const actions = {
    setActiveAppointment: appointment =>
      dispatch({ type: AppointmentsActionTypes.SET_ACTIVE_APPOINTMENT, payload: appointment }),
    clearActiveAppointment: () =>
      dispatch({ type: AppointmentsActionTypes.CLEAR_ACTIVE_APPOINTMENT }),

    addAppointment: appointment => {
      // Ensure appointment has required fields
      const appointmentWithDefaults = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        status: 'confirmed',
        ...appointment,
      };
      dispatch({ type: AppointmentsActionTypes.ADD_APPOINTMENT, payload: appointmentWithDefaults });
    },

    removeAppointment: appointmentId =>
      dispatch({ type: AppointmentsActionTypes.REMOVE_APPOINTMENT, payload: appointmentId }),
    updateAppointment: appointment =>
      dispatch({ type: AppointmentsActionTypes.UPDATE_APPOINTMENT, payload: appointment }),
    setAppointments: appointments =>
      dispatch({ type: AppointmentsActionTypes.SET_APPOINTMENTS, payload: appointments }),
    setLoadingAppointments: isLoading =>
      dispatch({ type: AppointmentsActionTypes.SET_LOADING_APPOINTMENTS, payload: isLoading }),

    // Bulk operations
    clearAllAppointments: () =>
      dispatch({ type: AppointmentsActionTypes.SET_APPOINTMENTS, payload: [] }),

    // Status management
    cancelAppointment: appointmentId => {
      const appointment = state.appointments.find(apt => apt.id === appointmentId);
      if (appointment) {
        dispatch({
          type: AppointmentsActionTypes.UPDATE_APPOINTMENT,
          payload: { ...appointment, status: 'cancelled', cancelledAt: new Date().toISOString() },
        });
      }
    },

    rescheduleAppointment: (appointmentId, newDate, newTime) => {
      const appointment = state.appointments.find(apt => apt.id === appointmentId);
      if (appointment) {
        dispatch({
          type: AppointmentsActionTypes.UPDATE_APPOINTMENT,
          payload: {
            ...appointment,
            date: newDate,
            time: newTime,
            status: 'rescheduled',
            rescheduledAt: new Date().toISOString(),
          },
        });
      }
    },
  };

  // Helper getters
  const getters = {
    getAppointmentById: id => {
      return state.appointments.find(apt => apt.id === id);
    },

    getUpcomingAppointments: () => {
      const now = new Date();
      return state.appointments
        .filter(apt => {
          const appointmentDate = new Date(`${apt.date} ${apt.time}`);
          return appointmentDate > now && apt.status !== 'cancelled';
        })
        .sort((a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`));
    },

    getPastAppointments: () => {
      const now = new Date();
      return state.appointments
        .filter(apt => {
          const appointmentDate = new Date(`${apt.date} ${apt.time}`);
          return appointmentDate <= now;
        })
        .sort((a, b) => new Date(`${b.date} ${b.time}`) - new Date(`${a.date} ${a.time}`));
    },

    getCancelledAppointments: () => {
      return state.appointments
        .filter(apt => apt.status === 'cancelled')
        .sort(
          (a, b) => new Date(b.cancelledAt || b.createdAt) - new Date(a.cancelledAt || a.createdAt)
        );
    },

    getAppointmentsByStatus: status => {
      return state.appointments.filter(apt => apt.status === status);
    },

    getAppointmentsByClinic: clinicId => {
      return state.appointments.filter(apt => apt.clinic?.id === clinicId);
    },

    getAppointmentsCount: () => {
      return {
        total: state.appointments.length,
        upcoming: getters.getUpcomingAppointments().length,
        past: getters.getPastAppointments().length,
        cancelled: getters.getCancelledAppointments().length,
      };
    },

    hasUpcomingAppointments: () => {
      return getters.getUpcomingAppointments().length > 0;
    },
  };

  const contextValue = {
    state,
    actions,
    getters,
    dispatch,
    // Direct exports for convenience
    appointments: state.appointments,
    activeAppointment: state.activeAppointment,
    isStorageLoaded: state.isStorageLoaded,
    isLoadingAppointments: state.isLoadingAppointments,
    addAppointment: actions.addAppointment,
    removeAppointment: actions.removeAppointment,
    updateAppointment: actions.updateAppointment,
  };

  return (
    <AppointmentsContext.Provider value={contextValue}>{children}</AppointmentsContext.Provider>
  );
}

// Custom hook to use the context
export function useAppointmentsContext() {
  const context = useContext(AppointmentsContext);
  if (!context) {
    throw new Error('useAppointmentsContext must be used within an AppointmentsProvider');
  }
  return context;
}

export { AppointmentsActionTypes };
