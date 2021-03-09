import React from 'react'
import { connect } from 'react-redux'
import Book from '../components/Book'

const BooksList = ({ books }) => {
  return (
    <div className='App'>
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
          {
            books.map(book => (
              <Book book={ book } key={ book.id} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => {
  return { books: state.theBooks }
}

export default connect(mapStateToProps)(BooksList)
