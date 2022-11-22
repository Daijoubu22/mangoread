import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Space,
} from 'antd';
import { SearchMangaParams } from 'services/queries/mangaQueries';
import FiltersModal from 'components/MangaSearch/FiltersModal/FiltersModal';

interface SearchFiltersProps {
  onSearch: (searchParams: SearchMangaParams) => void;
}

function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (value: any) => {
    const searchParams = {
      title: value.title,
    } as SearchMangaParams;
    onSearch(searchParams);
  };

  const handleFiltersButton = (): void => {
    setIsModalOpen(true);
  };

  const handleFiltersModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Form
        name="search"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Space direction="horizontal">
          <Form.Item name="filters">
            <Button onClick={handleFiltersButton}>Filters</Button>
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
      <FiltersModal isOpen={isModalOpen} handleModal={handleFiltersModal} />
    </>
  );
}

export default SearchFilters;
