import React, { Component } from 'react';
import './App.css';
import UserData from './Components/UserData';
import { Provider } from 'react-redux';
import { store } from './store';
import { Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import UserCommentsBlock from './Components/userCommentsBlock';
import AllUserComment from './Components/showAllComment';

const newHistory = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={newHistory}>
            <div>
              <Route exact path="/" component={UserData} />
              <Route path="/user-comments" component={UserCommentsBlock}/>  
              <Route path="/user-comments/:id" component={AllUserComment}/>
            </div>
        </Router>
      </ Provider>
    );
  }
}

export default App;
