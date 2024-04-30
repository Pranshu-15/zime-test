import React, { useState, useEffect } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const MultiSelectFilter = ({ filters, onFiltersChange }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        const uniqueTags = Array.from(
          new Set(data.posts.flatMap((post) => post.tags))
        );
        setTags(uniqueTags);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []);

  const handleChange = (value) => {
    onFiltersChange(value, filters.search);
  };

  return (
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="Select tags"
      onChange={handleChange}
      value={filters.tags}
      optionLabelProp="label"
    >
      {tags.map((tag) => (
        <Option key={tag} value={tag} label={tag}>
          {tag}
        </Option>
      ))}
    </Select>
  );
};

export default MultiSelectFilter;