import { call, put, takeEvery } from 'redux-saga/effects';

function * fetchPosts ({id}) {
    try {
        const data = yield call(() => (
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                .then(res => res.json()
                )
        )
        );
        yield put({ type: 'SAVE_LOADED_USER_POSTS', data: data });
    } catch (e) {
        console.log('The error in the loading of posts');
    }
}

function * fetchComments ({postId}) {
    try {
        const data = yield call(() => (
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                .then(res => res.json()
                )
        )
        );
        yield put({ type: 'SAVE_LOADED_COMMENTS', data: data });
    } catch (e) {
        console.log('The error in the loading of comments');
    }
}

function * fetchUsers() {
    try {
        const data = yield call(() => (
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json()
                )
        )
        );
        yield put({ type: 'SAVE_LOADED_USERS', data: data });
    } catch (e) {
        console.log('The error in the loading of users');
    }
}

function * mySaga () {
    yield fetchUsers();
    yield takeEvery('LOAD_USER_POSTS', fetchPosts);
    yield takeEvery('LOAD_COMMENTS', fetchComments);
}

export default mySaga;
