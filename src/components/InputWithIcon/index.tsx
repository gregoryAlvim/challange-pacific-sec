import * as S from './styles'
import { ElementType } from 'react'

interface InputWithIconProps {
  icon: ElementType
  children: React.ReactNode
}

export function InputWithIcon({ icon: Icon, children }: InputWithIconProps) {
  return (
    <S.InputContainer>
      <Icon size={24} />
      {children}
    </S.InputContainer>
  )
}
