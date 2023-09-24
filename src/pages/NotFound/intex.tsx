import * as S from './styles'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <S.NotFoundContainer>
      <h1>Ops! Você parece estar perdido.</h1>
      <p>
        Volte para a página inicial:{' '}
        <Link to="/challange-pacific-sec">Home</Link>
      </p>
    </S.NotFoundContainer>
  )
}
