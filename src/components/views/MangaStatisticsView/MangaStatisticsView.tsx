import React from 'react';
import Statistics from 'services/models/Statistics';
import { roundTo2Decimals } from 'services/utils/numberUtils';
import { ReactComponent as RatingIcon } from 'assets/images/star-full.svg';
import { ReactComponent as FollowsIcon } from 'assets/images/heart-full.svg';
import styles from './MangaStatistics.module.scss';

interface MangaStatisticsViewProps {
  statistics: Statistics;
}

function MangaStatisticsView({ statistics }: MangaStatisticsViewProps) {
  return (
    <div className={styles.main}>
      <span className={styles.rating}>
        <RatingIcon />
        {roundTo2Decimals(statistics.rating.bayesian)}
      </span>
      <span>
        <FollowsIcon />
        {statistics.follows}
      </span>
    </div>
  );
}

export default MangaStatisticsView;
