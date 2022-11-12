import React from 'react';
import Manga from 'services/models/Manga';
import { getMangaCoverUrl } from 'services/utils/utils';
import MangaInfoView from 'components/Views/MangaInfoView/MangaInfoView';
import Statistics from 'services/models/Statistics';
import { Link } from 'react-router-dom';
import styles from './MangaView.module.scss';

interface MangaViewProps {
  manga: Manga;
  statistics: Statistics;
}

function MangaView({ manga, statistics }: MangaViewProps) {
  const coverUrl = getMangaCoverUrl(manga);

  return (
    <div className={styles.main}>
      <Link to={`manga/${manga.id}`}>
        <img src={coverUrl} alt="manga cover" className={styles.cover} />
      </Link>
      <div className={styles.bg} style={{ backgroundImage: `url("${coverUrl}")` }}>
        <MangaInfoView manga={manga} statistics={statistics} className={styles.info} />
      </div>
    </div>
  );
}

export default MangaView;
