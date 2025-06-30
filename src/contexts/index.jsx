// Export all contexts
export { SearchProvider, useSearchContext, SearchActionTypes } from './SearchContext';
export {
  BookingProvider,
  useBookingContext,
  BookingActionTypes,
  BookingSteps,
} from './BookingContext';
export { UserProvider, useUserContext, UserActionTypes } from './UserContext';
export {
  AppointmentsProvider,
  useAppointmentsContext,
  AppointmentsActionTypes,
} from './AppointmentsContext';
export { UIProvider, useUIContext, UIActionTypes } from './UIContext';

// Import React for the combined provider
import React from 'react';
import { SearchProvider, useSearchContext } from './SearchContext';
import { BookingProvider, useBookingContext } from './BookingContext';
import { UserProvider, useUserContext } from './UserContext';
import { AppointmentsProvider, useAppointmentsContext } from './AppointmentsContext';
import { UIProvider, useUIContext } from './UIContext';

// Combined context provider that wraps all providers
export function ContextProvider({ children }) {
  return (
    <UIProvider>
      <UserProvider>
        <AppointmentsProvider>
          <SearchProvider>
            <BookingProvider>{children}</BookingProvider>
          </SearchProvider>
        </AppointmentsProvider>
      </UserProvider>
    </UIProvider>
  );
}

// Convenience hook to use multiple contexts at once
export function useAppState() {
  const search = useSearchContext();
  const booking = useBookingContext();
  const user = useUserContext();
  const appointments = useAppointmentsContext();
  const ui = useUIContext();

  return {
    search,
    booking,
    user,
    appointments,
    ui,
  };
}
