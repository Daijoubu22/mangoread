import React from 'react';
import Manga from 'services/models/Manga';
import { getMangaAuthor } from 'services/utils/utils';
import styles from './MangaTitleView.module.scss';

interface MangaTitileViewProps {
  manga: Manga,
}

function MangaTitleView({ manga }: MangaTitileViewProps) {
  const author = getMangaAuthor(manga);
  const { title, year } = manga.attributes;
  return (
    <>
      <h2 className={styles.title}>{title.en}</h2>
      <p className={styles.author}>
        {author?.attributes && `${author.attributes.name}`}
        {author?.attributes && year && ' / '}
        {year}
      </p>
    </>
  );
}

export default MangaTitleView;
