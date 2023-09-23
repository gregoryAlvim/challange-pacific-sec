import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function DefaultButton({ title, ...rest }: DefaultButtonProps) {
  return (
    <>
      <S.Button {...rest}>{title}</S.Button>
    </>
  )
}
