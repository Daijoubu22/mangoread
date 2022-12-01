import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChapterImages } from 'services/queries/chapterQueries';
import { getChapterImageUrl } from 'services/utils/utils';

interface MangaReaderState {
  chapterImageUrls: string[];
  pageNumber: number;
  isLoading: boolean;
}

const initialState: MangaReaderState = {
  chapterImageUrls: [],
  pageNumber: 0,
  isLoading: false,
};

const mangaReaderSlice = createSlice({
  name: 'mangaReader',
  initialState,
  reducers: {
    setPageNumber(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },
    fetchingChapterImages(state) {
      state.isLoading = true;
      state.chapterImageUrls = [];
    },
    fetchingChapterImagesSuccess(state, action: PayloadAction<ChapterImages>) {
      state.chapterImageUrls = action.payload.dataSaver.map((item) => (
        getChapterImageUrl(action.payload.hash, item, true)
      ));
      state.isLoading = false;
    },
  },
});

export const {
  setPageNumber,
  fetchingChapterImagesSuccess,
  fetchingChapterImages,
} = mangaReaderSlice.actions;

export default mangaReaderSlice.reducer;
