import React from 'react';
import Manga from 'services/models/Manga';
import { Space } from 'antd';
import MangaCoverView from 'components/views/MangaCoverView/MangaCoverView';
import MangaTitleView from 'components/views/MangaTitleView/MangaTitleView';
import MangaDescriptionView from 'components/views/MangaDescriptionView/MangaDescriptionView';
import styles from './MangaPageMainInfo.module.scss';

interface MangaPageMainInfoProps {
  manga: Manga;
}

function MangaPageMainInfo({ manga }: MangaPageMainInfoProps) {
  return (
    <Space direction="horizontal" align="center" size={32}>
      <MangaCoverView
        className={styles.cover}
        manga={manga}
        size={512}
      />
      <Space direction="vertical">
        <MangaTitleView manga={manga} />
        <MangaDescriptionView manga={manga} />
      </Space>
    </Space>
  );
}

export default MangaPageMainInfo;
