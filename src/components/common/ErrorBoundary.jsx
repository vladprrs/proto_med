import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 32px 16px;
  text-align: center;
  background: #fff;
  border-radius: 12px;
  margin: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const ErrorIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #ff4757;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  &::after {
    content: '!';
    color: white;
    font-size: 32px;
    font-weight: bold;
  }
`;

const ErrorTitle = styled.h2`
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 8px 0;
`;

const ErrorMessage = styled.p`
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  color: #7f8c8d;
  margin: 0 0 24px 0;
  line-height: 1.5;
`;

const ErrorDetails = styled.details`
  margin: 16px 0;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;

  summary {
    cursor: pointer;
    font-weight: 500;
    color: #6c757d;
    margin-bottom: 8px;
  }

  pre {
    background: #212529;
    color: #f8f9fa;
    padding: 12px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 12px;
    line-height: 1.4;
    margin: 0;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-family: 'SB Sans Text', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props =>
    props.primary
      ? `
    background: #1db93c;
    color: white;
    
    &:hover {
      background: #16a632;
    }
  `
      : `
    background: #e9ecef;
    color: #495057;
    
    &:hover {
      background: #dee2e6;
    }
  `}
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Обновляем состояние, чтобы показать fallback UI
    return {
      hasError: true,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Логируем ошибку
    console.error('🚨 ErrorBoundary caught an error:', error);
    console.error('🚨 Error info:', errorInfo);

    // Сохраняем детали ошибки в state
    this.setState({
      error,
      errorInfo,
    });

    // Отправляем ошибку в систему мониторинга (например, Sentry)
    if (this.props.onError) {
      this.props.onError(error, errorInfo, this.state.errorId);
    }

    // В продакшене можно отправить ошибку на сервер
    if (process.env.NODE_ENV === 'production') {
      this.reportErrorToService(error, errorInfo);
    }
  }

  reportErrorToService = (error, errorInfo) => {
    // Здесь можно интегрировать с Sentry, LogRocket или другими сервисами
    try {
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        errorId: this.state.errorId,
      };

      console.log('📤 Error report:', errorReport);
      // fetch('/api/errors', { method: 'POST', body: JSON.stringify(errorReport) });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      const { fallback: Fallback, showDetails = false } = this.props;
      const { error, errorInfo } = this.state;

      // Если передан custom fallback компонент
      if (Fallback) {
        return (
          <Fallback
            error={error}
            errorInfo={errorInfo}
            onRetry={this.handleRetry}
            onReload={this.handleReload}
            onGoHome={this.handleGoHome}
          />
        );
      }

      // Стандартный fallback UI
      return (
        <ErrorContainer>
          <ErrorIcon />
          <ErrorTitle>Что-то пошло не так</ErrorTitle>
          <ErrorMessage>
            Произошла неожиданная ошибка. Мы уже работаем над её исправлением.
            <br />
            Попробуйте обновить страницу или вернуться на главную.
          </ErrorMessage>

          {showDetails && error && (
            <ErrorDetails>
              <summary>Технические детали</summary>
              <pre>
                {error.toString()}
                {errorInfo && errorInfo.componentStack}
              </pre>
            </ErrorDetails>
          )}

          <ActionButtons>
            <Button primary onClick={this.handleRetry}>
              Попробовать ещё раз
            </Button>
            <Button onClick={this.handleReload}>Обновить страницу</Button>
            <Button onClick={this.handleGoHome}>На главную</Button>
          </ActionButtons>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.elementType,
  showDetails: PropTypes.bool,
  onError: PropTypes.func,
};

ErrorBoundary.defaultProps = {
  fallback: null,
  showDetails: false,
  onError: null,
};

export default ErrorBoundary; 