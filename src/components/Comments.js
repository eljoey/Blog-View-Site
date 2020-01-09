import React from 'react'
import moment from 'moment'

const Comments = ({ comments }) => {
  return (
    <>
      <h4 className="underline mt-5">Comments</h4>
      <div>
        {comments.map(comment => {
          //Date Formatting
          const date = moment(comment.timestamp).fromNow()

          return (
            <div
              className="pt-2 border-dotted border-b border-black"
              key={comment._id}
            >
              <div>{comment.text}</div>
              <div className="text-xs">
                {comment.name} - {date}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Comments
