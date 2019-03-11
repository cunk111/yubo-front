import axios from 'axios'

import { userActions } from './actionTypes'

// TODO - conditionnal dev/prod
// TODO - move to config file
const BASE_URL = 'http://localhost:3000'

export const receiveUsers = users =>
  ({ type: userActions.RECEIVE_USERS, users })

export const receiveUser = user =>
  ({ type: userActions.RECEIVE_USER, user })

export const getUserList = (qty, page) => dispatch => axios({
  method: 'GET',
  url: `${BASE_URL}/users/${qty}/${page}`,
  accept: 'application/json',
  origin: ['*'],
})
  .then(response => response.data)
  .then(json => dispatch(receiveUsers(json)))


export const getUserById = userId => dispatch => axios({
  url: `${BASE_URL}/user/${userId}`,
  method: 'GET',
  accept: 'application/json',
  origin: ['*'],
})
  .then(response => response.data)
  .then(json => dispatch(receiveUsers(json)))

//
export const getUserByName = userName => dispatch => axios({
  method: 'GET',
  url: `${BASE_URL}/user/${userName}`,
  accept: 'application/json',
  origin: ['*'],
})
  .then(response => response.data)
  .then(json => dispatch(receiveUsers(json)))

//
export const putUserUpdate = updatedUser => dispatch => axios({
  url: `${BASE_URL}/updateUser`,
  method: 'PUT',
  accept: 'application/json',
  origin: ['*'],
  body: JSON.stringify(updatedUser),
})
  .then(response => response.data)
  .then(json => dispatch(receiveUsers(json)))
