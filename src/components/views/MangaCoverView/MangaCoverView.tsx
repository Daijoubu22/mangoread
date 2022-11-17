import React from 'react';
import Manga from 'services/models/Manga';
import { getMangaCoverUrl, ImageSize } from 'services/utils/utils';

interface MangaCoverViewProps {
  manga: Manga;
  size?: ImageSize;
  className?: string;
}

function MangaCoverView({ manga, size, className }: MangaCoverViewProps) {
  const coverUrl = getMangaCoverUrl(manga, size);
  return (
    <img
      className={className}
      src={coverUrl}
      alt="cover"
      style={{ objectFit: 'cover' }}
    />
  );
}

MangaCoverView.defaultProps = {
  size: undefined,
  className: undefined,
};

export default MangaCoverView;
