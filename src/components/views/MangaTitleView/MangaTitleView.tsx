import React from 'react';
import Manga from 'services/models/Manga';
import { getMangaAuthor } from 'services/utils/utils';
import { Link } from 'react-router-dom';
import styles from './MangaTitleView.module.scss';

interface MangaTitleViewProps {
  manga: Manga,
}

function MangaTitleView({ manga }: MangaTitleViewProps) {
  const author = getMangaAuthor(manga);
  const { title, year } = manga.attributes;
  return (
    <>
      <Link to={`/manga/${manga.id}`}>
        <h2 className={styles.title}>{title.en}</h2>
      </Link>
      <p className={styles.author}>
        {author?.attributes && `${author.attributes.name}`}
        {author?.attributes && year && ' / '}
        {year}
      </p>
    </>
  );
}

export default MangaTitleView;
