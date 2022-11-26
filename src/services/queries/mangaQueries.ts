import Manga from 'services/models/Manga';
import axios from 'axios';
import { API_URL } from 'services/constants/constants';
import Order from 'services/enums/Order';
import DataType from 'services/enums/DataType';
import OrderCategory from 'services/enums/OrderCategory';

export interface GetMangaListResponse {
  data: Manga[];
  total: number;
}

type OrderParams = {
  [key in OrderCategory]?: Order;
};

export type SearchMangaParams = OrderParams & {
  limit?: number;
  offset?: number;
  title?: string;
  includes?: Array<DataType>;
};

export interface GetMangaParams {
  includes?: Array<DataType>;
}

interface GetMangaResponse {
  data: Manga;
}

export const getMangaList = async (params: SearchMangaParams): Promise<GetMangaListResponse> => {
  const manga = await axios.get<GetMangaListResponse>(`${API_URL}/manga`, { params });
  return manga.data;
};

export const getManga = async (
  mangaId: string,
  params: GetMangaParams,
): Promise<GetMangaResponse> => {
  const manga = await axios.get<GetMangaResponse>(`${API_URL}/manga/${mangaId}`, { params });
  return manga.data;
};
