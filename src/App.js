import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import NewTask from './containers/NewTask'
import NewUser from './containers/NewUser'
import TaskList from './containers/TaskList'
import { getTasks } from './redux/actions/taskActions'
import Login from './containers/Login'

class App extends Component {
  componentDidMount() {
    this.props.getTasks()
  }
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
              render={props => <TaskList {...props} completeTask={this.completeTask} something="yes" />}
            />
            <Route path="/tasks/new" component={NewTask} />
            <Route path="/signup" component={NewUser} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(null, { getTasks })(App)
