import React from 'react';
import Manga from 'services/models/Manga';
import { getMangaCoverUrl } from 'services/utils/utils';

interface MangaViewProps {
  manga: Manga;
}

function MangaView({ manga }: MangaViewProps) {
  return (
    <li>
      <img src={getMangaCoverUrl(manga)} alt="manga cover" />
    </li>
  );
}

export default MangaView;
