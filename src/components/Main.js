import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Blogs from './Blogs'

const Main = ({ blogs }) => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blogs" render={() => <Blogs blogs={blogs} />} />
      </Switch>
    </main>
  )
}

export default Main
