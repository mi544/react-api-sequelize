import React from 'react'
import { Link } from 'react-router-dom'
import { NavList } from '../styled'

function Nav() {
  return (
    <>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </NavList>
    </>
  )
}

export default Nav
