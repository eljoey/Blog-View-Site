import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const headerStyle = {
    height: '6vh',
    backgroundColor: 'black',
    width: '100%',
    color: 'white',
    display: 'flex',
    justifyContent: 'left',
    alignContent: 'center'
  }

  const linkStyle = {
    paddingRight: 5,
    color: 'white'
  }

  return (
    <header style={headerStyle}>
      <Link style={linkStyle} to="/">
        JH Blog
      </Link>
      <span style={linkStyle}> | </span>
      <Link style={linkStyle} to="/blogs">
        Blogs
      </Link>
    </header>
  )
}

export default Header
