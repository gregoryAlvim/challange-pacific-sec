import styled from 'styled-components'

export const LayoutContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 6px;
  background: ${(props) => props.theme['gray-600']};
`
