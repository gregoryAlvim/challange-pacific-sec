import styled from 'styled-components'

export const LayoutContainer = styled.main`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 6px;
  background: ${(props) => props.theme['gray-600']};
`
