import React from 'react'

const Task = ({ name, toggleTask, id, completed }) => {
  return (
    <div>
      <span className={completed ? 'text-strike' : null}>{name}</span>{' '}
      <input onChange={() => toggleTask(id)} type="checkbox" value="Done" />
    </div>
  )
}

export default Task
