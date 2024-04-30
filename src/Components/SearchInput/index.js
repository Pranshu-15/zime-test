import React from 'react';
import { Input } from 'antd';

const SearchInput = ({ filters, onFiltersChange }) => {
  const handleChange = (e) => {
    onFiltersChange(filters.tags, e.target.value);
  };

  return (
    <Input
      placeholder="Search posts"
      value={filters.search}
      onChange={handleChange}
      style={{ marginBottom: '1rem' }}
    />
  );
};

export default SearchInput;