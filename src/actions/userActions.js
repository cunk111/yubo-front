import axios from 'axios'

import { userActions } from './actionTypes'

// TODO - conditionnal dev/prod
// TODO - move to config file
const BASE_URL = 'http://localhost:3000'

export const receiveUsers = users =>
  ({ type: userActions.RECEIVE_USERS, users })

// export const getUserList = async (qty, page) =>
//   async (dispatch) => {
//     const res = await axios({
//       method: 'GET',
//       url: `${BASE_URL}/users/${qty}/${page}`,
//       accept: 'application/json',
//       origin: ['*'],
//     })
//     console.log(res);
//     const json = await res.json
//     console.log(json)
//     dispatch(receiveUsers(json))
//   }

// export const getUserList = (qty, page) =>
//   dispatch => fetch({
//     method: 'GET',
//     url: `${BASE_URL}/users/${qty}/${page}`,
//     accept: 'application/json',
//     origin: ['*'],
//   })
//     .then((response) => {
//       console.log({ response })
//       return response.json()
//     })
//     .then((json) => {
//       console.log({ json })
//       return dispatch(receiveUsers(json))
//     })

export const getUserList = (qty, page) => dispatch => axios({
  method: 'GET',
  url: `${BASE_URL}/users/${qty}/${page}`,
  accept: 'application/json',
  origin: ['*'],
})
  .then(response => response.data)
  .then(json => dispatch(receiveUsers(json)))

// const api = {
//   async getUserList(qty, offset) {
//     const req = await fetch(`http://localhost:3000/users/${qty}/${offset}`, {
//       method: 'GET',
//       accept: 'application/json',
//       origin: ['*'],
//     })
//
//     const data = await req.json()
//     return data
//   },
//
//   async getUserById(userId) {
//     const req = await fetch(`http://localhost:3000/user/${userId}`, {
//       method: 'GET',
//       accept: 'application/json',
//       origin: ['*'],
//     })
//
//     const data = await req.json()
//     return data
//   },
//
//   async getUserByName(userId) {
//     const req = await fetch(`http://localhost:3000/user/${userId}`, {
//       method: 'GET',
//       accept: 'application/json',
//       origin: ['*'],
//     })
//
//     const data = await req.json()
//     return data
//   },
//
//   async putUserUpdate(updatedUser) {
//     const req = await fetch(`http://localhost:3000/updateUser`, {
//       method: 'PUT',
//       accept: 'application/json',
//       origin: ['*'],
//       body: JSON.stringify(updatedUser),
//     })
//
//     const data = await req.json()
//     return data
//   },
// }
//
// export default api
