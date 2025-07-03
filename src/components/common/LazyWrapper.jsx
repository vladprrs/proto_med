import React, { Suspense } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.minHeight || '200px'};
  padding: 32px 16px;
  background: ${props => props.background || '#fff'};
  animation: ${fadeIn} 0.3s ease-out;
`;

const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #1db93c;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 16px;
`;

const LoadingText = styled.div`
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  color: #7f8c8d;
  text-align: center;
`;

const LoadingFallback = ({ text = 'Загрузка...', minHeight, background }) => (
  <LoadingContainer background={background} minHeight={minHeight}>
    <Spinner />
    <LoadingText>{text}</LoadingText>
  </LoadingContainer>
);

/**
 * Wrapper для React.lazy компонентов с обработкой ошибок
 * @param {React.Component} Component - Lazy компонент
 * @param {Object} options - Опции загрузки
 */
const LazyWrapper = ({
  component: Component,
  fallback,
  loadingText,
  minHeight,
  background,
  ...props
}) => {
  const LoadingComponent = fallback || (
    <LoadingFallback background={background} minHeight={minHeight} text={loadingText} />
  );

  const WrappedComponent = (
    <Suspense fallback={LoadingComponent}>
      <Component {...props} />
    </Suspense>
  );

  return WrappedComponent;
};

/**
 * HOC для создания lazy компонентов с настройками по умолчанию
 */
export const withLazyLoading = (
  importFunction,
  options = {},
) => {
  const LazyComponent = React.lazy(importFunction);
  
  return (props) => (
    <LazyWrapper
      component={LazyComponent}
      {...options}
      {...props}
    />
  );
};

/**
 * Hook для предзагрузки lazy компонентов
 */
export const usePreloadComponent = (importFunction) => {
  const preload = React.useCallback(() => {
    importFunction();
  }, [importFunction]);

  return preload;
};

/**
 * Компонент для предзагрузки на hover
 */
export const PreloadOnHover = ({ 
  children, 
  importFunction, 
  delay = 0, 
}) => {
  const preload = usePreloadComponent(importFunction);
  
  const handleMouseEnter = React.useCallback(() => {
    if (delay > 0) {
      setTimeout(preload, delay);
    } else {
      preload();
    }
  }, [preload, delay]);

  return (
    <div onMouseEnter={handleMouseEnter}>
      {children}
    </div>
  );
};

export default LazyWrapper; 