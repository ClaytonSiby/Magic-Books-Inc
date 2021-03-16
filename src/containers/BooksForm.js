import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import { CATEGORIES } from '../components/CategoryFilter';
import styles from '../assets/booksform.module.css';

const BooksForm = props => {
  const [book, setBook] = useState({ title: '', category: '' });

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
      alertMsg.textContent = 'Book successfully added to list!';
      alertMsg.style.color = 'green';
      book.title = '';
      book.category = '';
    } else {
      alertMsg.textContent = 'Fill in the title and category to continue!';
      alertMsg.style.color = 'red';
    }

    setTimeout(() => { alertMsg.textContent = ''; }, 2000);
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
          <p />
          <select
            className="selectCategory"
            name="category"
            value={book.category}
            onChange={handleChange}
          >
            {CATEGORIES.map(category => (
              <option className="option" value={category} key={Math.random() * category.length}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className={styles.button} onClick={handleSubmit}>
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
