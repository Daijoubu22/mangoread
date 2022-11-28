import React from 'react';
import styles from './ChapterImage.module.scss';

interface ChapterImageProps {
  url: string;
  className?: string;
}

function ChapterImage({ url, className }: ChapterImageProps) {
  return (
    <>
      <img
        className={`${styles.blur} ${className}`}
        src={url}
        alt="blur"
      />
      <img
        className={`${styles.main} ${className}`}
        src={url}
        alt="chapterImage"
      />
    </>
  );
}

ChapterImage.defaultProps = {
  className: undefined,
};

export default ChapterImage;
