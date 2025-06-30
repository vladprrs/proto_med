import React, { createContext, useContext, useReducer } from 'react';

// Initial state for search functionality
const initialState = {
  searchQuery: '',
  searchFilters: {},
  searchResults: [],
  isSearching: false,
};

// Action types
const SearchActionTypes = {
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_SEARCH_FILTERS: 'SET_SEARCH_FILTERS',
  SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
  SET_SEARCHING: 'SET_SEARCHING',
  RESET_SEARCH: 'RESET_SEARCH',
};

// Reducer function
function searchReducer(state, action) {
  switch (action.type) {
  case SearchActionTypes.SET_SEARCH_QUERY:
    return { ...state, searchQuery: action.payload };

  case SearchActionTypes.SET_SEARCH_FILTERS:
    return { ...state, searchFilters: action.payload };

  case SearchActionTypes.SET_SEARCH_RESULTS:
    return { ...state, searchResults: action.payload };

  case SearchActionTypes.SET_SEARCHING:
    return { ...state, isSearching: action.payload };

  case SearchActionTypes.RESET_SEARCH:
    return {
      ...state,
      searchQuery: '',
      searchFilters: {},
      searchResults: [],
      isSearching: false,
    };

  default:
    return state;
  }
}

// Create context
const SearchContext = createContext();

// Provider component
export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  // Action creators
  const actions = {
    setSearchQuery: query => dispatch({ type: SearchActionTypes.SET_SEARCH_QUERY, payload: query }),
    setSearchFilters: filters =>
      dispatch({ type: SearchActionTypes.SET_SEARCH_FILTERS, payload: filters }),
    setSearchResults: results =>
      dispatch({ type: SearchActionTypes.SET_SEARCH_RESULTS, payload: results }),
    setSearching: isSearching =>
      dispatch({ type: SearchActionTypes.SET_SEARCHING, payload: isSearching }),
    resetSearch: () => dispatch({ type: SearchActionTypes.RESET_SEARCH }),

    // Backward compatibility aliases
    setFilters: filters =>
      dispatch({ type: SearchActionTypes.SET_SEARCH_FILTERS, payload: filters }),
    getFilters: () => state.searchFilters,
  };

  // Helper getters
  const getters = {
    hasActiveFilters: () => {
      return Object.keys(state.searchFilters).length > 0;
    },

    hasSearchResults: () => {
      return state.searchResults.length > 0;
    },

    getSearchSummary: () => ({
      query: state.searchQuery,
      filtersCount: Object.keys(state.searchFilters).length,
      resultsCount: state.searchResults.length,
      isActive: state.searchQuery || Object.keys(state.searchFilters).length > 0,
    }),
  };

  const contextValue = {
    state,
    actions,
    getters,
    dispatch,
    // Direct exports for convenience
    searchQuery: state.searchQuery,
    searchFilters: state.searchFilters,
    searchResults: state.searchResults,
    isSearching: state.isSearching,
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
}

// Custom hook to use the context
export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
}

export { SearchActionTypes };
