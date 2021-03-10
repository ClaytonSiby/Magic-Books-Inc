import React from 'react';
import PropTypes from 'prop-types';

const Book = ({  id, title, category} ) => (
  <tr>
    <td>
      {' '}
      {id}
      {' '}
    </td>
    <td>
      {' '}
      {title}
      {' '}
    </td>
    <td>
      {' '}
      {category}
      {' '}
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
