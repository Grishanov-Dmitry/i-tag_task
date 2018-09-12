import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { User } from '../src/сomponents/simpleComponents';
import { Post } from '../src/сomponents/simpleComponents';
import { Comment } from '../src/сomponents/simpleComponents';
import { UserComments } from '../src/сomponents/componentsShowAfterChangedPath/UserPostsAndComments';
import { AllUsersBlock } from '../src/сomponents/componentsShowAfterChangedPath/AllUsersBlock';
import { TestComponent } from '../src/сomponents/simpleComponents';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../src/style/index.css';
import { storyBookStore } from '../src/infrastructure/forStoryBook/storyBookState';

const newHistory = createBrowserHistory();

const { street, id, post, userComments } = storyBookStore;

storiesOf('Test', module)
    .add('My test component', () => (
        <TestComponent onClick={action('clicked')} name='Dima' ></TestComponent>
    ));

storiesOf('My components', module)
    .add('User', () => (
        <Router history={newHistory}>
            <User data={storyBookStore} street={street} onClick={action('clicked')}></User>
        </Router>
    ))
    .add('Post', () => (
        <Post id={id} comment={post}/>
    ))
    .add('Comment', () => (
        <Comment data={storyBookStore} />
    ))
    .add('User post with comments', () => (
        <Router history={newHistory}>
            <UserComments 
                userComments={userComments}/>
        </Router>
    ))
    .add('All users block', () => (
        <AllUsersBlock 
            props={storyBookStore}/>
    ));
