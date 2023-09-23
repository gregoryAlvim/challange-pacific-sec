import { ReactNode } from 'react'
import { UserContext } from './UserContext'

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}
