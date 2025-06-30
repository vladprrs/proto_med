import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useUIContext } from '../../contexts/index.jsx';

const ToastContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 16px;
  right: 16px;
  z-index: 10000;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;

const ToastMessage = styled.div`
  background: ${props => {
    switch (props.type) {
    case 'success':
      return '#4CAF50';
    case 'error':
      return '#FF5252';
    case 'warning':
      return '#FF9800';
    default:
      return '#2196F3';
    }
  }};
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  font-family:
    'SB Sans Text',
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  max-width: 300px;
  text-align: center;
  animation: slideIn 0.3s ease-out;
  pointer-events: auto;

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Toast = () => {
  const ui = useUIContext();
  const { toast } = ui;

  useEffect(() => {
    if (toast && toast.show) {
      const timer = setTimeout(() => {
        ui.actions.hideToast();
      }, toast.duration || 3000);

      return () => clearTimeout(timer);
    }
  }, [toast, ui.actions]);

  if (!toast || !toast.show) {
    return null;
  }

  return (
    <ToastContainer>
      <ToastMessage type={toast.type}>{toast.message}</ToastMessage>
    </ToastContainer>
  );
};

export default Toast;
