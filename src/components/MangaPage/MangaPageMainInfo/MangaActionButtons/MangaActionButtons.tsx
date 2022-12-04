import React from 'react';
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import useAppSelector from 'hooks/useAppSelector';
import unavailableFeature from 'services/utils/unavailableFeature';
import { getReadingProgressFromLC } from 'services/utils/localStorageUtils';
import Manga from 'services/models/Manga';
import styles from './MangaActionButtons.module.scss';

interface MangaActionButtonsProps {
  className?: string;
}

function MangaActionButtons({ className }: MangaActionButtonsProps) {
  const { manga, chapterToRead } = useAppSelector((state) => state.mangaPageReducer);
  const navigate = useNavigate();

  const startRead = () => {
    const readingProgress = getReadingProgressFromLC(manga as Manga);
    const chapter = readingProgress ? readingProgress.chapter : chapterToRead?.id;
    const page = readingProgress ? readingProgress.page : 1;
    navigate({
      pathname: `/read/${chapter}`,
      search: `?page=${page}`,
    });
  };

  return (
    <Space className={`${styles.main} ${className}`} direction="horizontal">
      <Button
        className={`${styles.readButton} primaryButton`}
        size="large"
        onClick={startRead}
      >
        Read!
      </Button>
      <Button size="large" onClick={unavailableFeature}>Chapters</Button>
      <Button size="large" onClick={unavailableFeature}>Follow</Button>
    </Space>
  );
}

MangaActionButtons.defaultProps = {
  className: undefined,
};

export default MangaActionButtons;
