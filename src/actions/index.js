const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book.id,
});

const changeFilter = category => ({
  type: CHANGE_FILTER,
  category,
});

export {
  createBook, removeBook, changeFilter, CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER,
};
