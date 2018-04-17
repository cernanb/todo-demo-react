export const createUser = user => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/users`, {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        localStorage.setItem('token', data.token)
      })
  }
}
