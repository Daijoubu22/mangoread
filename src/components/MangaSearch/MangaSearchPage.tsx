import React, { useEffect } from 'react';
import { Space } from 'antd';
import SearchFilters from 'components/MangaSearch/SearchFilters/SearchFilters';
import styles from 'components/MangaSearch/MangaSearchPage.module.scss';
import { useSearchParams } from 'react-router-dom';
import { getSearchMangaParamsFromQuery, getSearchMangaQueryParams } from 'services/utils/utils';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { updateParams } from 'redux/slices/mangaSearchSlice';
import fetchManga from 'redux/async/fetchManga';
import fetchStatistics from 'redux/async/fetchStatistics';
import MangaList from 'components/MangaSearch/MangaList/MangaList';

function MangaSearchPage() {
  const [queryParams, setQueryParams] = useSearchParams();
  const {
    mangaList,
    params,
  } = useAppSelector((state) => state.mangaSearchReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateParams(getSearchMangaParamsFromQuery(queryParams)));
  }, []);

  useEffect(() => {
    if (params.includes) {
      dispatch(fetchManga(params));
    }
    setQueryParams(getSearchMangaQueryParams(params));
  }, [params]);

  useEffect(() => {
    if (mangaList.length) {
      dispatch(fetchStatistics({
        manga: mangaList.map((item) => item.id),
      }));
    }
  }, [mangaList]);

  return (
    <div className={`${styles.main} container`}>
      <Space direction="vertical" size="middle">
        <SearchFilters />
        <MangaList />
      </Space>
    </div>
  );
}

export default MangaSearchPage;
