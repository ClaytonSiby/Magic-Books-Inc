import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, removeBook,
}) => (
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
    <td>
      <button type="button" onClick={() => removeBook({ id, title, category })}>
        Remove Book
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
