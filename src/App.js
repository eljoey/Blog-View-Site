import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

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
      <Header />
      <Main blogs={blogs} />
    </div>
  )
}

export default App
