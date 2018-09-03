import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './сomponents/redux/reducers/reducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './сomponents/redux/saga'
import combineReducers from './сomponents/redux/reducers/combine'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(mySaga)

Object.defineProperty(window, 'state', {
  get () {
    return store.getState()
  }
})
