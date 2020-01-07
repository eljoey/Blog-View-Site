import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Blog = props => {
  const [curBlog, setCurBlog] = useState([])
  const blogId = props.match.params.id

  useEffect(() => {
    const fetchCurBlog = async () => {
      const res = await axios.get(`http://localhost:3000/api/blogs/${blogId}`)
      setCurBlog(res.data)
    }

    fetchCurBlog()
  }, [blogId])
  return <div>{curBlog.title}</div>
}

export default Blog
