import React, { Component } from 'react'
import './App.css'
import AllUsersBlock from './сomponents/AllUsersBlock'
import { Provider } from 'react-redux'
import { store } from './store'
import { Route, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import UserPostsBlock from './сomponents/UserPostsBlock'
import UserPostWithComments from './сomponents/UserPostWithComment'

const newHistory = createBrowserHistory()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={newHistory}>
          <div>
            <Route exact path="/" component={AllUsersBlock} />
            <Route exact path='/user-posts' component={UserPostsBlock}/>
            <Route exact path='/user-posts/:id' render={(props) => (<UserPostsBlock />)}/>
            <Route exact path='/user-posts/:id/:commentId' render={(props) => (<UserPostWithComments />)}/>
          </div>
        </Router>
      </ Provider>
    )
  }
}

export default App
