import * as S from './styles'
import { Link } from 'react-router-dom'

export function FormAnswered() {
  return (
    <S.FormResponseMessage>
      <h1>O formulário já foi respondido!</h1>
      <Link to="/challange-pacific-sec/user-details">
        Veja sua resposta aqui
      </Link>
    </S.FormResponseMessage>
  )
}
