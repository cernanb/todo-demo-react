const DEFAULT_STATE = [
  { id: 1, name: 'Finish React Video', completed: false },
  { id: 2, name: 'Charge Macbook Pro', completed: true },
  { id: 3, name: 'Review Rails Curriculum', completed: true },
]

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = Object.assign({}, action.payload, {
        id: state.length + 1,
      })
      return state.concat(newTask)
    default: {
      return state
    }
  }
}
