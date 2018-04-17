import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserForm from './UserForm'

class NewUser extends Component {
  render() {
    return (
      <div>
        <h1>Create a new User</h1>
        <UserForm history={this.props.history} />
      </div>
    )
  }
}

export default NewUser
