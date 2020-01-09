import React from 'react'
import axios from 'axios'
import { createBrowserHistory } from 'history'

const CommentForm = ({ blogId, setCurBlog, curBlog }) => {
  const history = createBrowserHistory()

  // Styles
  const containerStyle = 'bg-gray-300 shadow-md rounded mt-5 p-2 max-w-lg'
  const nameStyle = 'px-1 placeholder-gray-900 shadow-md rounded'
  const textStyle = 'h-full w-full placeholder-gray-900'
  const buttonStyle =
    'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'

  const addComment = async e => {
    e.preventDefault()
    const newComment = {
      blogId: blogId,
      name: e.target.name.value,
      text: e.target.comment.value
    }
    await axios.post(
      'http://localhost:3000/api/blogs/comment/create',
      newComment
    )
    // Reload page
    history.go(0)
  }

  return (
    <div className={containerStyle}>
      <div className="underline ">Add Comment</div>
      <form onSubmit={addComment}>
        <div className="mb-1">
          <label className="hidden" htmlFor="name">
            Name:
          </label>
          <input
            className={nameStyle}
            name="name"
            placeholder="Name"
            type="text"
            required
          />
        </div>
        <div>
          <label className="hidden" htmlFor="comment">
            Comment
          </label>
          <textarea
            className={textStyle}
            name="comment"
            placeholder="Type your comment here..."
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button className={buttonStyle} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CommentForm
