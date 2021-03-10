import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const BooksForm = props => {
  const [book, setBook] = useState({ title: '', category: '' });
  const categories = [
    'Select Category',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const handleChange = e => setBook({ ...book, [e.currentTarget.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { title, category } = book;
    const alertMsg = document.querySelector('.alertMessage');
    const newBookObject = {
      id: Math.floor(Math.random() * 100),
      title,
      category,
    };

    if (newBookObject.title && newBookObject.category) {
      props.createBook(newBookObject);
      alertMsg.textContent = '';
      book.title = '';
      book.category = '';
    } else {
      alertMsg.textContent = 'Fill in the title and category to continue!';
      alertMsg.style.color = 'red';
    }
  };

  return (
    <div>
      <p className="alertMessage" />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="bookTitle"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Book Title Here"
          />
        </div>
        <div className="form-group">
          <select
            className="selectCategory"
            name="category"
            value={book.category}
            onChange={handleChange}
          >
            {categories.map(category => (
              <option value={category} key={Math.random() * category.length}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="submit" onClick={handleSubmit}>
            Add New Book
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: data => dispatch(createBook(data)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
