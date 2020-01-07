import React from 'react'
import { Link } from 'react-router-dom'

const BlogInfo = ({ blogs }) => {
  return (
    <div>
      {blogs.map(blog => (
        <div key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default BlogInfo
