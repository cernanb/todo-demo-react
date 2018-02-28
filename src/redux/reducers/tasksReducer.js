const DEFAULT_STATE = [
  { id: 1, name: 'Finish React Video', completed: false },
  { id: 2, name: 'Charge Macbook Pro', completed: true },
  { id: 3, name: 'Review Rails Curriculum', completed: true },
]

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}
