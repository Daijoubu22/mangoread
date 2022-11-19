import Manga from 'services/models/Manga';
import { SEARCH_MANGA_PAGE_SIZE, UPLOADS_URL } from 'services/constants/constants';
import DataType from 'services/enums/DataType';
import Cover from 'services/models/Cover';
import Author from 'services/models/Author';
import { SearchMangaParams } from 'services/queries/mangaQueries';
import { getOffsetFromPage, getPageFromOffset } from 'services/utils/numberUtils';
import Order from 'services/enums/Order';

export type ImageSize = 256 | 512;

export const getMangaAuthor = (manga: Manga): Author | undefined => (
  manga.relationships.find((item) => item.type === DataType.AUTHOR) as Author | undefined
);

export const getMangaCoverUrl = (manga: Manga, size?: ImageSize, cover?: Cover): string => {
  const mangaCover = cover || manga.relationships.find((item) => item.type === DataType.COVER_ART);
  if (!mangaCover?.attributes) {
    return '';
  }
  const postfix = size ? `.${size}.jpg` : '';
  return `${UPLOADS_URL}/covers/${manga.id}/${(mangaCover as Cover).attributes.fileName}${postfix}`;
};

export const getChapterImageUrl = (
  chapterHash: string,
  fileName: string,
  compressed?: boolean,
): string => (
  `${UPLOADS_URL}/${compressed ? 'data-saver' : 'data'}/${chapterHash}/${fileName}`
);

export const getSearchMangaQueryParams = (params: SearchMangaParams): Record<string, string> => {
  const queryParams: Record<string, string> = {};
  if (params.title) queryParams.title = params.title;
  queryParams.page = params.offset
    ? getPageFromOffset(params.offset, SEARCH_MANGA_PAGE_SIZE).toString()
    : '1';
  return queryParams;
};

export const getSearchMangaParamsFromQuery = (queryParams: URLSearchParams): SearchMangaParams => {
  const page = queryParams.get('page');
  const title = queryParams.get('title');
  const params: SearchMangaParams = {
    limit: SEARCH_MANGA_PAGE_SIZE,
    includes: [DataType.COVER_ART, DataType.AUTHOR],
    order: {
      rating: Order.DESCENDING,
    },
    offset: page ? getOffsetFromPage(Number(page), SEARCH_MANGA_PAGE_SIZE) : 0,
  };
  if (title) params.title = title;
  return params;
};
