import { styled } from 'styled-components'

export const InputContainer = styled.label`
  width: 35rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 6px;
  padding: 1rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['gray-800']};
`

export const InputField = styled.input`
  width: 100%;
  border: none;

  background: transparent;
  color: ${(props) => props.theme['gray-300']};

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
  }

  &::-webkit-calendar-picker-indicator {
    padding: 5px;

    cursor: pointer;
    filter: invert(1);
    border-radius: 3px;
  }
`
