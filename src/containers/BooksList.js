import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import styles from '../assets/bookslist.module.css';

import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, filter, removeBook, handleFilterBook,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const filterBooks = books => (filter === 'All' ? books : books.filter(book => book.category === filter));

  return (
    <div>
      <nav>
        <div>
          <h2 className={styles.bookStoreCMS}>BookStore CMS</h2>
        </div>

        <div>
          <span className={styles.selectCategory}>Categories: </span>
          <CategoryFilter changeFilter={handleFilterBook} />
        </div>
      </nav>

      <div className="panel-bg">
        {filterBooks(books).map(book => (
          <Book
            id={book.id}
            title={book.title}
            category={book.category}
            key={book.id}
            removeBook={handleRemoveBook}
          />
        ))}
      </div>
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
