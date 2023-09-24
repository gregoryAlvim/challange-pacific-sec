import * as S from './styles'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', ...props }, ref) => (
    <>
      <S.InputField type={type} name={name} ref={ref} {...props} />
    </>
  ),
)
