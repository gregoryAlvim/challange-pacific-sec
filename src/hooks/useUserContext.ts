import { useContext } from 'react'
import { UserContext } from '../contexts/user/UserContext'

export function useUserContext() {
  const context = useContext(UserContext)

  return context
}
