import React from 'react';
import Manga from 'services/models/Manga';
import { getMangaAuthor } from 'services/utils/utils';
import MangaStatisticsView from 'components/Views/MangaStatisticsView/MangaStatisticsView';
import Statistics from 'services/models/Statistics';
import { trimBeforeNewLine } from 'services/utils/stringUtils';
import styles from './MangaInfoView.module.scss';

interface MangaInfoProps {
  manga: Manga;
  statistics: Statistics;
  className?: string;
}

function MangaInfoView({ manga, statistics, className }: MangaInfoProps) {
  const author = getMangaAuthor(manga);
  const { title, year, description } = manga.attributes;

  return (
    <div className={`${className} ${styles.main}`}>
      <h2>{title.en}</h2>
      <p>
        {author?.attributes && `${author.attributes.name} / `}
        {year}
      </p>
      <MangaStatisticsView statistics={statistics} />
      <p className={styles.description}>{trimBeforeNewLine(description.en)}</p>
    </div>
  );
}

MangaInfoView.defaultProps = {
  className: '',
};

export default MangaInfoView;