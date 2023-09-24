import * as S from './styles'
import { ReactNode } from 'react'

interface InputRootProps {
  children: ReactNode
}

export function InputRoot({ children }: InputRootProps) {
  return <S.InputContainer>{children}</S.InputContainer>
}
