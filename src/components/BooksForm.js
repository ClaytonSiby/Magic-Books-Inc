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
    <>
      <form>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Book Title'
          />
        </div>
        <div className='form-group'>
          <select className='form-control'>
            {categories.map(category => (
              <option value={category} key={Math.random() * categories.length}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
            <button type="submit" className="btn btn-block">Submit</button>
        </div>
      </form>
    </>
  )
}

export default BooksForm
