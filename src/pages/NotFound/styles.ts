import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  width: 50rem;
  height: 20rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['purple-300']};

    &:hover {
      transition: color 0.2s;
      color: ${(props) => props.theme['purple-500']};
    }
  }
`
