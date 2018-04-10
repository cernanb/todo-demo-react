export const createUser = user => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/users`, {
      method: 'POST',
      body: JSON.stringify({ user }),
    }).then(token => {
      console.log(token)
    })
  }
}
