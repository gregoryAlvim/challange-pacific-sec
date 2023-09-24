import { createContext } from 'react'
import { UserType } from '../../@types/mockes'

interface UserContextType {
  user: UserType | null
  createNewUser: (data: UserType) => void
  deleteUserData: (data: null) => void
}

export const UserContext = createContext({} as UserContextType)
