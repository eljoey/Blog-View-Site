import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import blogService from './services/blogs'
import Loading from './components/Loading'

function App() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await blogService.getBlogs()

      setBlogs(res)

      setLoading(false)
    }

    fetchBlogs()
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    )
  } else {
    return (
      <div className=" font-mono">
        <Header />
        <Main blogs={blogs} />
      </div>
    )
  }
}

export default App
