import { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { useClinics } from './useApi.js';

export function useSearch() {
  const { ui } = useAppContext();
  const { data: allClinics } = useClinics();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setSearching] = useState(false);

  const performSearch = async (query = '') => {
    try {
      setSearching(true);
      setSearchQuery(query);
      if (!allClinics) {
        setSearchResults([]);
        return [];
      }
      const q = query.toLowerCase().trim();
      const results = allClinics.filter(
        clinic =>
          clinic.name?.toLowerCase().includes(q) ||
          clinic.address?.toLowerCase().includes(q),
      );
      setSearchResults(results);
      return results;
    } catch (error) {
      ui.actions?.showError && ui.actions.showError('Ошибка поиска');
      return [];
    } finally {
      setSearching(false);
    }
  };

  return { searchQuery, searchResults, isSearching, performSearch, setSearchQuery };
}
