import Manga from 'services/models/Manga';
import { BASE_URL } from 'services/constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const getMangaCoverUrl = (manga: Manga): string => {
  const cover = manga.relationships.find((item) => item.type === 'cover_art');
  if (!cover?.attributes) {
    return '';
  }
  return `${BASE_URL}/covers/${manga.id}/${cover.attributes.fileName}.256.jpg`;
};
