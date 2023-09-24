import { UserType } from '../../@types/mockes'
import { ActionTypesToUser } from './actions'

interface UserState {
  user: UserType | null
}

export function userReducer(state: UserState, action: any) {
  switch (action.type) {
    case ActionTypesToUser.FETCH_USER:
      return {
        ...state,
        user: action.payload.user,
      }
    case ActionTypesToUser.ADD_NEW_USER:
      return {
        ...state,
        user: action.payload.newUser,
      }
    case ActionTypesToUser.DELETE_USER:
      return {
        ...state,
        user: action.payload.deleteUser,
      }
    default:
      return state
  }
}
