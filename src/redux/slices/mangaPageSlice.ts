import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Chapter from 'services/models/Chapter';

interface MangaPageState {
  chapterToRead: Chapter | undefined;
}

const initialState: MangaPageState = {
  chapterToRead: undefined,
};

const mangaPageSlice = createSlice({
  name: 'mangaPageSlice',
  initialState,
  reducers: {
    setChapterToRead(state, action: PayloadAction<Chapter>) {
      state.chapterToRead = action.payload;
    },
  },
});

export default mangaPageSlice.reducer;

export const { setChapterToRead } = mangaPageSlice.actions;
