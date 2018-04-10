const uuidv1 = require('uuid/v1')

export const createTask = (task, history) => {
  return dispatch => {
    const uuid = uuidv1()
    const newTask = Object.assign({}, task, { uuid, postPending: true })
    dispatch(addTask(newTask))
    history.push('/tasks')

    return fetch(`http://localhost:3001/api/v1/tasks`, {
      method: 'POST',
      body: JSON.stringify({ task }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(task => {
        dispatch(createTaskSuccess(uuid, task.id))
      })
      .catch(err => dispatch(removeTask(uuid)))
  }
}

const addTask = task => {
  return { type: 'ADD_TASK', task }
}

const createTaskSuccess = (uuid, id) => {
  return {
    type: 'CREATE_TASK_SUCCESS',
    uuid,
    id,
  }
}

const removeTask = id => {
  return {
    type: 'DELETE_TASK_SUCCESS',
    id,
  }
}

export const toggleTodo = todo => {
  const updatedTask = { ...todo, completed: !todo.completed }
  return {
    type: 'TOGGLE_TODO',
    todo: updatedTask,
  }
}

export const getTasks = () => {
  return async dispatch => {
    const tasks = await fetch(`http://localhost:3001/api/v1/tasks`).then(res => res.json())
    dispatch({ type: 'FETCH_TASKS_SUCCESS', tasks })
  }
}

export const deleteTask = id => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(taskId => {
        dispatch(removeTask(taskId))
      })
  }
}
