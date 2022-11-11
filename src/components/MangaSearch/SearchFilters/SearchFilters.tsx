import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { SearchMangaParams } from 'services/queries/searchMangaQueries';

interface SearchFiltersProps {
  onSearch: (searchParams: SearchMangaParams) => void;
}

function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [title, setTitle] = useState('');
  const searchParams = {
    title,
  } as SearchMangaParams;

  return (
    <Space direction="horizontal">
      <Button>Filters</Button>
      <Input
        value={title}
        onChange={(event) => { setTitle(event.target.value); }}
        placeholder="Search manga..."
        style={{ minWidth: '320px' }}
      />
      <Button type="primary" onClick={() => { onSearch(searchParams); }}>Search!</Button>
    </Space>
  );
}

export default SearchFilters;
