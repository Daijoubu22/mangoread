import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChapterImages } from 'services/queries/chapterQueries';
import { getChapterImageUrl } from 'services/utils/utils';
import Chapter from 'services/models/Chapter';
import { Volumes } from 'services/models/Volume';

interface MangaReaderState {
  currentChapter: Chapter | undefined;
  chapterImageUrls: string[];
  pageNumber: number;
  volumes: Volumes | undefined;
  isLoading: boolean;
}

const initialState: MangaReaderState = {
  currentChapter: undefined,
  chapterImageUrls: [],
  pageNumber: 1,
  volumes: undefined,
  isLoading: false,
};

const mangaReaderSlice = createSlice({
  name: 'mangaReader',
  initialState,
  reducers: {
    setPageNumber(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },
    fetchingChapterSuccess(state, action: PayloadAction<Chapter>) {
      state.currentChapter = action.payload;
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
    setVolumes(state, action: PayloadAction<Volumes>) {
      state.volumes = action.payload;
    },
  },
});

export const {
  setPageNumber,
  fetchingChapterImagesSuccess,
  fetchingChapterImages,
  fetchingChapterSuccess,
  setVolumes,
} = mangaReaderSlice.actions;

export default mangaReaderSlice.reducer;
