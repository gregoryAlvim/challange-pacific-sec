import { UserType } from '../../@types/mockes'

export enum ActionTypesToUser {
  FETCH_USER = 'FETCH_USER',
  ADD_NEW_USER = 'ADD_NEW_USER',
  DELETE_USER = 'DELETE_USER',
}

export function fetchUserDataAction(user: UserType) {
  return {
    type: ActionTypesToUser.FETCH_USER,
    payload: {
      user,
    },
  }
}

export function addNewUserAction(newUser: UserType) {
  return {
    type: ActionTypesToUser.ADD_NEW_USER,
    payload: {
      newUser,
    },
  }
}

export function deleteUserDataAction(deleteUser: null) {
  return {
    type: ActionTypesToUser.DELETE_USER,
    payload: {
      deleteUser,
    },
  }
}
