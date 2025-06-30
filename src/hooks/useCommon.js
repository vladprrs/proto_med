import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

/**
 * Hook для debounce значений
 * @param {*} value - значение для debounce
 * @param {number} delay - задержка в миллисекундах
 * @returns {*} debounced значение
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Hook для throttle функций
 * @param {Function} func - функция для throttle
 * @param {number} delay - задержка в миллисекундах
 * @returns {Function} throttled функция
 */
export const useThrottle = (func, delay) => {
  const lastRun = useRef(Date.now());

  return useCallback(
    (...args) => {
      if (Date.now() - lastRun.current >= delay) {
        func(...args);
        lastRun.current = Date.now();
      }
    },
    [func, delay],
  );
};

/**
 * Hook для управления localStorage
 * @param {string} key - ключ в localStorage
 * @param {*} initialValue - начальное значение
 * @returns {[*, Function]} [value, setValue]
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

/**
 * Hook для отслеживания предыдущего значения
 * @param {*} value - текущее значение
 * @returns {*} предыдущее значение
 */
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

/**
 * Hook для управления состоянием toggle
 * @param {boolean} initialValue - начальное значение
 * @returns {[boolean, Function, Function, Function]} [value, toggle, setTrue, setFalse]
 */
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, toggle, setTrue, setFalse];
};

/**
 * Hook для копирования в буфер обмена
 * @returns {[Function, boolean]} [copyToClipboard, hasCopied]
 */
export const useClipboard = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
      setHasCopied(false);
    }
  }, []);

  return [copyToClipboard, hasCopied];
};

/**
 * Hook для отслеживания размера окна
 * @returns {Object} { width, height, isMobile, isTablet, isDesktop }
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const breakpoints = useMemo(() => ({
    isMobile: windowSize.width < 768,
    isTablet: windowSize.width >= 768 && windowSize.width < 1024,
    isDesktop: windowSize.width >= 1024,
  }), [windowSize.width]);

  return {
    ...windowSize,
    ...breakpoints,
  };
};

/**
 * Hook для отслеживания видимости элемента
 * @param {Object} options - опции для IntersectionObserver
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

/**
 * Hook для async операций с состоянием loading/error
 * @returns {Object} { execute, loading, error, data }
 */
export const useAsync = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const execute = useCallback(async (asyncFunction) => {
    setState({ loading: true, error: null, data: null });
    
    try {
      const result = await asyncFunction();
      setState({ loading: false, error: null, data: result });
      return result;
    } catch (error) {
      setState({ loading: false, error, data: null });
      throw error;
    }
  }, []);

  return { ...state, execute };
};

/**
 * Hook для отслеживания онлайн/оффлайн статуса
 * @returns {boolean} isOnline
 */
export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};

/**
 * Hook для измерения времени выполнения
 * @param {string} name - имя для идентификации
 * @returns {Function} startTimer
 */
export const useTimer = (name = 'Timer') => {
  const startTime = useRef(null);

  const startTimer = useCallback(() => {
    startTime.current = performance.now();
    console.log(`⏱️ ${name} started`);
  }, [name]);

  const endTimer = useCallback(() => {
    if (startTime.current) {
      const elapsed = performance.now() - startTime.current;
      console.log(`⏱️ ${name} completed in ${elapsed.toFixed(2)}ms`);
      startTime.current = null;
      return elapsed;
    }
    return 0;
  }, [name]);

  return { startTimer, endTimer };
};

/**
 * Hook для управления состоянием формы
 * @param {Object} initialValues - начальные значения
 * @param {Function} validate - функция валидации
 * @returns {Object} { values, errors, handleChange, handleSubmit, reset }
 */
export const useForm = (initialValues = {}, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    if (touched[name] && validate) {
      const fieldErrors = validate({ ...values, [name]: value });
      setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
    }
  }, [values, touched, validate]);

  const handleBlur = useCallback((name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    
    if (validate) {
      const fieldErrors = validate(values);
      setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
    }
  }, [values, validate]);

  const handleSubmit = useCallback((onSubmit) => {
    const formErrors = validate ? validate(values) : {};
    setErrors(formErrors);
    setTouched(Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    if (Object.keys(formErrors).length === 0) {
      onSubmit(values);
    }
  }, [values, validate]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    isValid: Object.keys(errors).length === 0,
  };
}; 