import styled from 'styled-components'

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
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
`

export const UserNameWithAge = styled.div`
  display: flex;
  gap: 1rem;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;

  .noHaveLink {
    color: ${(props) => props.theme['gray-700']};
    cursor: not-allowed;
  }
`

interface LinkIconProps {
  variant: 'linkedin' | 'github'
}

export const LinkIcon = styled.a<LinkIconProps>`
  cursor: pointer;
  background: transparent;
  color: ${(props) =>
    props.variant === 'linkedin'
      ? props.theme['blue-100']
      : props.theme['gray-300']};

  text-decoration: none;
  &:hover {
    transition: color 0.4s;
    color: ${(props) => props.theme['gray-900']};
  }
`

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme['red-500']};

  &:hover {
    transition: all 0.3s;
    color: ${(props) => props.theme['red-700']};
  }
`
