import * as S from './styles'
import { NoData } from './components/NoData'
import { Details } from './components/Details'
import { useUserContext } from '../../hooks/useUserContext'

export function UserDetails() {
  const { user } = useUserContext()

  return (
    <S.UserDetailsContainer>
      {user ? <Details data={user} /> : <NoData />}
    </S.UserDetailsContainer>
  )
}
