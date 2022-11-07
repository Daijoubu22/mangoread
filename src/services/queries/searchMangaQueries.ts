import Manga from 'services/models/Manga';
import axios from 'axios';
import { API_URL } from 'services/constants/constants';
import Order from 'services/enums/Order';

interface SearchMangaResponse {
  data: Manga[];
}

interface SearchMangaParams {
  order?: Record<string, Order>;
  includes?: Array<any>;
}

const params: SearchMangaParams = {
  order: {
    followedCount: Order.DESCENDING,
  },
  includes: ['cover_art'],
};

const searchManga = async (): Promise<Manga[]> => {
  const manga = await axios.get<SearchMangaResponse>(`${API_URL}/manga`, { params });
  return manga.data.data;
};

export default searchManga;
