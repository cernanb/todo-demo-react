import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/" style={{ color: 'white', margin: 10 }}>
          Home
        </Link>
        <Link to="/tasks" style={{ color: 'white', margin: 10 }}>
          Task List
        </Link>
        <Link to="/tasks/new" style={{ color: 'white', margin: 10 }}>
          New Task
        </Link>
      </li>
    </ul>
  )
}

export default Navbar
