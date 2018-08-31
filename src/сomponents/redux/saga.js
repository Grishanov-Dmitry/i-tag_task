import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function * fetchPosts (action) {
  try {
    const data = yield call((e) => {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${action.id}`) // Change!!!
        .then(res => res.json()
        )
    }
    )
    yield put({ type: 'SAVE_LOADED_USER_POSTS', data: data })
  } catch (e) {
    console.log('err')
  }
}

function * fetchUser (action) {
  try {
    const data = yield call(() => {
      return fetch('https://jsonplaceholder.typicode.com/users') // Change!!!
        .then(res => res.json()
        //   .then(data => console.log(data))

        )
    }
    )
    yield put({ type: 'SAVE_LOADED_USERS', data: data })
    // console.log(data)
  } catch (e) {
    console.log('err')
  }
}

function * mySaga () {
  debugger
  yield takeEvery('LOAD_USER_POSTS', fetchPosts)
  yield takeEvery('LOAD_USERS', fetchUser)
}

export default mySaga
