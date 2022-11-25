import React, { useEffect } from 'react';
import { SearchMangaParams } from 'services/queries/mangaQueries';
import MangaView from 'components/views/MangaView/MangaView';
import { Pagination, Space } from 'antd';
import SearchFilters from 'components/MangaSearch/SearchFilters/SearchFilters';
import styles from 'components/MangaSearch/MangaSearchPage.module.scss';
import { getOffsetFromPage, getPageFromOffset } from 'services/utils/numberUtils';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_MANGA_PAGE_SIZE } from 'services/constants/constants';
import { getSearchMangaParamsFromQuery, getSearchMangaQueryParams } from 'services/utils/utils';
import { useGetMangaListQuery } from 'redux/api/mangaApi';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { updateParams } from 'redux/slices/mangaSearchSlice';
import { useGetStatisticsQuery } from 'redux/api/statisticsApi';

function MangaSearchPage() {
  const [queryParams, setQueryParams] = useSearchParams();
  const { params } = useAppSelector((state) => state.mangaSearchReducer);
  const { data: mangaResponse, isFetching: loading } = useGetMangaListQuery(params, {
    skip: !params.includes,
  });
  const mangaList = mangaResponse ? mangaResponse.data : [];
  const totalMangaCount = mangaResponse ? mangaResponse.total : 0;
  const { data: statisticsResponse } = useGetStatisticsQuery({
    manga: mangaList.map((item) => item.id),
  }, {
    skip: !mangaList.length,
  });
  const statistics = statisticsResponse?.statistics;
  const dispatch = useAppDispatch();

  const updateParamsWithQuery = (newParams: SearchMangaParams) => {
    dispatch(updateParams(newParams));
    setQueryParams(getSearchMangaQueryParams({
      ...params,
      ...newParams,
    }));
  };

  useEffect(() => {
    dispatch(updateParams(getSearchMangaParamsFromQuery(queryParams)));
  }, []);

  const onPageChange = (page: number): void => {
    updateParamsWithQuery({
      offset: getOffsetFromPage(page, SEARCH_MANGA_PAGE_SIZE),
    });
  };

  const onSearch = (searchParams: SearchMangaParams): void => {
    updateParamsWithQuery({
      title: searchParams.title,
      offset: 0,
    });
  };

  const pagination = (
    <Pagination
      total={totalMangaCount}
      defaultPageSize={SEARCH_MANGA_PAGE_SIZE}
      showSizeChanger={false}
      current={params.offset ? getPageFromOffset(params.offset, SEARCH_MANGA_PAGE_SIZE) : 1}
      onChange={onPageChange}
    />
  );

  const mangaItems = statistics && (
    mangaList.map((item) => (
      <MangaView manga={item} statistics={statistics[item.id]} key={item.id} />))
  );

  const skeletons = Array.from({ length: SEARCH_MANGA_PAGE_SIZE }, (_, index) => (
    <div key={index} className={styles.skeleton} />
  ));

  const emptyMangaList = (
    <h2>{'Didn\'t find anything😢'}</h2>
  );

  const mangaWithPagination = (
    <>
      {pagination}
      <Space direction="vertical" size="large">
        {loading ? skeletons : mangaItems}
      </Space>
      {pagination}
    </>
  );

  return (
    <div className={`${styles.main} container`}>
      <Space direction="vertical" size="middle">
        <SearchFilters onSearch={onSearch} />
        {mangaList.length
          ? mangaWithPagination
          : emptyMangaList}
      </Space>
    </div>
  );
}

export default MangaSearchPage;
