import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({ theBooks: booksReducer, filter: filterReducer });

export default rootReducer;
