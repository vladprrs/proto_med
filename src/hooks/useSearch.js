import { useSearchContext, useUIContext } from '../contexts/index.jsx';
import { useClinics } from './useApi.js';

/**
 * Специализированный хук для поиска клиник
 * Объединяет SearchContext с API для поиска и фильтрации
 */
export function useSearch() {
  const search = useSearchContext();
  const ui = useUIContext();
  const { data: allClinics, isLoading: clinicsLoading } = useClinics();

  // Выполнение поиска с фильтрами
  const performSearch = async (query = search.searchQuery, filters = search.searchFilters) => {
    try {
      search.actions.setSearching(true);
      search.actions.setSearchQuery(query);
      search.actions.setSearchFilters(filters);

      if (!allClinics) {
        search.actions.setSearchResults([]);
        return [];
      }

      // Применяем поисковый запрос
      let results = allClinics;

      if (query && query.trim()) {
        const lowercaseQuery = query.toLowerCase().trim();
        results = results.filter(
          clinic =>
            clinic.name?.toLowerCase().includes(lowercaseQuery) ||
            clinic.address?.toLowerCase().includes(lowercaseQuery) ||
            clinic.specialties?.some(specialty => specialty.toLowerCase().includes(lowercaseQuery))
        );
      }

      // Применяем фильтры
      results = applyFilters(results, filters);

      // Сортируем результаты
      results = sortResults(results, filters.sortBy || 'relevance', query);

      search.actions.setSearchResults(results);
      return results;
    } catch (error) {
      ui.actions.showError('Ошибка поиска');
      console.error('Search error:', error);
      return [];
    } finally {
      search.actions.setSearching(false);
    }
  };

  // Применение фильтров
  const applyFilters = (clinics, filters) => {
    let filtered = [...clinics];

    // Фильтр по рейтингу
    if (filters.minRating) {
      filtered = filtered.filter(clinic => clinic.rating >= filters.minRating);
    }

    // Фильтр по расстоянию
    if (filters.maxDistance) {
      filtered = filtered.filter(clinic => {
        const distance = parseFloat(clinic.distance);
        return !isNaN(distance) && distance <= filters.maxDistance;
      });
    }

    // Фильтр по специальности
    if (filters.specialties?.length > 0) {
      filtered = filtered.filter(clinic =>
        clinic.specialties?.some(specialty => filters.specialties.includes(specialty))
      );
    }

    // Фильтр по услугам
    if (filters.services?.length > 0) {
      filtered = filtered.filter(clinic =>
        clinic.services?.some(service => filters.services.includes(service))
      );
    }

    // Фильтр по онлайн записи
    if (filters.onlineBooking) {
      filtered = filtered.filter(clinic => clinic.hasOnlineBooking);
    }

    // Фильтр по рекламодателям (с короной)
    if (filters.advertisers === true) {
      filtered = filtered.filter(clinic => clinic.hasCrown);
    } else if (filters.advertisers === false) {
      filtered = filtered.filter(clinic => !clinic.hasCrown);
    }

    // Фильтр по режиму работы
    if (filters.isOpen24h) {
      filtered = filtered.filter(clinic => clinic.isOpen24h);
    }

    return filtered;
  };

  // Сортировка результатов
  const sortResults = (clinics, sortBy, query) => {
    const sorted = [...clinics];

    switch (sortBy) {
      case 'rating':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));

      case 'distance':
        return sorted.sort((a, b) => {
          const distanceA = parseFloat(a.distance) || 999;
          const distanceB = parseFloat(b.distance) || 999;
          return distanceA - distanceB;
        });

      case 'reviews':
        return sorted.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));

      case 'name':
        return sorted.sort((a, b) => (a.name || '').localeCompare(b.name || ''));

      case 'relevance':
      default:
        // Сортировка по релевантности
        if (!query) return sorted;

        return sorted.sort((a, b) => {
          const queryLower = query.toLowerCase();

          // Приоритет: точное совпадение в названии
          const aNameMatch = a.name?.toLowerCase().includes(queryLower);
          const bNameMatch = b.name?.toLowerCase().includes(queryLower);

          if (aNameMatch && !bNameMatch) return -1;
          if (!aNameMatch && bNameMatch) return 1;

          // Затем по рейтингу
          return (b.rating || 0) - (a.rating || 0);
        });
    }
  };

  // Быстрые фильтры
  const quickFilters = {
    nearbyOnly: () => {
      const filters = { ...search.searchFilters, maxDistance: 2 };
      return performSearch(search.searchQuery, filters);
    },

    highRatedOnly: () => {
      const filters = { ...search.searchFilters, minRating: 4.5 };
      return performSearch(search.searchQuery, filters);
    },

    onlineBookingOnly: () => {
      const filters = { ...search.searchFilters, onlineBooking: true };
      return performSearch(search.searchQuery, filters);
    },

    advertisersOnly: () => {
      const filters = { ...search.searchFilters, advertisers: true };
      return performSearch(search.searchQuery, filters);
    },
  };

  // Сброс всех фильтров
  const clearAllFilters = () => {
    search.actions.setSearchFilters({});
    return performSearch(search.searchQuery, {});
  };

  // Получение популярных поисковых запросов
  const getPopularQueries = () => {
    return [
      'стоматология',
      'терапевт',
      'педиатр',
      'кардиолог',
      'гинеколог',
      'офтальмолог',
      'невролог',
      'ультразвуковая диагностика',
    ];
  };

  // Получение доступных фильтров на основе результатов
  const getAvailableFilters = () => {
    if (!allClinics) return {};

    const specialties = new Set();
    const services = new Set();
    let minRating = 5;
    let maxRating = 0;
    let minDistance = 999;
    let maxDistance = 0;

    allClinics.forEach(clinic => {
      // Специальности
      clinic.specialties?.forEach(specialty => specialties.add(specialty));

      // Услуги
      clinic.services?.forEach(service => services.add(service));

      // Рейтинг
      if (clinic.rating) {
        minRating = Math.min(minRating, clinic.rating);
        maxRating = Math.max(maxRating, clinic.rating);
      }

      // Расстояние
      const distance = parseFloat(clinic.distance);
      if (!isNaN(distance)) {
        minDistance = Math.min(minDistance, distance);
        maxDistance = Math.max(maxDistance, distance);
      }
    });

    return {
      specialties: Array.from(specialties).sort(),
      services: Array.from(services).sort(),
      ratingRange: { min: minRating, max: maxRating },
      distanceRange: { min: minDistance, max: maxDistance },
    };
  };

  // Статистика поиска
  const getSearchStats = () => {
    return {
      totalClinics: allClinics?.length || 0,
      searchResults: search.searchResults.length,
      hasActiveQuery: !!search.searchQuery,
      hasActiveFilters: search.getters.hasActiveFilters(),
      filtersCount: Object.keys(search.searchFilters).length,
      isSearching: search.isSearching,
    };
  };

  return {
    // Базовые методы из контекста
    ...search,

    // Расширенные методы поиска
    performSearch,
    clearAllFilters,
    quickFilters,

    // Утилиты
    getPopularQueries,
    getAvailableFilters,
    getSearchStats,

    // Удобные геттеры
    popularQueries: getPopularQueries(),
    availableFilters: getAvailableFilters(),
    searchStats: getSearchStats(),

    // Состояние загрузки
    isLoading: clinicsLoading || search.isSearching,

    // Быстрый доступ к результатам
    results: search.searchResults,
    hasResults: search.getters.hasSearchResults(),
    resultsCount: search.searchResults.length,
  };
}
