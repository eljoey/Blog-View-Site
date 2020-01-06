import React from 'react'

const Header = () => {
  const headerStyle = {
    height: '6vh',
    backgroundColor: 'black',
    width: '100%',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  }

  return <header style={headerStyle}> JH Blog</header>
}

export default Header
