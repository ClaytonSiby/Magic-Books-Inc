import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';

import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, filter, removeBook, handleFilterBook,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const filterBooks = books => (filter === 'All'
    ? books
    : books.filter(book => book.category === filter));

  return (
    <div>
      <h2>Books List here!</h2>
      <CategoryFilter changeFilter={handleFilterBook} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { filterBooks(books).map(book => (
            <Book
              id={book.id}
              title={book.title}
              category={book.category}
              key={book.id}
              removeBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.theBooks,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  handleFilterBook: e => dispatch(changeFilter(e.target.value)),
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  handleFilterBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
