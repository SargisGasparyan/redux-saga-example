import {createStore,compose,applyMiddleware} from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import reducer from './reducers';
import rootSaga from './sagas';

const composeEnhancers = process.env.NODE_ENV === 'development' ? 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const sagaMiddleware = createSagaMiddleware()
const configureStore = preloadState => createStore(
    reducer,
    preloadState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)
const store = configureStore()
sagaMiddleware.run(rootSaga)
export default store