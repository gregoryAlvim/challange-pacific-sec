import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 1.8rem;

  padding: 1rem 0;

  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
`

export const Label = styled.label`
  font-weight: bold;

  color: ${(props) => props.theme['white-300']};
`

export const Description = styled.span`
  font-size: 1.6rem;
  color: ${(props) => props.theme['gray-400']};
`
