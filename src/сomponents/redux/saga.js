import { call, put, takeEvery } from 'redux-saga/effects'

function * fetchPosts (action) {
  try {
    const data = yield call((e) => {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${action.id}`)
        .then(res => res.json()
        )
    }
    )
    yield put({ type: 'SAVE_LOADED_USER_POSTS', data: data })
  } catch (e) {
    console.log('The error in the loading of posts')
  }
}

function * fetchUser (action) {
  try {
    const data = yield call(() => {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()

        )
    }
    )
    yield put({ type: 'SAVE_LOADED_USERS', data: data })
  } catch (e) {
    console.log('The error in the loading of users')
  }
}

function * fetchComments (action) {
  try {
    const data = yield call(() => {
      return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${action.postId}`)
        .then(res => res.json()

        )
    }
    )
    yield put({ type: 'SAVE_LOADED_COMMENTS', data: data })
  } catch (e) {
    console.log('The error in the loading of comments')
  }
}

function * mySaga () {
  yield takeEvery('LOAD_USER_POSTS', fetchPosts)
  yield takeEvery('LOAD_USERS', fetchUser)
  yield takeEvery('LOAD_COMMENTS', fetchComments)
}

export default mySaga
