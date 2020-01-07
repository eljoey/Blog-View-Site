import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

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
      <span> | </span>
      <Link style={linkStyle} to="/blogs">
        Blogs
      </Link>

      <Switch>
        <Route>{}</Route>
      </Switch>
    </header>
  )
}

export default Header
