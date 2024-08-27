import React from 'react';

const Filter = ({ onChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onChange((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="filter">
      <label>Category:</label>
      <select name="category" onChange={handleFilterChange}>
        <option value="Laptop">Laptop</option>
        <option value="Phone">Phone</option>
        {/* Add more categories */}
      </select>
    </div>
  );
};

export default Filter;