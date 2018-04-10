import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../redux/actions/userActions'

class NewUser extends Component {
  state = {
    username: '',
    password: '',
  }

  submit = e => {
    e.preventDefault()
    this.props.createUser(this.state)
  }

  render() {
    return (
      <div>
        <h1>Create a new User</h1>
        <form onSubmit={this.submit}>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, { createUser })(NewUser)
