import initialState from './initialState'
import { userActions } from '../actions/actionTypes'

const normalizeState = (state, action) => {
  console.log({ state })
  console.log({ action })
}

export default function users(state = initialState, action) {
  let newState
  switch (action.type) {
  case userActions.FETCH_USERS:
    console.log('FETCH_USERS Action')
    return action
  case userActions.FETCH_USER:
    console.log('FETCH_USERS Action')
    return action
  case userActions.UPDATE_USER:
    console.log('FETCH_USERS Action')
    return action
  case userActions.RECEIVE_USERS:
    newState = action.users
    console.log('RECEIVE_USERS Action', normalizeState(state, action))
    return newState
  default:
    return state
  }
}
