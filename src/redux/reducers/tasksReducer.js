const DEFAULT_STATE = []

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task]
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.todo.id ? action.todo : todo))
    case 'FETCH_TASKS_SUCCESS':
      return action.tasks
    case 'DELETE_TASK_SUCCESS':
      return state.filter(task => task.id !== action.id)
    case 'CREATE_TASK_SUCCESS':
      return state.map(task => (task.id === action.id ? Object.assign({}, task, { postPending: false }) : task))
    default:
      return state
  }
}
