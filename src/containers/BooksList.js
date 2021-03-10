import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div>
    <h2>Books List here!</h2>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book
            id={book.id}
            title={book.title}
            category={book.category}
            key={book.id}
          />
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({ books: state.theBooks });

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(BooksList);
