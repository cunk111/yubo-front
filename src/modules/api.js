import fetch from 'isomorphic-fetch'

const api = {
  async getUserList(qty, offset) {
    const req = await fetch(`http://localhost:3000/users/${qty}/${offset}`, {
      method: 'GET',
      accept: 'application/json',
      origin: ['*'],
    })

    const data = await req.json()
    return data
  },

  async getUserById(userId) {
    const req = await fetch(`http://localhost:3000/user/${userId}`, {
      method: 'GET',
      accept: 'application/json',
      origin: ['*'],
    })

    const data = await req.json()
    return data
  },

  async getUserByName(userId) {
    const req = await fetch(`http://localhost:3000/user/${userId}`, {
      method: 'GET',
      accept: 'application/json',
      origin: ['*'],
    })

    const data = await req.json()
    return data
  },

  async putUserUpdate(updatedUser) {
    const req = await fetch(`http://localhost:3000/updateUser`, {
      method: 'PUT',
      accept: 'application/json',
      origin: ['*'],
      body: JSON.stringify(updatedUser),
    })

    const data = await req.json()
    return data
  },
}

export default api
