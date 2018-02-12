import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const todos = [{ name: 'Clean Room', id: 1 }, { name: 'Call Mom', id: 2 }]

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  componentDidMount() {
    this.setState({
      todos: todos
    })
  }

  handleOnChange(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  addTodo(e) {
    e.preventDefault()
    const newTodo = {
      name: this.state.newTodo,
      id: this.state.todos.length + 1
    }
    this.setState({ todos: this.state.todos.concat(newTodo), newTodo: '' })
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
