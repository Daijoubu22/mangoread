import React from 'react';
import { SEARCH_MANGA_PAGE_SIZE } from 'services/constants/constants';
import { Pagination, Space } from 'antd';
import { getOffsetFromPage, getPageFromOffset } from 'services/utils/numberUtils';
import useAppSelector from 'hooks/useAppSelector';
import { updateParams } from 'redux/slices/mangaSearchSlice';
import useAppDispatch from 'hooks/useAppDispatch';
import MangaView from 'components/views/MangaView/MangaView';
import styles from './MangaList.module.scss';

function MangaList() {
  const {
    mangaList,
    mangaTotalCount,
    isLoading,
    params,
    statistics,
  } = useAppSelector((state) => state.mangaSearchReducer);
  const dispatch = useAppDispatch();

  const onPageChange = (page: number): void => {
    dispatch(updateParams({
      offset: getOffsetFromPage(page, SEARCH_MANGA_PAGE_SIZE),
    }));
  };

  const pagination = (
    <Pagination
      total={mangaTotalCount}
      defaultPageSize={SEARCH_MANGA_PAGE_SIZE}
      showSizeChanger={false}
      current={params.offset ? getPageFromOffset(params.offset, SEARCH_MANGA_PAGE_SIZE) : 1}
      onChange={onPageChange}
    />
  );

  const mangaItems = (
    mangaList.map((item) => (
      <MangaView manga={item} statistics={statistics?.[item.id]} key={item.id} />))
  );

  const skeletons = Array.from({ length: SEARCH_MANGA_PAGE_SIZE }, (_, index) => (
    <div key={index} className={styles.skeleton} />
  ));

  const emptyMangaList = (
    <h2>{'Didn\'t find anything😢'}</h2>
  );

  const mangaWithPagination = (
    <Space direction="vertical" size="large">
      {pagination}
      {isLoading ? skeletons : mangaItems}
      {pagination}
    </Space>
  );

  return (!mangaList.length && !isLoading)
    ? emptyMangaList
    : mangaWithPagination;
}

export default MangaList;
