import React from 'react';

export const CATEGORIES = [
  'Select Category',
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
]

const CategoryFilter = ({ changeFilter }) => {
  return (
    <select name="filter" onChange={ changeFilter }>
      {CATEGORIES.map(category => (
        <option value={category} key={Math.random() * category.length}>
          {category}{' '}
        </option>
      ))}
    </select>
  )
}

export default CategoryFilter
