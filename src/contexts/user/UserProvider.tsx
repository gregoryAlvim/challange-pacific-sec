import { UserContext } from './UserContext'
import { ReactNode, useEffect, useReducer } from 'react'
import { userReducer } from '../../reducers/user/reducer'
import { UserType } from '../../@types/mockes'
import secureLocalStorage from 'react-secure-storage'
import {
  addNewUserAction,
  deleteUserDataAction,
  fetchUserDataAction,
} from '../../reducers/user/actions'

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const [userState, dispatch] = useReducer(userReducer, {
    user: null,
  })

  const { user } = userState

  function fetchUserData() {
    const user = secureLocalStorage.getItem('@advancedForm:user')
    const parsedUser = JSON.parse(`${user}`)

    if (parsedUser) {
      dispatch(fetchUserDataAction(parsedUser))
    }
  }

  function createNewUser(data: UserType) {
    secureLocalStorage.setItem('@advancedForm:user', JSON.stringify(data))
    dispatch(addNewUserAction(data))
  }

  function deleteUserData(data: null) {
    secureLocalStorage.removeItem('@advancedForm:user')
    dispatch(deleteUserDataAction(data))
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <UserContext.Provider value={{ user, createNewUser, deleteUserData }}>
      {children}
    </UserContext.Provider>
  )
}
