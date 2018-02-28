import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import NewTask from './components/NewTask'
import TaskList from './containers/TaskList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Todo</h1>
            <Navbar />
          </header>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route
              exact
              path="/tasks"
              render={props => (
                <TaskList
                  {...props}
                  completeTask={this.completeTask}
                  something="yes"
                />
              )}
            />
            <Route path="/tasks/new" component={NewTask} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
