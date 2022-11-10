import axios from 'axios';
import { API_URL } from 'services/constants/constants';
import { MangaId } from 'services/models/Manga';
import Statistics from 'services/models/Statistics';

interface SearchMangaResponse {
  statistics: Record<MangaId, Statistics>;
}

export interface GetStatisticsParams {
  manga?: MangaId[];
}

const getStatistics = async (params: GetStatisticsParams): Promise<Record<MangaId, Statistics>> => {
  const manga = await axios.get<SearchMangaResponse>(`${API_URL}/statistics/manga`, { params });
  return manga.data.statistics;
};

export default getStatistics;
