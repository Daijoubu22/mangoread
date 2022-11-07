import React from 'react';
import Manga from 'services/models/Manga';

interface MangaViewProps {
  manga: Manga;
}

function MangaView({ manga }: MangaViewProps) {
  return (
    <li>
      {manga.id}
    </li>
  );
}

export default MangaView;
