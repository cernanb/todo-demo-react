import React, { Component } from 'react'

class NewTask extends Component {
  state = {
    newTodo: '',
  }

  addTodo(e) {
    e.preventDefault()
    const task = {
      name: this.state.newTodo,
    }
    fetch(`http://localhost:3001/api/v1/tasks`, {
      method: 'POST',
      body: JSON.stringify({ task }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(task =>
        this.setState(
          {
            newTodo: '',
          },
          () => this.props.history.push('/tasks')
        )
      )
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
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleOnChange.bind(this)}
        />
        <button>Add todo</button>
      </form>
    )
  }
}

export default NewTask
