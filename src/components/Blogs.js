import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BlogInfo from './BlogInfo'
import Blog from './Blog'

const Blogs = ({ blogs }) => {
  return (
    <Switch>
      <Route exact path="/blogs" render={() => <BlogInfo blogs={blogs} />} />
      <Route path="/blogs/:id" component={Blog} />
    </Switch>
  )
}

export default Blogs
