import React, { useEffect, useState } from 'react';
import { getMangaList, SearchMangaParams } from 'services/queries/mangaQueries';
import Manga from 'services/models/Manga';
import MangaView from 'components/views/MangaView/MangaView';
import Order from 'services/enums/Order';
import DataType from 'services/enums/DataType';
import getStatistics from 'services/queries/statisticsQueries';
import Statistics from 'services/models/Statistics';
import { Pagination, Space } from 'antd';
import SearchFilters from 'components/MangaSearch/SearchFilters/SearchFilters';
import styles from 'components/MangaSearch/MangaSearchPage.module.scss';
import { getOffsetFromPage, getPageFromOffset } from 'services/utils/numberUtils';

const PAGE_SIZE = 10;

function MangaSearchPage() {
  const [mangaList, setMangaList] = useState([] as Manga[]);
  const [loading, setLoading] = useState(false);
  const [statistics, setStatistics] = useState<Record<string, Statistics>>();
  const [totalMangaCount, setTotalMangaCount] = useState(0);
  const defaultParams: SearchMangaParams = {
    order: {
      rating: Order.DESCENDING,
    },
    includes: [DataType.COVER_ART, DataType.AUTHOR],
    offset: 0,
    limit: PAGE_SIZE,
  };
  const [params, setParams] = useState(defaultParams);

  // search manga
  useEffect(() => {
    setLoading(true);
    getMangaList(params).then((response) => {
      setTotalMangaCount(response.total);
      setMangaList(response.data);
    }).finally(() => setLoading(false));
  }, [params]);

  // fetch statistics
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
    setParams((prevState) => (
      {
        ...prevState,
        offset: getOffsetFromPage(page, PAGE_SIZE),
      }
    ));
  };

  const onSearch = (searchParams: SearchMangaParams): void => {
    setParams((prevState) => (
      {
        ...prevState,
        title: searchParams.title,
        offset: 0,
      }
    ));
  };

  const pagination = (
    <Pagination
      total={totalMangaCount}
      defaultPageSize={PAGE_SIZE}
      showSizeChanger={false}
      current={params.offset ? getPageFromOffset(params.offset, PAGE_SIZE) : 1}
      onChange={onPageChange}
    />
  );

  const mangaItems = statistics && (
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

export default MangaSearchPage;
