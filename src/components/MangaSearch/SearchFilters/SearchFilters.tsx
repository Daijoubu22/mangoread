import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Input,
  Space,
} from 'antd';
import { SearchMangaParams } from 'services/queries/mangaQueries';
import FiltersModal from 'components/MangaSearch/FiltersModal/FiltersModal';
import useAppDispatch from 'hooks/useAppDispatch';
import { updateParams } from 'redux/slices/mangaSearchSlice';
import useAppSelector from 'hooks/useAppSelector';

function SearchFilters() {
  const { params } = useAppSelector((state) => state.mangaSearchReducer);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (value: any) => {
    const searchParams = {
      title: value.title,
      offset: 0,
    } as SearchMangaParams;
    dispatch(updateParams(searchParams));
  };

  const handleFiltersButton = (): void => {
    setIsModalOpen(true);
  };

  const handleFiltersModal = (): void => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    form.setFieldValue('title', params.title);
  }, [params]);

  return (
    <>
      <Form
        form={form}
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
