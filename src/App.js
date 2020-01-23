import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('https://jh-blog-api.herokuapp.com/api/blogs')

      // sort by newest post first
      res.data.blogs.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      )
      setBlogs(res.data.blogs)
    }

    fetchBlogs()
  }, [])

  return (
    <div className=" font-mono">
      <Header />
      <Main blogs={blogs} />
    </div>
  )
}

export default App
