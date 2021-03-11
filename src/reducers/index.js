import { combineReducers } from 'redux'
import booksReducer from './books'
import filterReduxer from './filter'

const rootReducer = combineReducers({ theBooks: booksReducer, filterReduxer })

export default rootReducer
