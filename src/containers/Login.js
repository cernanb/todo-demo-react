import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserForm from './UserForm'

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <UserForm history={this.props.history} type="login" />
      </div>
    )
  }
}

export default Login
