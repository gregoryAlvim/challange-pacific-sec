import styled from 'styled-components'

export const UserForm = styled.form`
  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  h1 {
    padding: 1rem;
    margin: 2rem 0 2rem;

    font-size: 2.8rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    border-bottom: 3px solid ${(props) => props.theme['gray-300']};
  }

  button {
    width: 35rem;
    height: 5rem;
    font-weight: bold;

    padding: 0 1rem;
    border-radius: 6px;
    margin: 1rem 0 2rem;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['green-500']};

    &:hover {
      background: ${(props) => props.theme['green-700']};
      transition: background-color 0.2s;
    }
  }

  .PhoneInputMask {
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
  }
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
