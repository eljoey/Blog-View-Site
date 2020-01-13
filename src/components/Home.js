import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ blogs }) => {
  const blogLinks = 'hover:underline hover:text-gray-800 pl-3'

  const mostRecent = () => {
    if (blogs[0] === undefined) {
      return <div>No Recent Blogs!</div>
    } else {
      return (
        <>
          <h5>Newest Blog:</h5>
          <div className={blogLinks}>
            <span>- </span>
            <Link to={`/blogs/${blogs[0]._id}`}>{blogs[0].title}</Link>
          </div>
        </>
      )
    }
  }
  return (
    <div>
      <div className="px-5 py-5 text-center text-3xl font-bold">Welcome</div>
      <div className="text-center">
        I will occasionally post some blogs about varying topics which I find
        interesting or helpful
      </div>

      <div className="p-10">{mostRecent()}</div>
    </div>
  )
}

export default Home
