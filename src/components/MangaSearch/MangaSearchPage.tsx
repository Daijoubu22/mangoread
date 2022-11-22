import React, { useEffect, useState } from 'react';
import { SearchMangaParams } from 'services/queries/mangaQueries';
import MangaView from 'components/views/MangaView/MangaView';
import getStatistics from 'services/queries/statisticsQueries';
import Statistics from 'services/models/Statistics';
import { Pagination, Space } from 'antd';
import SearchFilters from 'components/MangaSearch/SearchFilters/SearchFilters';
import styles from 'components/MangaSearch/MangaSearchPage.module.scss';
import { getOffsetFromPage, getPageFromOffset } from 'services/utils/numberUtils';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_MANGA_PAGE_SIZE } from 'services/constants/constants';
import { getSearchMangaParamsFromQuery, getSearchMangaQueryParams } from 'services/utils/utils';
import useManga from 'hooks/useManga';

function MangaSearchPage() {
  const [statistics, setStatistics] = useState<Record<string, Statistics>>();
  const [queryParams, setQueryParams] = useSearchParams();
  const [params, setParams] = useState(getSearchMangaParamsFromQuery(queryParams));
  const { mangaList, loading, totalMangaCount } = useManga(params);

  const updateParams = (newParams: SearchMangaParams) => {
    setParams((prevState) => ({
      ...prevState,
      ...newParams,
    }));
    setQueryParams(getSearchMangaQueryParams(newParams));
  };

  useEffect(() => {
    if (!mangaList.length) {
      return;
    }
    const mangaIds = mangaList.map((manga) => manga.id);
    getStatistics({ manga: mangaIds }).then((response) => {
      setStatistics(response);
    });
  }, [mangaList]);

  const onPageChange = (page: number): void => {
    updateParams({
      offset: getOffsetFromPage(page, SEARCH_MANGA_PAGE_SIZE),
    });
  };

  const onSearch = (searchParams: SearchMangaParams): void => {
    updateParams({
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
