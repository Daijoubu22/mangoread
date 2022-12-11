import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Chapter from 'services/models/Chapter';
import Manga from 'services/models/Manga';
import Statistics from 'services/models/Statistics';
import Cover from 'services/models/Cover';

interface MangaPageState {
  isLoading: boolean;
  manga: Manga | undefined;
  chapterToRead: Chapter | undefined;
  statistics: Statistics | undefined;
  coverList: Cover[] | undefined;
}

const initialState: MangaPageState = {
  isLoading: false,
  manga: undefined,
  chapterToRead: undefined,
  statistics: undefined,
  coverList: undefined,
};

const mangaPageSlice = createSlice({
  name: 'mangaPageSlice',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setManga(state, action: PayloadAction<Manga>) {
      state.manga = action.payload;
    },
    setChapterToRead(state, action: PayloadAction<Chapter>) {
      state.chapterToRead = action.payload;
    },
    setStatistics(state, action: PayloadAction<Statistics>) {
      state.statistics = action.payload;
    },
    setCoverList(state, action: PayloadAction<Cover[]>) {
      state.coverList = action.payload;
    },
  },
});

export default mangaPageSlice.reducer;

export const {
  setIsLoading,
  setManga,
  setChapterToRead,
  setStatistics,
  setCoverList,
} = mangaPageSlice.actions;
