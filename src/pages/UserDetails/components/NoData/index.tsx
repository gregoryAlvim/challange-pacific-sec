import * as S from './styles'
import { Link } from 'react-router-dom'

export function NoData() {
  return (
    <S.NoDataMessage>
      <h1>O formulário ainda não foi respondido!</h1>
      <Link to="/">Acesse o formulário clicando aqui</Link>
    </S.NoDataMessage>
  )
}
