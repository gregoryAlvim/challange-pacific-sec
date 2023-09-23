import * as S from './styles'
import { useTheme } from 'styled-components'
import { Asterisk } from '@phosphor-icons/react'

interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  const theme = useTheme()

  return (
    <S.ErrorContainer title={message}>
      <Asterisk size={18} color={theme['red-300']} />
    </S.ErrorContainer>
  )
}
