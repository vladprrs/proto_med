import React from 'react';
import styled from 'styled-components';
import { flexCenter, inputBase, typography } from '../../styles/mixins';
import { theme } from '../../styles/theme';
import IconButton from './IconButton';

const SearchContainer = styled.div`
  display: flex;
  height: ${props => props.height || '40px'};
  padding: ${props => (props.large ? '13px 12px 15px 16px' : '10px 8px')};
  align-items: center;
  gap: ${props => (props.large ? '8px' : '6px')};
  flex: 1;
  border-radius: ${props => (props.large ? theme.borderRadius.large : theme.borderRadius.medium)};
  background: ${props => props.background || theme.colors.surface01};
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
`;

const SearchIconContainer = styled.div`
  ${flexCenter}
  flex-shrink: 0;
`;

const SearchInput = styled.input`
  ${inputBase}
  flex: 1;
  ${props => (props.large ? typography.body : typography.subhead)}

  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

const SearchText = styled.div`
  flex: 1;
  color: ${theme.colors.textSecondary};
  ${props => (props.large ? typography.body : typography.subhead)}
`;

const SearchField = ({
  placeholder = 'Поиск...',
  value,
  onChange,
  onClick,
  large = false,
  background,
  height,
  readOnly = false,
}) => {
  const handleContainerClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <SearchContainer
      onClick={handleContainerClick}
      large={large}
      background={background}
      height={height}
    >
      <SearchIconContainer>
        <IconButton icon="search" />
      </SearchIconContainer>

      {readOnly ? (
        <SearchText large={large}>{placeholder}</SearchText>
      ) : (
        <SearchInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          large={large}
        />
      )}
    </SearchContainer>
  );
};

export default SearchField;
