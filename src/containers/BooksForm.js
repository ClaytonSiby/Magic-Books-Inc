import React from 'react';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <div>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Book Title Here" />
        </div>
        <div className="form-group">
          <select className="form-control">
            {categories.map(category => (
              <option value={category} key={Math.random() * category.length}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <button type="button">Add New Book</button>
        </div>
      </form>
    </div>
  );
};

export default BooksForm;
