import * as S from './styles'
import { Form } from './components/Form'
import { FormAnswered } from './components/FormAnswered'
import { useUserContext } from '../../hooks/useUserContext'

export function UserForm() {
  const { user } = useUserContext()

  return (
    <S.UserFormContainer>
      {user ? <FormAnswered /> : <Form />}
    </S.UserFormContainer>
  )
}
