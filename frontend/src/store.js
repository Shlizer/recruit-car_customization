import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger'
import mainReducer from './reducers'

export default createStore(mainReducer, {}, applyMiddleware(logger))
