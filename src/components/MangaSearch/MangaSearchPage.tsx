import React, { useEffect } from 'react';
import { Space } from 'antd';
import SearchFilters from 'components/MangaSearch/SearchFilters/SearchFilters';
import styles from 'components/MangaSearch/MangaSearchPage.module.scss';
import { useSearchParams } from 'react-router-dom';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { updateParams } from 'redux/slices/mangaSearchSlice';
import fetchMangaList from 'redux/async/mangaSearch/fetchMangaList';
import fetchStatistics from 'redux/async/mangaSearch/fetchStatistics';
import MangaList from 'components/MangaSearch/MangaList/MangaList';
import { getSearchMangaParamsFromQuery, getSearchMangaQueryParams } from 'services/utils/paramsUtils';
import Header from 'components/Header/Header';

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
      dispatch(fetchMangaList(params));
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
    <>
      <Header />
      <div className={`${styles.main} container`}>
        <Space direction="vertical" size="middle">
          <SearchFilters />
          <MangaList />
        </Space>
      </div>
    </>
  );
}

export default MangaSearchPage;
