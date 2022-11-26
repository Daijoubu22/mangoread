import { AppDispatch } from 'redux/store';
import { mangaFetching, fetchingError, mangaFetchingSuccess } from 'redux/slices/mangaSearchSlice';
import { getMangaList, SearchMangaParams } from 'services/queries/mangaQueries';
import { getErrorMessage } from 'services/utils/stringUtils';

const fetchManga = (params: SearchMangaParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(mangaFetching());
    const response = await getMangaList(params);
    dispatch(mangaFetchingSuccess(response));
  } catch (error) {
    dispatch(fetchingError(getErrorMessage(error)));
  }
};

export default fetchManga;
