import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import BlogInfo from './components/BlogInfo'
import Header from './components/Header'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('http://localhost:3000/api/blogs')
      setBlogs(res.data.blogs)
    }

    fetchBlogs()
  }, [])

  const displayBlogs = () => {
    return (
      <>
        {blogs.map(blog => (
          <BlogInfo blog={blog} />
        ))}
      </>
    )
  }

  return (
    <div>
      <Header />
      <div>{displayBlogs()}</div>
    </div>
  )
}

export default App
