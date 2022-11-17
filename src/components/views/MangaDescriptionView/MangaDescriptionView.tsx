import React from 'react';
import Manga from 'services/models/Manga';
import styles from 'components/views/MangaInfoView/MangaInfoView.module.scss';
import { trimBeforeNewLine } from 'services/utils/stringUtils';

interface MangaDescriptionViewProps {
  manga: Manga;
}

function MangaDescriptionView({ manga }: MangaDescriptionViewProps) {
  const { description } = manga.attributes;
  return (
    <p className={styles.description}>{description.en && trimBeforeNewLine(description.en)}</p>
  );
}

export default MangaDescriptionView;
