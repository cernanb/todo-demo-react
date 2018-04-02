import React from 'react'

const Task = ({ name, toggleTask, id, completed, deleteTask, postPending }) => {
  return (
    <div>
      <span style={{ color: postPending ? 'blue' : 'black' }} className={completed ? 'text-strike' : null}>
        {name}
      </span>{' '}
      <button onClick={() => deleteTask(id)}>x</button>
      <input onChange={() => toggleTask(id)} type="checkbox" value="Done" />
    </div>
  )
}

export default Task
