import React from 'react';
import Manga from 'services/models/Manga';
import { getMangaCoverUrl } from 'services/utils/utils';
import Statistics from 'services/models/Statistics';
import { Link } from 'react-router-dom';
import MangaInfoView from 'components/views/MangaInfoView/MangaInfoView';
import BlurredBg from 'components/ui/BlurredBg/BlurredBg';
import MangaCoverView from 'components/views/MangaCoverView/MangaCoverView';
import styles from './MangaView.module.scss';

interface MangaViewProps {
  manga: Manga;
  statistics: Statistics;
}

function MangaView({ manga, statistics }: MangaViewProps) {
  const coverUrl = getMangaCoverUrl(manga, 256);

  return (
    <div className={styles.main}>
      <Link to={`manga/${manga.id}`}>
        <MangaCoverView
          className={styles.cover}
          manga={manga}
          size={256}
        />
      </Link>
      <BlurredBg imageUrl={coverUrl} blur={20} brightness={0.5}>
        <MangaInfoView manga={manga} statistics={statistics} className={styles.info} />
      </BlurredBg>
    </div>
  );
}

export default MangaView;
