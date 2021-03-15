import React from 'react';
import PropTypes from 'prop-types';

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
];

const CategoryFilter = ({ changeFilter }) => (
  <select name="filter" onChange={changeFilter}>
    {CATEGORIES.map(category => (
      <option value={category} key={Math.random() * category.length}>
        {category}
        {' '}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
