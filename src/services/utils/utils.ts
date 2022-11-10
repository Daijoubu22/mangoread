import Manga from 'services/models/Manga';
import { BASE_URL } from 'services/constants/constants';
import DataType from 'services/enums/DataType';
import Cover from 'services/models/Cover';
import Author from 'services/models/Author';

export const getMangaAuthor = (manga: Manga): Author | undefined => (
  manga.relationships.find((item) => item.type === DataType.AUTHOR) as Author | undefined
);

export const getMangaCoverUrl = (manga: Manga): string => {
  const cover = manga.relationships.find((item) => item.type === DataType.COVER_ART);
  if (!cover?.attributes) {
    return '';
  }
  return `${BASE_URL}/covers/${manga.id}/${(cover as Cover).attributes.fileName}.256.jpg`;
};
