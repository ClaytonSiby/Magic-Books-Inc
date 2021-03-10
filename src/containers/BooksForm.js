import React from 'react'
import { useState } from 'react'
import { createBook, removeBook } from '../actions/index';
import { connect } from 'react-redux';

const BooksForm = (props) => {
  const [book, setBook] = useState({ title: '', category: '' })
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ]

  const handleChange = e => setBook( { ...book, [e.currentTarget.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault();
    const { title, category } = book;
    const newBookObject = {
      id: Math.floor(Math.random() * 100),
      title,
      category
    }

    props.createBook(newBookObject);
    book.title = '';
    book.category = '';
  }

  return (
    <div>
      <form>
        <div className='form-group'>
          <input
            type='text'
            className='bookTitle'
            name='title'
            value={book.title}
            onChange={handleChange}
            placeholder='Book Title Here'
          />
        </div>
        <div className='form-group'>
          <select
            className='selectCategory'
            name='category'
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
        <div className='form-group'>
          <button type='submit' className='submit' onClick={ handleSubmit }>
            Add New Book
          </button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createBook: (data) => dispatch(createBook(data)),
    removeBook: (book) => dispatch(removeBook(book)),
  }
}

export default connect(null,mapDispatchToProps)(BooksForm)
