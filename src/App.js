import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: '',
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/tasks`)
      .then(res => res.json())
      .then(todos => this.setState({ todos }))
  }

  handleOnChange(e) {
    this.setState({
      newTodo: e.target.value,
    })
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
        this.setState({
          todos: this.state.todos.concat(task),
          newTodo: '',
        })
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Todo</h1>
        </header>
        <h1>My List</h1>
        <ul>
          {this.state.todos.map(todo => <li key={todo.id}>{todo.name}</li>)}
        </ul>
        <form onSubmit={this.addTodo.bind(this)}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleOnChange.bind(this)}
          />
          <button>Add todo</button>
        </form>
      </div>
    )
  }
}

export default App
