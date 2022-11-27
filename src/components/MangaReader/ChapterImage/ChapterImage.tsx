import React from 'react';
import styles from './ChapterImage.module.scss';

interface ChapterImageProps {
  url: string;
}

function ChapterImage({ url }: ChapterImageProps) {
  return (
    <img
      className={styles.main}
      src={url}
      alt="chapterImage"
    />
  );
}

export default ChapterImage;
