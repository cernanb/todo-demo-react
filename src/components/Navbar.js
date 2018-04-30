import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ openTasks }) => {
  return (
    <ul>
      <li>
        <Link to="/" style={{ color: 'white', margin: 10 }}>
          Home
        </Link>
        <Link to="/tasks" style={{ color: 'white', margin: 10 }}>
          Task List - {openTasks}
        </Link>
        <Link to="/signup" style={{ color: 'white', margin: 10 }}>
          Signup
        </Link>
        <Link to="/login" style={{ color: 'white', margin: 10 }}>
          Login
        </Link>

        <Link to="/tasks/new" style={{ color: 'white', margin: 10 }}>
          New Task
        </Link>
      </li>
    </ul>
  )
}

export default connect(state => ({
  openTasks: state.tasks.filter(x => !x.completed).length,
}))(Navbar)
