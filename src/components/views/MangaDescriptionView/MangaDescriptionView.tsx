import React from 'react';
import Manga from 'services/models/Manga';
import { trimMangaDescription } from 'services/utils/stringUtils';
import styles from './MangaDescriptionView.module.scss';

interface MangaDescriptionViewProps {
  manga: Manga;
}

function MangaDescriptionView({ manga }: MangaDescriptionViewProps) {
  const { description } = manga.attributes;
  return (
    <p className={styles.main}>{description.en && trimMangaDescription(description.en)}</p>
  );
}

export default MangaDescriptionView;
