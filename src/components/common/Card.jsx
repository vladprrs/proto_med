import React from 'react';
import styled from 'styled-components';
import { card, cardHover } from '../../styles/mixins';
import { theme } from '../../styles/theme';

const CardContainer = styled.div`
  ${props => (props.hoverable ? cardHover : card)}
  padding: ${props => props.padding || theme.spacing.lg};
  ${props => props.fullWidth && 'align-self: stretch;'}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.customStyles}
`;

const Card = ({
  children,
  onClick,
  hoverable = false,
  padding,
  fullWidth = false,
  height,
  customStyles,
  ...props
}) => {
  return (
    <CardContainer
      customStyles={customStyles}
      fullWidth={fullWidth}
      height={height}
      hoverable={hoverable || !!onClick}
      padding={padding}
      onClick={onClick}
      {...props}
    >
      {children}
    </CardContainer>
  );
};

export default Card;
