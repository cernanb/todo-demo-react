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

  toggleTask = id => {
    const task = this.props.tasks.find(t => t.id === id)
    const updatedTask = Object.assign({}, task, { completed: !task.completed })
    fetch(`http://localhost:3001/api/v1/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ task: updatedTask }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(updatedTask =>
        this.setState({
          tasks: this.state.tasks.map(
            t => (t.id === updatedTask.id ? updatedTask : t)
          ),
        })
      )
  }

  renderOpenTasks() {
    return this.state.tasks
      .filter(task => !task.completed)
      .map(task => (
        <Task toggleTask={this.toggleTask} key={task.id} {...task} />
      ))
  }

  renderCompletedTasks() {
    return this.state.tasks
      .filter(task => task.completed)
      .map(task => (
        <Task toggleTask={this.toggleTask} key={task.id} {...task} />
      ))
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
