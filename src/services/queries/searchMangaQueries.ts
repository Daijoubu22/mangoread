import Manga from 'services/models/Manga';
import axios from 'axios';

const API_URL = 'https://api.mangadex.org';
// const BASE_URL = 'https://mangadex.org';
// const MOCK_COVER_URL = 'https://api.mangadex.org/covers/e896c48c-3150-437d-ba57-d8567eb399ae/0e60e010-fa6b-48bd-8ec0-0faeff1f0c6a.jpg.256.jpg';
// const MOCK_MANGA_ID = 'e896c48c-3150-437d-ba57-d8567eb399ae';

interface SearchMangaResponse {
  data: Manga[];
}

const searchManga = async (): Promise<Manga[]> => {
  const manga = await axios.get<SearchMangaResponse>(`${API_URL}/manga`, { params: { includes: ['cover_art'] } });
  return manga.data.data;
};

export default searchManga;
