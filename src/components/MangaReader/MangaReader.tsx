import React, { useEffect, useState } from 'react';
import { getChapterImages } from 'services/queries/chapterQueries';
import { MOCK_CHAPTER_ID } from 'services/constants/constants';
import { getChapterImageUrl } from 'services/utils/utils';
import ChapterImage from 'components/MangaReader/ChapterImage/ChapterImage';
import Player from 'components/MangaReader/Player/Player';
import useAppSelector from 'hooks/useAppSelector';
import styles from './MangaReader.module.scss';

function MangaReader() {
  const [chapterImageUrls, setChapterImageUrls] = useState<string[]>();
  const { pageNumber } = useAppSelector((state) => state.mangaReaderReducer);

  useEffect(() => {
    getChapterImages(MOCK_CHAPTER_ID).then((response) => {
      setChapterImageUrls(response.dataSaver.map((item) => (
        getChapterImageUrl(response.hash, item, true)
      )));
    });
  }, []);

  if (!chapterImageUrls) {
    return null;
  }

  return (
    <div className={styles.main}>
      <ChapterImage url={chapterImageUrls[pageNumber]} />
      <Player />
    </div>
  );
}

export default MangaReader;
