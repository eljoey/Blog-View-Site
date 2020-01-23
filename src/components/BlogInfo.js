import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const BlogInfo = ({ blogs }) => {
  const padding = 'px-10 py-10'
  const recentBlogTitle = 'text-xl font-bold underline'
  const blogLinks = 'hover:underline hover:text-gray-800'

  return (
    <div className={padding}>
      <div className={recentBlogTitle}>Recent Blogs</div>
      {blogs.map(blog => (
        <div key={blog._id}>
          <span>- </span>
          <Link className={blogLinks} to={`/blogs/${blog._id}`}>
            {blog.title} - {moment(blog.timestamp).format('lll')}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogInfo
