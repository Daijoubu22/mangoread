import Manga from 'services/models/Manga';
import { UPLOADS_URL } from 'services/constants/constants';
import DataType from 'services/enums/DataType';
import Cover from 'services/models/Cover';
import Author from 'services/models/Author';

export type ImageSize = 256 | 512;

export const getMangaAuthor = (manga: Manga): Author | undefined => (
  manga.relationships.find((item) => item.type === DataType.AUTHOR) as Author | undefined
);

export const getMangaCoverUrl = (manga: Manga, size?: ImageSize): string => {
  const cover = manga.relationships.find((item) => item.type === DataType.COVER_ART);
  if (!cover?.attributes) {
    return '';
  }
  const postfix = size ? `.${size}.jpg` : '';
  return `${UPLOADS_URL}/covers/${manga.id}/${(cover as Cover).attributes.fileName}${postfix}`;
};

export const getChapterImageUrl = (
  chapterHash: string,
  fileName: string,
  compressed?: boolean,
): string => (
  `${UPLOADS_URL}/${compressed ? 'data-saver' : 'data'}/${chapterHash}/${fileName}`
);
