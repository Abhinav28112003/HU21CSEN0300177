import React from 'react';

const Sort = ({ onChange }) => {
  return (
    <div className="sort">
      <label>Sort by:</label>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  );
};

export default Sort;
