import React, { useEffect, useState } from 'react';
import searchManga, { SearchMangaParams } from 'services/queries/searchMangaQueries';
import Manga, { MangaId } from 'services/models/Manga';
import MangaView from 'components/Views/MangaView/MangaView';
import Order from 'services/enums/Order';
import DataType from 'services/enums/DataType';
import getStatistics from 'services/queries/statisticsQueries';
import Statistics from 'services/models/Statistics';
import { Pagination, Space } from 'antd';
import SearchFilters from 'components/MangaSearch/SearchFilters/SearchFilters';
import styles from './MangaSearch.module.scss';

const PAGE_SIZE = 10;

function MangaSearch() {
  const [mangaList, setMangaList] = useState([] as Manga[]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [statistics, setStatistics] = useState({} as Record<MangaId, Statistics>);
  const [totalMangaCount, setTotalMangaCount] = useState(0);
  const defaultParams: SearchMangaParams = {
    order: {
      rating: Order.DESCENDING,
    },
    includes: [DataType.COVER_ART, DataType.AUTHOR],
    offset: pageNumber - 1,
    limit: PAGE_SIZE,
  };
  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    setParams((prevState) => (
      {
        ...prevState,
        offset: pageNumber - 1,
      }
    ));
  }, [pageNumber]);

  // search manga
  useEffect(() => {
    setLoading(true);
    searchManga(params).then((response) => {
      setTotalMangaCount(response.total);
      setMangaList(response.data);
    });
  }, [params]);

  // fetch statistics
  useEffect(() => {
    if (!mangaList.length) {
      return;
    }
    const mangaIds = mangaList.map((manga) => manga.id);
    getStatistics({ manga: mangaIds }).then((response) => {
      setStatistics(response);
    }).finally(() => setLoading(false));
  }, [mangaList]);

  const onPageChange = (page: number): void => {
    setPageNumber(page);
  };

  const onSearch = (searchParams: SearchMangaParams): void => {
    setParams((prevState) => (
      {
        ...prevState,
        title: searchParams.title,
      }
    ));
  };

  const pagination = (
    <Pagination
      total={totalMangaCount}
      defaultPageSize={PAGE_SIZE}
      showSizeChanger={false}
      current={pageNumber}
      onChange={onPageChange}
    />
  );

  const mangaItems = (
    mangaList.map((item) => (
      <MangaView manga={item} statistics={statistics[item.id]} key={item.id} />))
  );

  const skeletons = Array.from({ length: PAGE_SIZE }, (_, index) => (
    <div key={index} className={styles.skeleton} />
  ));

  return (
    <div className={`${styles.main} container`}>
      <Space direction="vertical" size="middle">
        <SearchFilters onSearch={onSearch} />
        {pagination}
        <Space direction="vertical" size="large">
          {loading ? skeletons : mangaItems}
        </Space>
        {pagination}
      </Space>
    </div>
  );
}

export default MangaSearch;
