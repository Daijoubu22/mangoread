import { AppDispatch } from 'redux/store';
import { getChapterImages } from 'services/queries/chapterQueries';
import { fetchingChapterImages, fetchingChapterImagesSuccess } from 'redux/slices/mangaReaderSlice';

const fetchChapterImages = (chapterId: string) => async (dispatch: AppDispatch) => {
  dispatch(fetchingChapterImages());
  const response = await getChapterImages(chapterId);
  dispatch(fetchingChapterImagesSuccess(response));
};

export default fetchChapterImages;
