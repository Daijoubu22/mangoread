import React from 'react';
import {
  Button,
  Form,
  Input,
  Space,
} from 'antd';
import { SearchMangaParams } from 'services/queries/mangaQueries';

interface SearchFiltersProps {
  onSearch: (searchParams: SearchMangaParams) => void;
}

function SearchFilters({ onSearch }: SearchFiltersProps) {
  const onFinish = (value: any) => {
    const searchParams = {
      title: value.title,
    } as SearchMangaParams;
    onSearch(searchParams);
  };

  return (
    <Form
      name="search"
      autoComplete="off"
      onFinish={onFinish}
    >
      <Space direction="horizontal">
        <Form.Item name="filters">
          <Button>Filters</Button>
        </Form.Item>
        <Form.Item name="title">
          <Input
            placeholder="Search manga..."
            style={{ minWidth: '320px' }}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="primaryButton"
          >
            Search!
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
}

export default SearchFilters;
