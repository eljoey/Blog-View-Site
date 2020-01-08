import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Blog = props => {
  const [curBlog, setCurBlog] = useState({})
  const blogId = props.match.params.id

  useEffect(() => {
    const fetchCurBlog = async () => {
      const res = await axios.get(`http://localhost:3000/api/blogs/${blogId}`)
      setCurBlog(res.data)
    }
    fetchCurBlog()
  }, [blogId])

  const renderComments = () => {
    if (!curBlog.comments || curBlog.comments.length === 0) {
      return <div>No Comments</div>
    } else {
      return (
        <>
          <h4>Comments</h4>
          <div>
            {curBlog.comments.map(comment => {
              return <div key={comment._id}>{comment.text}</div>
            })}
          </div>
        </>
      )
    }
  }

  // styles
  const paddingStyle = 'px-10 py-10'
  const titleStyle = 'text-3xl font-bold text-center'

  return (
    <div className={paddingStyle}>
      <div className={titleStyle}>{curBlog.title}</div>
      <div>{curBlog.content}</div>
      <div>
        <span>{curBlog.likes} likes </span>
        <span>{curBlog.dislikes} dislikes </span>
      </div>
      <div>{renderComments()}</div>
    </div>
  )
}

export default Blog
