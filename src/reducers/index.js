import { combineReducers } from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({ theBooks: booksReducer });

export default rootReducer;
