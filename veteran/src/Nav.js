import React from 'react'
import { Link } from 'react-router-dom'
import { Feed } from './App'
import {SigninPage} from './App'


export const Nav = () => {
  return (
    <div>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
        SigninPage
      <Link to="/">Feed</Link> |{" "}
      <Link to="/signIn">Sign In Page</Link>
    </nav>
  </div>

  )
}
