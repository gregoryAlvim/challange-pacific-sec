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
