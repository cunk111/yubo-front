import initialState from './initialState'
import { userActions } from '../actions/actionTypes'

// TODO - if ever, consider using https://github.com/paularmstrong/normalizr
// const normalizeState = (state, action) => {
//   console.log({ state })
//   console.log({ action })
// }


export default function users(state = initialState.users, action) {
  let newState
  switch (action.type) {
  case userActions.FETCH_USERS:
    console.log('FETCH_USERS Action')
    return action
  case userActions.RECEIVE_USER:
    console.log('RECEIVE_USER Action')
    return action
  case userActions.UPDATE_USER:
    console.log('FETCH_USERS Action')
    return action
  case userActions.RECEIVE_USERS:
    newState = action.users
    console.log('RECEIVE_USERS Action')
    return newState
  default:
    return state
  }
}
