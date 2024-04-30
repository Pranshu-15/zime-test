import React, { useState, useEffect } from 'react';
import { Table, Pagination, Spin } from 'antd';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import MultiSelectFilter from '../MultiSelectFilter';
import SearchInput from '../SearchInput';

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState({ tags: [], search: '' });
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams(location.search);
        const page = parseInt(params.get('page')) || 1;
        const limit = parseInt(params.get('limit')) || 10;
        const tags = params.get('tags')?.split(',') || [];
        const search = params.get('search') || '';

        const response = await axios.get('https://dummyjson.com/posts', {
          params: {
            skip: (page - 1) * limit,
            limit,
            ...(tags.length > 0 && { tags }),
            ...(search && { body_like: search }),
          },
        });

        setPosts(response.data.posts);
        setTotal(response.data.total);
        setCurrentPage(page);
        setPageSize(limit);
        setFilters({ tags, search });
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [location.search]);

  const handlePageChange = (page, pageSize) => {
    const params = new URLSearchParams(location.search);
    params.set('page', page);
    params.set('limit', pageSize);
    history(`?${params.toString()}`); // Update this line
  };

  const handleFiltersChange = (tags, search) => {
    const params = new URLSearchParams();
    if (tags.length > 0) {
      params.set('tags', tags.join(','));
    }
    if (search) {
      params.set('search', search);
    }
    params.set('page', 1);
    history(`?${params.toString()}`); // Update this line
  };

  const columns = [
    {
      title: 'Post ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) => tags.join(', '),
    },
  ];

  return (
    <div>
      <MultiSelectFilter
        filters={filters}
        onFiltersChange={handleFiltersChange}
      />
      <SearchInput
        filters={filters}
        onFiltersChange={handleFiltersChange}
      />
      <Spin spinning={loading}>
        <Table
          columns={columns}
          dataSource={posts}
          pagination={false}
          rowKey="id"
        />
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={handlePageChange}
          showSizeChanger
          showTotal={(total) => `Total ${total} items`}
        />
      </Spin>
    </div>
  );
};

export default PostsTable;