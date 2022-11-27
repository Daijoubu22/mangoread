import { SearchMangaParams } from 'services/queries/mangaQueries';
import { SEARCH_MANGA_PAGE_SIZE } from 'services/constants/constants';
import DataType from 'services/enums/DataType';
import OrderWithDirection from 'services/enums/OrderWithDirection';
import { getOffsetFromPage, getPageFromOffset } from 'services/utils/numberUtils';
import ContentRating from 'services/enums/ContentRating';

const defaultParams: SearchMangaParams = {
  limit: SEARCH_MANGA_PAGE_SIZE,
  includes: [DataType.COVER_ART, DataType.AUTHOR],
  order: OrderWithDirection.RATING_DESCENDING,
  contentRating: [ContentRating.SAFE, ContentRating.SUGGESTIVE],
};

export const getSearchMangaQueryParams = (params: SearchMangaParams): Record<string, string> => {
  const queryParams: Record<string, string> = {};
  if (params.title) queryParams.title = params.title;
  if (params.order) queryParams.order = params.order;
  queryParams.page = params.offset
    ? getPageFromOffset(params.offset, SEARCH_MANGA_PAGE_SIZE).toString()
    : '1';
  return queryParams;
};

export const getSearchMangaParamsFromQuery = (queryParams: URLSearchParams): SearchMangaParams => {
  const page = queryParams.get('page');
  const title = queryParams.get('title');
  const order = queryParams.get('order');
  const params = defaultParams;
  params.offset = page ? getOffsetFromPage(Number(page), SEARCH_MANGA_PAGE_SIZE) : 0;
  if (title) params.title = title;
  if (order) params.order = order as OrderWithDirection;
  return params;
};

export const transformParamsForRequest = (params: Record<string, any>): Record<string, any> => {
  const result: Record<string, any> = { ...params };
  if (!params.order) {
    return result;
  }
  const [orderCategory, order] = params.order.split('.');
  result.order = {
    [orderCategory]: order,
  };
  return result;
};
