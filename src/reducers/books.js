import { CREATE_BOOK, REMOVE_BOOK } from './index';

const booksReducer = (state, action) => {
    switch(action.type) {
        case CREATE_BOOK:
          return { ...state }
        case REMOVE_BOOK:
          return { ...state }
        default:
          return state
    }
}

export default booksReducer;
