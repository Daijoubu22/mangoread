import React from 'react';
import Manga from 'services/models/Manga';
import MangaStatisticsView from 'components/views/MangaStatisticsView/MangaStatisticsView';
import Statistics from 'services/models/Statistics';
import MangaTitleView from 'components/views/MangaTitleView/MangaTitleView';
import MangaDescriptionView from 'components/views/MangaDescriptionView/MangaDescriptionView';
import styles from './MangaInfoView.module.scss';

interface MangaInfoProps {
  manga: Manga;
  statistics?: Statistics;
  className?: string;
}

function MangaInfoView({ manga, statistics, className }: MangaInfoProps) {
  return (
    <div className={`${className} ${styles.main}`}>
      <MangaTitleView manga={manga} />
      <MangaStatisticsView statistics={statistics} />
      <MangaDescriptionView manga={manga} />
    </div>
  );
}

MangaInfoView.defaultProps = {
  className: undefined,
  statistics: undefined,
};

export default MangaInfoView;
