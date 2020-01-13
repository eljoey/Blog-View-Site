import React from 'react'
import axios from 'axios'
import useLocalStorage from 'react-use-localstorage'

const ReactionButton = ({ action, blog, setCurBlog }) => {
  const [pressed, setPressed] = useLocalStorage(`${blog._id}-${action}Clicked`)

  // Sets the correct icon for the action
  const icon = action === 'likes' ? 'fas fa-heart' : 'fas fa-heart-broken'
  let reactionAmmount = action === 'likes' ? blog.likes : blog.dislikes

  // Handling of Color for reaction based on if its pressed
  let reactionStyle = {}

  if (pressed === 'false' || pressed === '') {
    reactionStyle = {
      color: 'black'
    }
  } else if (action === 'likes') {
    reactionStyle = {
      color: 'darkblue'
    }
  } else if (action === 'dislikes') {
    reactionStyle = {
      color: 'darkred'
    }
  }

  // (action === 'likes' && pressed === 'true') ? reactionStyle = likesPressed : reactionStyle = unpressedStyle

  const updateReaction = async (blogInfo, reaction, isPressed, e) => {
    e.preventDefault()

    const updatedBlog = {
      ...blogInfo
    }

    // Updates localstorage when toggling like/dislike button
    const setStorage = (object, boolean) => {
      localStorage.setItem(`${blog._id}-${action}Clicked`, boolean)
      setPressed(boolean)
      setCurBlog(object)
    }

    if (isPressed === 'true') {
      updatedBlog[reaction] -= 1
      setStorage(updatedBlog, 'false')
    } else {
      updatedBlog[reaction] += 1
      setStorage(updatedBlog, 'true')
    }

    await axios.put(
      `http://localhost:3000/api/blogs/reaction/update/${blog._id}`,
      updatedBlog
    )
  }

  return (
    <>
      <button
        style={reactionStyle}
        className={'mr-3 ' + icon}
        onClick={e => updateReaction(blog, action, pressed, e)}
      >
        {reactionAmmount}
      </button>
    </>
  )
}

export default ReactionButton
