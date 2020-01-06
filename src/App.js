import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import BlogInfo from './components/BlogInfo'

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
        <BlogInfo blog={blog} />
      ))}
    </div>
  )
}

export default App
