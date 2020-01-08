import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const linkStyle = 'text-white px-2'
  const hoverStyle = 'hover:underline hover:text-blue-600'

  return (
    <header className="h-10 flex items-center bg-black text-lg">
      <Link className={`${linkStyle} ${hoverStyle}`} to="/">
        Home
      </Link>
      <span className={linkStyle}> | </span>
      <Link className={`${linkStyle} ${hoverStyle}`} to="/blogs">
        Blogs
      </Link>
    </header>
  )
}

export default Header
