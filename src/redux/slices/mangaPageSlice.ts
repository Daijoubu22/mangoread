import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Chapter from 'services/models/Chapter';
import Manga from 'services/models/Manga';

interface MangaPageState {
  manga: Manga | undefined;
  chapterToRead: Chapter | undefined;
  isModalOpen: boolean;
}

const initialState: MangaPageState = {
  manga: undefined,
  chapterToRead: undefined,
  isModalOpen: false,
};

const mangaPageSlice = createSlice({
  name: 'mangaPageSlice',
  initialState,
  reducers: {
    setManga(state, action: PayloadAction<Manga>) {
      state.manga = action.payload;
    },
    setChapterToRead(state, action: PayloadAction<Chapter>) {
      state.chapterToRead = action.payload;
    },
    setIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
  },
});

export default mangaPageSlice.reducer;

export const {
  setManga,
  setChapterToRead,
  setIsModalOpen,
} = mangaPageSlice.actions;
