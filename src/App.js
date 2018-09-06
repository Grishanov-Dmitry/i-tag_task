import React from 'react';
import './style/App.css';
import { AllUsersBlock } from './сomponents/componentsShowAfterChangedPath';
import { Provider } from 'react-redux';
import { store } from './сomponents/redux';
import { Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { UserPostsBlock } from './сomponents/componentsShowAfterChangedPath';
import { UserPostWithComments } from './сomponents/componentsShowAfterChangedPath';

const newHistory = createBrowserHistory();

const App = (props) => {
    return (
        <Provider store={store}>
            <Router history={newHistory}>
                <div>
                    <Route exact path="/" component={AllUsersBlock} />
                    <Route exact path='/user-posts' component={UserPostsBlock}/>
                    <Route exact path='/user-posts/:id' render={() => (<UserPostsBlock />)}/>
                    <Route exact path='/user-posts/:id/:commentId' render={() => (<UserPostWithComments />)}/>
                </div>
            </Router>
        </ Provider>
    );
};

export default App;
