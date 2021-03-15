import React from 'react'
import PropTypes from 'prop-types';
import styles from '../assets/book.module.css';

const Book = ({ id, title, category, removeBook }) => (
  <div className={ `${styles.lessonPanel}`}>
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
        <span className={ `${ styles.actionBtn }`}>Comments</span>&nbsp;| &nbsp;
        <span className={ `${ styles.actionBtn }`}
          onClick={() => removeBook({ id, title, category })}
        >
          Remove Book
        </span>&nbsp; | &nbsp;
        <span className={ `${ styles.actionBtn }`}>Edit</span>
      </div>
    </div>
    <div className="progress-report">
        <div className="Oval-2"></div>
        <p className="percent-Complete"></p>
        <p className="completed">complete</p>
    </div>
    <div className="chapter-Info">
      <p className="current-Chapter">CURRENT CHAPTER</p>
      <p className="current-Lesson"></p>
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
