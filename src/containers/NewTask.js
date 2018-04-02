import React, { Component } from 'react'
import { createTask } from '../redux/actions/taskActions'
import { connect } from 'react-redux'

class NewTask extends Component {
  state = {
    newTodo: '',
  }

  addTodo(e) {
    e.preventDefault()
    const task = {
      name: this.state.newTodo,
      completed: false,
    }
    this.props.createTask(task, this.props.history)
  }

  handleOnChange(e) {
    this.setState({
      newTodo: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.addTodo.bind(this)}>
        <h2>Add a new task below</h2>
        <input type="text" value={this.state.newTodo} onChange={this.handleOnChange.bind(this)} />
        <button>Add todo</button>
      </form>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createTask(task, history) {
      dispatch(createTask(task, history))
    },
  }
}

export default connect(null, mapDispatchToProps)(NewTask)
