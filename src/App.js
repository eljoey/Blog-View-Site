import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('http://localhost:3000/api/blogs')
      setBlogs(res.data.blogs)
    }

    fetchBlogs()
  }, [])

  return (
    <div>
      {blogs.map(blog => (
        <p>{blog.title}</p>
      ))}
    </div>
  )
}

export default App
