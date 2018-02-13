import React, { Component } from 'react'

import Task from '../components/Task'

class TaskList extends Component {
  state = {
    tasks: [],
  }
  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/tasks`)
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }))
  }

  renderOpenTasks() {
    return this.state.tasks
      .filter(task => !task.completed)
      .map(task => <Task key={task.id} {...task} />)
  }

  renderCompletedTasks() {
    return this.state.tasks
      .filter(task => task.completed)
      .map(task => <Task key={task.id} {...task} />)
  }

  render() {
    return (
      <div>
        <h1>Open Tasks</h1>
        <ul>{this.renderOpenTasks()}</ul>
        <h1>Completed Tasks</h1>
        <ul>{this.renderCompletedTasks()}</ul>
      </div>
    )
  }
}

export default TaskList
