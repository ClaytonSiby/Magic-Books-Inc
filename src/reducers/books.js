import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index'

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        { title: action.book.title, category: action.book.category }
      ]
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id)
    default:
      return state
  }
}

export default booksReducer
