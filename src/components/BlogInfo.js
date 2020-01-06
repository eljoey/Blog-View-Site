import React from 'react'

const BlogInfo = ({ blog }) => {
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <div>
        <div>{blog.comments.length} Comments</div>
        <div>{blog.likes} likes</div>
        <div>{blog.dislikes} dislikes</div>
      </div>
    </div>
  )
}

export default BlogInfo
