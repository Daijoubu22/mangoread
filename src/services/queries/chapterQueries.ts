import axios from 'axios';
import { API_URL } from 'services/constants/constants';
import Languages from 'services/enums/Languages';
import Chapter from 'services/models/Chapter';
import OrderWithDirection from 'services/enums/OrderWithDirection';
import { transformParamsForRequest } from 'services/utils/paramsUtils';
import { Volumes } from 'services/models/Volume';

interface GetChapterListParams {
  translatedLanguage?: Languages[],
  order?: OrderWithDirection,
  includeExternalUrl?: number,
  groups?: string[],
}

interface GetChapterListResponse {
  data: Chapter[],
  total: number,
}

interface GetChapterResponse {
  data: Chapter,
}

export interface ChapterImages {
  data: string[],
  dataSaver: string[],
  hash: string,
}

interface GetChapterImagesResponse {
  chapter: ChapterImages,
}

interface GetVolumesParams {
  groups: string[],
}

interface GetVolumesResponse {
  volumes: Volumes,
}

export const getChapterList = async (
  mangaId: string,
  params: GetChapterListParams,
): Promise<GetChapterListResponse> => {
  const searchParams: GetChapterListParams = { ...params, includeExternalUrl: 0 };
  const response = await axios.get<GetChapterListResponse>(
    `${API_URL}/manga/${mangaId}/feed`,
    { params: transformParamsForRequest(searchParams) },
  );
  return response.data;
};

export const getChapter = async (chapterId: string): Promise<Chapter> => {
  const response = await axios.get<GetChapterResponse>(`${API_URL}/chapter/${chapterId}`);
  return response.data.data;
};

export const getChapterImages = async (chapterId: string): Promise<ChapterImages> => {
  const response = await axios.get<GetChapterImagesResponse>(`${API_URL}/at-home/server/${chapterId}`);
  return response.data.chapter;
};

export const getVolumes = async (mangaId: string, params: GetVolumesParams): Promise<Volumes> => {
  const response = await axios.get<GetVolumesResponse>(`${API_URL}/manga/${mangaId}/aggregate`, { params });
  return response.data.volumes;
};
