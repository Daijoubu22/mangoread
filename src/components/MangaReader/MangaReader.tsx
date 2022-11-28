import React, { useEffect } from 'react';
import ChapterImage from 'components/MangaReader/ChapterImage/ChapterImage';
import Player from 'components/MangaReader/Player/Player';
import useAppSelector from 'hooks/useAppSelector';
import fetchChapterImages from 'redux/async/fetchChapterImages';
import useAppDispatch from 'hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import styles from './MangaReader.module.scss';

type MangaReaderParams = {
  id: string;
};

function MangaReader() {
  const { id: chapterId } = useParams<MangaReaderParams>();
  if (!chapterId) {
    return <h1>Chapter is not found(</h1>;
  }
  const { pageNumber, chapterImageUrls } = useAppSelector((state) => state.mangaReaderReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChapterImages(chapterId));
  }, []);

  if (!chapterImageUrls) {
    return null;
  }

  return (
    <div className={styles.main}>
      {chapterImageUrls.map((item, index) => (
        <ChapterImage
          className={index === pageNumber ? 'visible' : 'hidden'}
          url={item}
        />
      ))}
      <Player />
    </div>
  );
}

export default MangaReader;
