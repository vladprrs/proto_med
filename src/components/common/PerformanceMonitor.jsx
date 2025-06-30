import { useEffect, useRef } from 'react';

/**
 * Компонент для мониторинга производительности
 */
const PerformanceMonitor = ({ enabled = true, reportWebVitals = true }) => {
  const performanceObserver = useRef(null);
  const startTime = useRef(Date.now());

  useEffect(() => {
    if (!enabled) {
      return;
    }

    // Логируем время монтирования компонента
    console.log('🔍 PerformanceMonitor: Monitoring started');
    
    // Мониторинг времени загрузки
    const measureLoadTime = () => {
      const loadTime = Date.now() - startTime.current;
      console.log(`⚡ Component load time: ${loadTime}ms`);
      
      if (loadTime > 3000) {
        console.warn(`⚠️ Slow component load detected: ${loadTime}ms`);
      }
    };

    // Мониторинг FCP (First Contentful Paint)
    const observeFCP = () => {
      if ('PerformanceObserver' in window) {
        try {
          performanceObserver.current = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                console.log(`🎨 First Contentful Paint: ${entry.startTime.toFixed(2)}ms`);
              }
              if (entry.name === 'largest-contentful-paint') {
                console.log(`🖼️ Largest Contentful Paint: ${entry.startTime.toFixed(2)}ms`);
              }
            });
          });

          performanceObserver.current.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
        } catch (error) {
          console.error('Performance Observer not supported:', error);
        }
      }
    };

    // Мониторинг Layout Shift
    const observeLayoutShift = () => {
      if ('PerformanceObserver' in window) {
        try {
          const layoutShiftObserver = new PerformanceObserver((list) => {
            let cumulativeScore = 0;
            const entries = list.getEntries();
            
            entries.forEach((entry) => {
              if (!entry.hadRecentInput) {
                cumulativeScore += entry.value;
              }
            });

            if (cumulativeScore > 0.1) {
              console.warn(`⚠️ Layout Shift detected: ${cumulativeScore.toFixed(4)}`);
            }
          });

          layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.error('Layout Shift Observer not supported:', error);
        }
      }
    };

    // Мониторинг Long Tasks
    const observeLongTasks = () => {
      if ('PerformanceObserver' in window) {
        try {
          const longTaskObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              console.warn(`🐌 Long task detected: ${entry.duration.toFixed(2)}ms`);
            });
          });

          longTaskObserver.observe({ entryTypes: ['longtask'] });
        } catch (error) {
          console.error('Long Task Observer not supported:', error);
        }
      }
    };

    // Мониторинг памяти (только Chrome)
    const monitorMemory = () => {
      if ('memory' in performance) {
        const {memory} = performance;
        console.log('💾 Memory usage:', {
          used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
          total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
          limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`,
        });

        // Предупреждение о высоком использовании памяти
        const usagePercent = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
        if (usagePercent > 80) {
          console.warn(`⚠️ High memory usage: ${usagePercent.toFixed(1)}%`);
        }
      }
    };

    // Запуск мониторинга
    measureLoadTime();
    observeFCP();
    observeLayoutShift();
    observeLongTasks();
    
    // Мониторинг памяти каждые 30 секунд
    const memoryInterval = setInterval(monitorMemory, 30000);
    monitorMemory(); // Первый замер сразу

    // Очистка при размонтировании
    return () => {
      if (performanceObserver.current) {
        performanceObserver.current.disconnect();
      }
      clearInterval(memoryInterval);
      console.log('🔍 PerformanceMonitor: Monitoring stopped');
    };
  }, [enabled]);

  // Web Vitals мониторинг
  useEffect(() => {
    if (!reportWebVitals || !enabled) {
      return;
    }

    const reportVital = (metric) => {
      console.log(`📈 Web Vital - ${metric.name}:`, {
        value: metric.value.toFixed(2),
        rating: getWebVitalRating(metric.name, metric.value),
        delta: metric.delta?.toFixed(2),
        id: metric.id,
      });
    };

    // Простая функция для оценки Web Vitals
    const getWebVitalRating = (name, value) => {
      const thresholds = {
        CLS: [0.1, 0.25],
        FID: [100, 300],
        LCP: [2500, 4000],
        FCP: [1800, 3000],
        TTFB: [800, 1800],
      };

      const [good, needsImprovement] = thresholds[name] || [0, 0];
      if (value <= good) {
        return 'good';
      }
      if (value <= needsImprovement) {
        return 'needs-improvement';
      }
      return 'poor';
    };

    // Имитация Web Vitals API (для простоты)
    // В реальном проекте лучше использовать библиотеку web-vitals
    const measureWebVitals = () => {
      // LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        try {
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              reportVital({
                name: 'LCP',
                value: lastEntry.startTime,
                id: `lcp-${  Date.now()}`,
              });
            }
          }).observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          console.error('LCP measurement failed:', error);
        }
      }

      // FID будет измеряться автоматически при взаимодействии
      document.addEventListener('click', () => {
        const fidValue = performance.now() - Date.now();
        reportVital({
          name: 'FID',
          value: Math.abs(fidValue),
          id: `fid-${  Date.now()}`,
        });
      }, { once: true });
    };

    measureWebVitals();
  }, [reportWebVitals, enabled]);

  return null; // Этот компонент не рендерит UI
};

/**
 * Hook для измерения производительности компонента
 */
export const usePerformanceMeasure = (componentName, dependencies = []) => {
  const renderStart = useRef(Date.now());
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    const renderTime = Date.now() - renderStart.current;
    
    console.log(`⚡ ${componentName} render #${renderCount.current}: ${renderTime}ms`);
    
    if (renderTime > 16) { // 60fps = 16.67ms per frame
      console.warn(`⚠️ ${componentName} slow render detected: ${renderTime}ms`);
    }
    
    renderStart.current = Date.now();
  }, dependencies);

  return {
    renderCount: renderCount.current,
    markRenderStart: () => {
      renderStart.current = Date.now(); 
    },
  };
};

/**
 * HOC для автоматического мониторинга производительности компонента
 */
export const withPerformanceMonitoring = (WrappedComponent, componentName) => {
  return function PerformanceMonitoredComponent(props) {
    usePerformanceMeasure(componentName || WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
};

export default PerformanceMonitor; 