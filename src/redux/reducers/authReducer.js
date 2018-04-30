const INITIAL_STATE = {
  isAuthenticated: false,
  currentUser: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTH_COMPLETE':
      return { ...state, currentUser: action.user, isAuthenticated: true }
    default:
      return state
  }
}
