import React from 'react'

const CommentForm = ({ blogId }) => {
  // Styles
  const containerStyle = 'bg-gray-300 shadow-md rounded mt-5 p-2 max-w-lg'
  const nameStyle = 'px-1 placeholder-gray-900 shadow-md rounded'
  const textStyle = 'h-full w-full'
  const buttonStyle =
    'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'

  const addComment = async e => {
    e.preventDefault()
    console.log(e.target.blogId.value)
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
          />
        </div>
        <div>
          <label className="hidden" htmlFor="comment">
            Comment
          </label>
          <textarea className={textStyle} name="comment"></textarea>
        </div>
        <div className="hidden">
          <input name="blogId" type="text" defaultValue={blogId} />
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
