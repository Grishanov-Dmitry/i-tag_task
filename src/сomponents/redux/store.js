import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from './';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer, composeWithDevTools(
        applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);
