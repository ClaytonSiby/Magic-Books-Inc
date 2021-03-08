const CREATE_BOOK = 'CREATE_BOOK'; 
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = bookObject => {
    return {
        type: CREATE_BOOK,
        bookObject
    }
}

const removeBook = bookObject => {
    return {
        type: REMOVE_BOOK,
        bookObject
    }
}

export { createBook, removeBook }
