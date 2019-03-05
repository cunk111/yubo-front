// TODO - migrate to axios, because
import axios from 'axios'

import {
  // FETCH_USERS,
  RECEIVE_USERS,
} from './actionTypes'

// TODO - conditionnal dev/prod
// TODO - move to config file
const getUrl = () => 'http://localhost:3000'

export function receiveUsers(json) {
  return { type: RECEIVE_USERS, users: json.users }
}

export const getUserList = async (qty, offset) => {
  const url = `${getUrl()}/users/${qty}/${offset}`

  return async (dispatch) => {
    const res = await axios.get(url, {
      method: 'GET',
      accept: 'application/json',
      origin: ['*'],
    })
    const json = await res.json()
    dispatch(receiveUsers(json))
  }
}


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
