import React from 'react'

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ]
  return (
    <div>
      <form>
        <div className='form-group'>
          <input type='text' placeholder='Book Title Here' />
        </div>
        <div className='form-group'>
          <select className='form-control'>
            {
                categories.forEach(category => (
                    <option value={category} key={Math.random() * category.length}></option>
                ))
            }
          </select>
        </div>
        <div className='form-group'>
          <button>Add New Book</button>
        </div>
      </form>
    </div>
  )
}

export default BooksForm
