import React from 'react';
import styled from 'styled-components';
import { buttonPrimary, buttonSecondary, buttonIcon } from '../../styles/mixins';

const PrimaryButton = styled.button`
  ${buttonPrimary}
`;

const SecondaryButton = styled.button`
  ${buttonSecondary}
`;

const IconButtonStyled = styled.button`
  ${buttonIcon}
`;

const Button = ({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  const getButtonComponent = () => {
    switch (variant) {
    case 'secondary':
      return SecondaryButton;
    case 'icon':
      return IconButtonStyled;
    default:
      return PrimaryButton;
    }
  };

  const ButtonComponent = getButtonComponent();

  return (
    <ButtonComponent
      disabled={disabled}
      style={{ width: fullWidth ? '100%' : 'auto' }}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
