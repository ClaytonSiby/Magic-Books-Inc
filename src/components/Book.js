import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ id, title, category, removeBook }) => (
  <div className='Lesson-Panel'>
    <div className="Book-Header">
      <div className='School-of'>
        <p>{category}</p>
      </div>
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <div className='author'>
        <p>Suzane Collins</p>
      </div>
      <div className='actions'>
        <button
          type='button'
          onClick={() => removeBook({ id, title, category })}
        >
          Remove Book
        </button>
      </div>
    </div>
    <div className="progress-report">
        <div className="Oval-2"></div>
        <p className="percent-Complete"></p>
        <p className="completed">complete</p>
    </div>
  </div>
)

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired
}

export default Book
