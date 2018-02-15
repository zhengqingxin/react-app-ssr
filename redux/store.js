import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import withRedux from 'next-redux-wrapper'
import rootReducers from './reducers'
import rootSaga from './saga'

const composeEnhancers = compose // eslint-disable-line
const defaultState = {}
const sagaMiddleware = createSagaMiddleware()

function configureStorePro(initialState = defaultState) {
  const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)  
  return store
}

function configureStoreDev(initialState = defaultState) {
  const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)  
  return store
}

const initStore = process.env.NODE_ENV === 'production' ? configureStorePro : configureStoreDev

export default com => withRedux(initStore)(com)