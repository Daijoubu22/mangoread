import React from 'react';
import Manga from 'services/models/Manga';
import { Space } from 'antd';
import MangaCoverView from 'components/views/MangaCoverView/MangaCoverView';
import MangaTitleView from 'components/views/MangaTitleView/MangaTitleView';
import MangaDescriptionView from 'components/views/MangaDescriptionView/MangaDescriptionView';
import MangaActionButtons from 'components/MangaPage/MangaPageMainInfo/MangaActionButtons/MangaActionButtons';
import MangaStatisticsView from 'components/views/MangaStatisticsView/MangaStatisticsView';
import Statistics from 'services/models/Statistics';
import styles from './MangaPageMainInfo.module.scss';

interface MangaPageMainInfoProps {
  manga: Manga;
  statistics?: Statistics;
}

function MangaPageMainInfo({ manga, statistics }: MangaPageMainInfoProps) {
  return (
    <Space direction="horizontal" align="center" size={32}>
      <MangaCoverView
        className={styles.cover}
        manga={manga}
        size={512}
      />
      <Space direction="vertical">
        <MangaTitleView manga={manga} />
        <MangaStatisticsView statistics={statistics} />
        <MangaActionButtons className={styles.actionButtons} />
        <MangaDescriptionView manga={manga} />
      </Space>
    </Space>
  );
}

MangaPageMainInfo.defaultProps = {
  statistics: undefined,
};

export default MangaPageMainInfo;
