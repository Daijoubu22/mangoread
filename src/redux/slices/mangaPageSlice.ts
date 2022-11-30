import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Chapter from 'services/models/Chapter';

interface MangaPageState {
  chapterToRead: Chapter | undefined;
  isModalOpen: boolean;
}

const initialState: MangaPageState = {
  chapterToRead: undefined,
  isModalOpen: false,
};

const mangaPageSlice = createSlice({
  name: 'mangaPageSlice',
  initialState,
  reducers: {
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
  setChapterToRead,
  setIsModalOpen,
} = mangaPageSlice.actions;
