import axios from 'axios';
import { API_URL } from 'services/constants/constants';

interface GetChapterListResponse {

}

interface GetChapterResponse {

}

export interface ChapterImages {
  data: string[],
  dataSaver: string[],
  hash: string,
}

interface GetChapterImagesResponse {
  chapter: ChapterImages,
}

export const getChapterList = async (mangaId: string): Promise<GetChapterListResponse> => {
  const response = await axios.get<GetChapterListResponse>(`${API_URL}/manga/${mangaId}/feed`);
  return response.data;
};

export const getChapter = async (chapterId: string): Promise<GetChapterResponse> => {
  const response = await axios.get<GetChapterResponse>(`${API_URL}/chapter/${chapterId}`);
  return response.data;
};

export const getChapterImages = async (chapterId: string): Promise<ChapterImages> => {
  const response = await axios.get<GetChapterImagesResponse>(`${API_URL}/at-home/server/${chapterId}`);
  return response.data.chapter;
};
