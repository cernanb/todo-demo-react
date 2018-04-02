import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, deleteTask } from '../redux/actions/taskActions'

import Task from '../components/Task'

class TaskList extends Component {
  state = {
    tasks: [],
  }

  toggleTask = id => {
    const task = this.props.tasks.find(t => t.id === id)
    this.props.toggleTodo(task)
  }

  deleteTask = id => {
    this.props.deleteTask(id)
  }

  renderOpenTasks() {
    return this.props.tasks
      .filter(task => !task.completed)
      .map(task => (
        <Task
          postPending={task.postPending}
          id={task.id}
          deleteTask={this.deleteTask}
          toggleTask={this.toggleTask}
          key={task.id}
          {...task}
        />
      ))
  }

  renderCompletedTasks() {
    return this.props.tasks
      .filter(task => task.completed)
      .map(task => (
        <Task id={task.id} deleteTask={this.deleteTask} toggleTask={this.toggleTask} key={task.id} {...task} />
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

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo(task) {
      dispatch(toggleTodo(task))
    },
    deleteTask(id) {
      dispatch(deleteTask(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
