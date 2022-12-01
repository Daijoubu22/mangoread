import React, { useEffect } from 'react';
import ChapterImage from 'components/MangaReader/ChapterImage/ChapterImage';
import Player from 'components/MangaReader/Player/Player';
import useAppSelector from 'hooks/useAppSelector';
import fetchChapterImages from 'redux/async/mangaReader/fetchChapterImages';
import useAppDispatch from 'hooks/useAppDispatch';
import { useParams, useSearchParams } from 'react-router-dom';
import { setPageNumber } from 'redux/slices/mangaReaderSlice';
import Loader from 'components/ui/Loader/Loader';
import styles from './MangaReader.module.scss';

type MangaReaderParams = {
  id: string;
};

function MangaReader() {
  const { id: chapterId } = useParams<MangaReaderParams>();
  if (!chapterId) {
    return <h1>Chapter is not found(</h1>;
  }
  const [queryParams, setQueryParams] = useSearchParams();
  const {
    pageNumber,
    chapterImageUrls,
    isLoading,
  } = useAppSelector((state) => state.mangaReaderReducer);
  const dispatch = useAppDispatch();

  const getPageNumberFromQuery = (): number => {
    const pageNumberString = queryParams.get('page');
    if (!pageNumberString) {
      return 0;
    }
    return Number(pageNumberString);
  };

  useEffect(() => {
    dispatch(setPageNumber(getPageNumberFromQuery()));
    dispatch(fetchChapterImages(chapterId));
  }, []);

  useEffect(() => {
    setQueryParams({ page: pageNumber.toString() });
  }, [pageNumber]);

  if (!chapterImageUrls) {
    return null;
  }

  return (
    <>
      <Loader isVisible={isLoading} />
      <div className={styles.main}>
        {chapterImageUrls.map((item, index) => (
          <ChapterImage
            className={index === pageNumber ? 'visible' : 'hidden'}
            url={item}
            key={item}
          />
        ))}
        <Player />
      </div>
    </>
  );
}

export default MangaReader;
