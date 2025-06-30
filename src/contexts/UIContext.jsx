import React, { createContext, useContext, useReducer } from 'react';

// Initial state for UI
const initialState = {
  isLoading: false,
  errors: {},
  toast: null,
  modals: {
    filter: false,
    confirm: false,
    appointment: false,
    profile: false,
  },
  bottomSheet: {
    isOpen: false,
    content: null,
    height: 'auto',
  },
};

// Action types
const UIActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  CLEAR_ALL_ERRORS: 'CLEAR_ALL_ERRORS',
  SHOW_TOAST: 'SHOW_TOAST',
  HIDE_TOAST: 'HIDE_TOAST',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  CLOSE_ALL_MODALS: 'CLOSE_ALL_MODALS',
  SHOW_BOTTOM_SHEET: 'SHOW_BOTTOM_SHEET',
  HIDE_BOTTOM_SHEET: 'HIDE_BOTTOM_SHEET',
};

// Reducer function
function uiReducer(state, action) {
  switch (action.type) {
  case UIActionTypes.SET_LOADING:
    return { ...state, isLoading: action.payload };

  case UIActionTypes.SET_ERROR:
    return {
      ...state,
      errors: { ...state.errors, [action.payload.field]: action.payload.error },
    };

  case UIActionTypes.CLEAR_ERROR:
    const { [action.payload]: removed, ...remainingErrors } = state.errors;
    return { ...state, errors: remainingErrors };

  case UIActionTypes.CLEAR_ALL_ERRORS:
    return { ...state, errors: {} };

  case UIActionTypes.SHOW_TOAST:
    return { ...state, toast: action.payload };

  case UIActionTypes.HIDE_TOAST:
    return { ...state, toast: null };

  case UIActionTypes.TOGGLE_MODAL:
    return {
      ...state,
      modals: { ...state.modals, [action.payload.modal]: action.payload.isOpen },
    };

  case UIActionTypes.CLOSE_ALL_MODALS:
    const closedModals = Object.keys(state.modals).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    return { ...state, modals: closedModals };

  case UIActionTypes.SHOW_BOTTOM_SHEET:
    return {
      ...state,
      bottomSheet: {
        isOpen: true,
        content: action.payload.content,
        height: action.payload.height || 'auto',
      },
    };

  case UIActionTypes.HIDE_BOTTOM_SHEET:
    return {
      ...state,
      bottomSheet: {
        isOpen: false,
        content: null,
        height: 'auto',
      },
    };

  default:
    return state;
  }
}

// Create context
const UIContext = createContext();

// Provider component
export function UIProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  // Action creators
  const actions = {
    setLoading: loading => dispatch({ type: UIActionTypes.SET_LOADING, payload: loading }),

    // Error management
    setError: (field, error) =>
      dispatch({ type: UIActionTypes.SET_ERROR, payload: { field, error } }),
    clearError: field => dispatch({ type: UIActionTypes.CLEAR_ERROR, payload: field }),
    clearAllErrors: () => dispatch({ type: UIActionTypes.CLEAR_ALL_ERRORS }),

    // Toast management
    showToast: (message, type = 'info', duration = 3000) => {
      const toastId = Date.now().toString();
      dispatch({
        type: UIActionTypes.SHOW_TOAST,
        payload: { id: toastId, message, type, duration, show: true },
      });

      // Auto-hide toast after duration
      setTimeout(() => {
        dispatch({ type: UIActionTypes.HIDE_TOAST });
      }, duration);

      return toastId;
    },

    hideToast: () => dispatch({ type: UIActionTypes.HIDE_TOAST }),

    // Convenience toast methods
    showSuccess: (message, duration = 3000) => actions.showToast(message, 'success', duration),
    showError: (message, duration = 5000) => actions.showToast(message, 'error', duration),
    showWarning: (message, duration = 4000) => actions.showToast(message, 'warning', duration),
    showInfo: (message, duration = 3000) => actions.showToast(message, 'info', duration),

    // Modal management
    toggleModal: (modal, isOpen) =>
      dispatch({ type: UIActionTypes.TOGGLE_MODAL, payload: { modal, isOpen } }),
    openModal: modal =>
      dispatch({ type: UIActionTypes.TOGGLE_MODAL, payload: { modal, isOpen: true } }),
    closeModal: modal =>
      dispatch({ type: UIActionTypes.TOGGLE_MODAL, payload: { modal, isOpen: false } }),
    closeAllModals: () => dispatch({ type: UIActionTypes.CLOSE_ALL_MODALS }),

    // Bottom sheet management
    showBottomSheet: (content, height = 'auto') =>
      dispatch({
        type: UIActionTypes.SHOW_BOTTOM_SHEET,
        payload: { content, height },
      }),
    hideBottomSheet: () => dispatch({ type: UIActionTypes.HIDE_BOTTOM_SHEET }),

    // Loading helpers
    withLoading: async asyncFunction => {
      try {
        actions.setLoading(true);
        actions.clearAllErrors();
        const result = await asyncFunction();
        return result;
      } catch (error) {
        actions.setError('general', error.message || 'Произошла ошибка');
        throw error;
      } finally {
        actions.setLoading(false);
      }
    },
  };

  // Helper getters
  const getters = {
    hasErrors: () => {
      return Object.keys(state.errors).length > 0;
    },

    getError: field => {
      return state.errors[field];
    },

    isModalOpen: modal => {
      return state.modals[modal] || false;
    },

    hasOpenModals: () => {
      return Object.values(state.modals).some(isOpen => isOpen);
    },

    getOpenModals: () => {
      return Object.keys(state.modals).filter(modal => state.modals[modal]);
    },

    getLoadingState: () => ({
      isLoading: state.isLoading,
      hasErrors: getters.hasErrors(),
      errorCount: Object.keys(state.errors).length,
    }),
  };

  const contextValue = {
    state,
    actions,
    getters,
    dispatch,
    // Direct exports for convenience
    isLoading: state.isLoading,
    errors: state.errors,
    toast: state.toast,
    modals: state.modals,
    bottomSheet: state.bottomSheet,
  };

  return <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>;
}

// Custom hook to use the context
export function useUIContext() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUIContext must be used within a UIProvider');
  }
  return context;
}

export { UIActionTypes };
