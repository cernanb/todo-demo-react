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
      .then(({ user, token }) => {
        dispatch({ type: 'AUTH_COMPLETE', user })
        localStorage.setItem('token', token)
      })
  }
}

export const login = user => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/login`, {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(({ user, token }) => {
        dispatch({ type: 'AUTH_COMPLETE', user })
        localStorage.setItem('token', token)
      })
  }
}
