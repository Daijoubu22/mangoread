import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MangaReaderState {
  pageNumber: number;
}

const initialState: MangaReaderState = {
  pageNumber: 0,
};

const mangaReaderSlice = createSlice({
  name: 'mangaReader',
  initialState,
  reducers: {
    setPageNumber(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },
  },
});

export const { setPageNumber } = mangaReaderSlice.actions;

export default mangaReaderSlice.reducer;
