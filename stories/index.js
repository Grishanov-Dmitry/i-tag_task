import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { User } from '../src/сomponents/simpleComponents';
import { Post } from '../src/сomponents/simpleComponents';
import { Comment } from '../src/сomponents/simpleComponents';
import { UserPostWithComments } from '../src/сomponents/componentsShowAfterChangedPath';
import { TestComponent } from '../src/сomponents/simpleComponents';
import { AllUsersBlock } from '../src/сomponents/componentsShowAfterChangedPath';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../src/style/index.css';

const newHistory = createBrowserHistory();
const data = { 
    name: 'Dima', 
    email: 'gri@gmail.com',
    id: 1, 
    title: 'Any text of the title', 
    body: 'Any text of the comment', 
    post: 'Any text of the post',
    address: { 
        street: 'street',
        city: 'city' }
};

storiesOf('Test', module)
    .add('My test component', () => (
        <TestComponent onClick={action('clicked')} name='Dima' ></TestComponent>
    ));

storiesOf('My components', module)
    .add('User', () => (
        <Router history={newHistory}>
            <User data={data} street={data.street} onClick={action('clicked')}></User>
        </Router>
    ))
    .add('Post', () => (
        <Post id={data.id} comment={data.post}/>
    ))
    .add('Comment', () => (
        <Comment data={data} />
    ))
    .add('User post with comments', () => (
        <UserPostWithComments  />
    ));
