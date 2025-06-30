import React, { createContext, useContext, useReducer } from 'react';

// Initial state for booking flow
const initialState = {
  selectedClinic: null,
  selectedServices: [],
  selectedSpecialist: null,
  selectedDate: null,
  selectedTime: null,
  totalPrice: 0,
  estimatedDuration: 0,
  bookingResult: null,
  currentStep: 'search',
  isBookingInProgress: false,
};

// Booking steps enum
export const BookingSteps = {
  SEARCH: 'search',
  SERVICES: 'services',
  SPECIALIST: 'specialist',
  DATETIME: 'datetime',
  CONFIRM: 'confirm',
  SUCCESS: 'success',
};

// Action types
const BookingActionTypes = {
  SELECT_CLINIC: 'SELECT_CLINIC',
  SELECT_SERVICES: 'SELECT_SERVICES',
  SELECT_SPECIALIST: 'SELECT_SPECIALIST',
  SELECT_DATE_TIME: 'SELECT_DATE_TIME',
  SET_CURRENT_STEP: 'SET_CURRENT_STEP',
  SET_BOOKING_RESULT: 'SET_BOOKING_RESULT',
  SET_BOOKING_IN_PROGRESS: 'SET_BOOKING_IN_PROGRESS',
  RESET_BOOKING_FLOW: 'RESET_BOOKING_FLOW',
};

// Reducer function
function bookingReducer(state, action) {
  switch (action.type) {
    case BookingActionTypes.SELECT_CLINIC:
      return {
        ...state,
        selectedClinic: action.payload,
        currentStep: BookingSteps.SERVICES,
      };

    case BookingActionTypes.SELECT_SERVICES: {
      const services = action.payload;
      const totalPrice = services.reduce((sum, service) => {
        const price =
          typeof service.price === 'string'
            ? parseInt(service.price.replace(/\D/g, '')) || 0
            : service.price || 0;
        return sum + price;
      }, 0);
      const totalDuration = services.reduce((sum, service) => sum + (service.duration || 30), 0);

      return {
        ...state,
        selectedServices: services,
        totalPrice,
        estimatedDuration: totalDuration,
        currentStep: BookingSteps.SPECIALIST,
      };
    }

    case BookingActionTypes.SELECT_SPECIALIST:
      return {
        ...state,
        selectedSpecialist: action.payload,
        currentStep: BookingSteps.DATETIME,
      };

    case BookingActionTypes.SELECT_DATE_TIME:
      return {
        ...state,
        selectedDate: action.payload.date,
        selectedTime: action.payload.time,
        currentStep: BookingSteps.CONFIRM,
      };

    case BookingActionTypes.SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };

    case BookingActionTypes.SET_BOOKING_RESULT:
      return {
        ...state,
        bookingResult: action.payload,
        currentStep: BookingSteps.SUCCESS,
      };

    case BookingActionTypes.SET_BOOKING_IN_PROGRESS:
      return { ...state, isBookingInProgress: action.payload };

    case BookingActionTypes.RESET_BOOKING_FLOW:
      return {
        ...state,
        selectedClinic: null,
        selectedServices: [],
        selectedSpecialist: null,
        selectedDate: null,
        selectedTime: null,
        totalPrice: 0,
        estimatedDuration: 0,
        bookingResult: null,
        currentStep: BookingSteps.SEARCH,
        isBookingInProgress: false,
      };

    default:
      return state;
  }
}

// Create context
const BookingContext = createContext();

// Provider component
export function BookingProvider({ children }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  // Action creators
  const actions = {
    selectClinic: clinic => dispatch({ type: BookingActionTypes.SELECT_CLINIC, payload: clinic }),
    selectServices: services =>
      dispatch({ type: BookingActionTypes.SELECT_SERVICES, payload: services }),
    selectSpecialist: specialist =>
      dispatch({ type: BookingActionTypes.SELECT_SPECIALIST, payload: specialist }),
    selectDateTime: (date, time) =>
      dispatch({ type: BookingActionTypes.SELECT_DATE_TIME, payload: { date, time } }),
    setCurrentStep: step => dispatch({ type: BookingActionTypes.SET_CURRENT_STEP, payload: step }),
    setBookingResult: result =>
      dispatch({ type: BookingActionTypes.SET_BOOKING_RESULT, payload: result }),
    setBookingInProgress: inProgress =>
      dispatch({ type: BookingActionTypes.SET_BOOKING_IN_PROGRESS, payload: inProgress }),
    resetBookingFlow: () => dispatch({ type: BookingActionTypes.RESET_BOOKING_FLOW }),

    // Navigation helpers
    goToStep: step => dispatch({ type: BookingActionTypes.SET_CURRENT_STEP, payload: step }),
    goBack: () => {
      const stepOrder = [
        BookingSteps.SEARCH,
        BookingSteps.SERVICES,
        BookingSteps.SPECIALIST,
        BookingSteps.DATETIME,
        BookingSteps.CONFIRM,
      ];
      const currentIndex = stepOrder.indexOf(state.currentStep);
      if (currentIndex > 0) {
        dispatch({
          type: BookingActionTypes.SET_CURRENT_STEP,
          payload: stepOrder[currentIndex - 1],
        });
      }
    },

    // Backward compatibility aliases
    setSelectedClinic: clinic =>
      dispatch({ type: BookingActionTypes.SELECT_CLINIC, payload: clinic }),
    setSelectedServices: services =>
      dispatch({ type: BookingActionTypes.SELECT_SERVICES, payload: services }),
    setSelectedSpecialist: specialist =>
      dispatch({ type: BookingActionTypes.SELECT_SPECIALIST, payload: specialist }),
    setSelectedDateTime: dateTime =>
      dispatch({
        type: BookingActionTypes.SELECT_DATE_TIME,
        payload: { date: dateTime?.date, time: dateTime?.time },
      }),
    clearBookingData: () => dispatch({ type: BookingActionTypes.RESET_BOOKING_FLOW }),
  };

  // Helper getters
  const getters = {
    isBookingComplete: () => {
      return !!(
        state.selectedClinic &&
        state.selectedServices.length > 0 &&
        state.selectedSpecialist &&
        state.selectedDate &&
        state.selectedTime
      );
    },

    getBookingData: () => ({
      clinic: state.selectedClinic,
      services: state.selectedServices,
      specialist: state.selectedSpecialist,
      date: state.selectedDate,
      time: state.selectedTime,
      totalPrice: state.totalPrice,
      estimatedDuration: state.estimatedDuration,
    }),

    getBookingProgress: () => {
      const steps = [
        BookingSteps.SEARCH,
        BookingSteps.SERVICES,
        BookingSteps.SPECIALIST,
        BookingSteps.DATETIME,
        BookingSteps.CONFIRM,
      ];
      const currentIndex = steps.indexOf(state.currentStep);
      return {
        currentStep: state.currentStep,
        currentIndex,
        totalSteps: steps.length,
        progress: ((currentIndex + 1) / steps.length) * 100,
        canGoBack: currentIndex > 0,
        canGoForward: currentIndex < steps.length - 1,
      };
    },

    getFormattedPrice: () => {
      return state.totalPrice.toLocaleString('ru-RU') + ' ₽';
    },

    getFormattedDuration: () => {
      const hours = Math.floor(state.estimatedDuration / 60);
      const minutes = state.estimatedDuration % 60;
      if (hours > 0) {
        return minutes > 0 ? `${hours} ч ${minutes} мин` : `${hours} ч`;
      }
      return `${minutes} мин`;
    },
  };

  const contextValue = {
    state,
    actions,
    getters,
    dispatch,
    // Direct exports for convenience
    selectedClinic: state.selectedClinic,
    selectedServices: state.selectedServices,
    selectedSpecialist: state.selectedSpecialist,
    selectedDate: state.selectedDate,
    selectedTime: state.selectedTime,
    totalPrice: state.totalPrice,
    estimatedDuration: state.estimatedDuration,
    currentStep: state.currentStep,
    bookingResult: state.bookingResult,
    isBookingInProgress: state.isBookingInProgress,
  };

  return <BookingContext.Provider value={contextValue}>{children}</BookingContext.Provider>;
}

// Custom hook to use the context
export function useBookingContext() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
}

export { BookingActionTypes };
