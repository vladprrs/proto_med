import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state for user information
const initialState = {
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

  isLoggedIn: true,
  isUserDataLoaded: false,
};

// Action types
const UserActionTypes = {
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_PATIENT_INFO: 'UPDATE_PATIENT_INFO',
  SET_LOGIN_STATUS: 'SET_LOGIN_STATUS',
  SET_USER_DATA_LOADED: 'SET_USER_DATA_LOADED',
  RESET_PATIENT_INFO: 'RESET_PATIENT_INFO',
  LOAD_FROM_STORAGE: 'LOAD_FROM_STORAGE',
};

// Reducer function
function userReducer(state, action) {
  switch (action.type) {
    case UserActionTypes.UPDATE_USER:
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload },
      };

    case UserActionTypes.UPDATE_PATIENT_INFO:
      return {
        ...state,
        patientInfo: { ...state.patientInfo, ...action.payload },
      };

    case UserActionTypes.SET_LOGIN_STATUS:
      return { ...state, isLoggedIn: action.payload };

    case UserActionTypes.SET_USER_DATA_LOADED:
      return { ...state, isUserDataLoaded: action.payload };

    case UserActionTypes.RESET_PATIENT_INFO:
      return {
        ...state,
        patientInfo: {
          name: state.currentUser.name,
          phone: state.currentUser.phone,
          email: state.currentUser.email,
          comment: '',
        },
      };

    case UserActionTypes.LOAD_FROM_STORAGE:
      return { ...state, ...action.payload, isUserDataLoaded: true };

    default:
      return state;
  }
}

// Storage key
const USER_STORAGE_KEY = 'medpoisk-user-data';

// Create context
const UserContext = createContext();

// Provider component
export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Load user data from localStorage on mount
  useEffect(() => {
    const savedUserData = localStorage.getItem(USER_STORAGE_KEY);

    if (savedUserData) {
      try {
        const parsedUserData = JSON.parse(savedUserData);
        dispatch({ type: UserActionTypes.LOAD_FROM_STORAGE, payload: parsedUserData });
      } catch (error) {
        console.error('Failed to load user data from storage:', error);
        dispatch({ type: UserActionTypes.SET_USER_DATA_LOADED, payload: true });
      }
    } else {
      dispatch({ type: UserActionTypes.SET_USER_DATA_LOADED, payload: true });
    }
  }, []);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (!state.isUserDataLoaded) return;

    try {
      const dataToSave = {
        currentUser: state.currentUser,
        patientInfo: state.patientInfo,
        isLoggedIn: state.isLoggedIn,
      };
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (error) {
      console.error('Failed to save user data to storage:', error);
    }
  }, [state.currentUser, state.patientInfo, state.isLoggedIn, state.isUserDataLoaded]);

  // Action creators
  const actions = {
    updateUser: userData => dispatch({ type: UserActionTypes.UPDATE_USER, payload: userData }),
    updatePatientInfo: patientData =>
      dispatch({ type: UserActionTypes.UPDATE_PATIENT_INFO, payload: patientData }),
    setLoginStatus: isLoggedIn =>
      dispatch({ type: UserActionTypes.SET_LOGIN_STATUS, payload: isLoggedIn }),
    resetPatientInfo: () => dispatch({ type: UserActionTypes.RESET_PATIENT_INFO }),

    // Convenience methods
    login: userData => {
      dispatch({ type: UserActionTypes.UPDATE_USER, payload: userData });
      dispatch({ type: UserActionTypes.SET_LOGIN_STATUS, payload: true });
    },

    logout: () => {
      dispatch({ type: UserActionTypes.SET_LOGIN_STATUS, payload: false });
      localStorage.removeItem(USER_STORAGE_KEY);
    },

    // Backward compatibility aliases
    setPatientData: data => dispatch({ type: UserActionTypes.UPDATE_PATIENT_INFO, payload: data }),
    getPatientData: () => state.patientInfo,
  };

  // Helper getters
  const getters = {
    isPatientInfoComplete: () => {
      return !!(state.patientInfo.name && state.patientInfo.phone);
    },

    getUserDisplayName: () => {
      return state.currentUser.name || 'Пользователь';
    },

    getFormattedPhone: () => {
      const phone = state.currentUser.phone;
      if (!phone) return '';

      // Format phone like +7(999)462-08-09
      const cleaned = phone.replace(/\D/g, '');
      if (cleaned.length === 11 && cleaned.startsWith('7')) {
        return `+7(${cleaned.slice(1, 4)})${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`;
      }
      return phone;
    },

    canBookAppointment: () => {
      return state.isLoggedIn && state.patientInfo.name && state.patientInfo.phone;
    },
  };

  const contextValue = {
    state,
    actions,
    getters,
    dispatch,
    // Direct exports for convenience
    currentUser: state.currentUser,
    patientInfo: state.patientInfo,
    isLoggedIn: state.isLoggedIn,
    isUserDataLoaded: state.isUserDataLoaded,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

// Custom hook to use the context
export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}

export { UserActionTypes };
