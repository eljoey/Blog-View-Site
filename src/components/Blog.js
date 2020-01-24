import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentForm from './CommentForm'
import Comments from './Comments'
import ReactionButton from './ReactionButton'

const Blog = props => {
  const [curBlog, setCurBlog] = useState({})
  const blogId = props.match.params.id

  useEffect(() => {
    const fetchCurBlog = async () => {
      const res = await axios.get(
        `https://jh-blog-api.herokuapp.com/api/blogs/${blogId}`
      )
      setCurBlog(res.data)
    }
    fetchCurBlog()
  }, [blogId])

  const renderComments = () => {
    if (!curBlog.comments || curBlog.comments.length === 0) {
      return <div>No Comments</div>
    } else {
      return <Comments comments={curBlog.comments} />
    }
  }

  const createMarkup = () => {
    return { __html: curBlog.content }
  }

  // styles
  const paddingStyle = 'px-10 py-10'
  const titleStyle = 'text-3xl font-bold text-center'

  return (
    <div className={paddingStyle}>
      <div className={titleStyle}>{curBlog.title}</div>
      <div
        className="mx-auto max-w-6xl py-10"
        dangerouslySetInnerHTML={createMarkup()}
      />
      <div className="text-center">
        <ReactionButton
          action={'likes'}
          blog={curBlog}
          setCurBlog={setCurBlog}
        />
        <ReactionButton
          action={'dislikes'}
          blog={curBlog}
          setCurBlog={setCurBlog}
        />
      </div>
      <div>{renderComments()}</div>
      <CommentForm blogId={curBlog._id} />
    </div>
  )
}

export default Blog
