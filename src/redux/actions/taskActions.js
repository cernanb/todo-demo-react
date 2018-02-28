export const addTask = taskObj => {
  return {
    type: 'ADD_TASK',
    payload: taskObj,
  }
}
