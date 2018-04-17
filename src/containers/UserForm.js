import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../redux/actions/userActions'

class UserForm extends Component {
  state = {
    username: '',
    password: '',
  }
  submit = e => {
    e.preventDefault()
    this.props.createUser(this.state).then(() => {
      this.setState({ username: '', password: '' })
      this.props.history.push('/tasks')
    })
  }
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          onChange={this.handleOnChange}
          name="username"
          type="text"
          value={this.state.username}
          placeholder="Username"
        />
        <input
          onChange={this.handleOnChange}
          name="password"
          type="password"
          value={this.state.password}
          placeholder="Password"
        />
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, { createUser })(UserForm)
