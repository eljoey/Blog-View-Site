import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ReactionButton = ({ action, blog, setCurBlog }) => {
  const [pressed, setPressed] = useState(
    localStorage.getItem(`${blog._id}.${action}Clicked`)
  )
  const [style, setStyle] = useState({
    color: 'black'
  })

  // Sets the correct icon for the action
  const icon = action === 'likes' ? 'fas fa-heart' : 'fas fa-heart-broken'
  let reactionAmmount = action === 'likes' ? blog.likes : blog.dislikes

  // Sets color of reaction if pressed is true
  // const handleStyle = () => {
  //   if (pressed === 'false') {
  //     return {
  //       color: 'black'
  //     }
  //   } else if (action === 'likes') {
  //     return {
  //       color: 'darkblue'
  //     }
  //   } else if (action === 'dislikes') {
  //     return {
  //       color: 'darkred'
  //     }
  //   }
  // }

  useEffect(() => {
    if (pressed === 'false' || pressed === null) {
      setStyle({
        color: 'black'
      })
    } else if (action === 'likes') {
      setStyle({
        color: 'darkblue'
      })
    } else if (action === 'dislikes') {
      setStyle({
        color: 'darkred'
      })
    }
  }, [pressed, action])

  const updateReaction = async (blogInfo, reaction, isPressed) => {
    const updatedBlog = {
      ...blogInfo
    }

    // Updates localstorage when toggling like/dislike button
    const setStorage = (object, boolean) => {
      localStorage.setItem(`${blog._id}.${action}Clicked`, boolean)
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

  const handleClick = e => {
    e.preventDefault()
    updateReaction(blog, action, pressed)
  }

  return (
    <>
      <button style={style} className={'mr-3 ' + icon} onClick={handleClick}>
        {reactionAmmount}
      </button>
    </>
  )
}

export default ReactionButton
