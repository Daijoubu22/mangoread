import axios from 'axios';
import { API_URL } from 'services/constants/constants';
import Statistics from 'services/models/Statistics';

interface SearchMangaResponse {
  statistics: Record<string, Statistics>;
}

export interface GetStatisticsParams {
  manga?: string[];
}

const getStatistics = async (params: GetStatisticsParams): Promise<Record<string, Statistics>> => {
  const manga = await axios.get<SearchMangaResponse>(`${API_URL}/statistics/manga`, { params });
  return manga.data.statistics;
};

export default getStatistics;
