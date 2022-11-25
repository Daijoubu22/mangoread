import { SearchMangaParams } from 'services/queries/mangaQueries';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MangaSearchState {
  params: SearchMangaParams,
}

const initialState: MangaSearchState = {
  params: {},
};

const mangaSearchSlice = createSlice({
  name: 'mangaSearch',
  initialState,
  reducers: {
    updateParams(state, action: PayloadAction<SearchMangaParams>) {
      state.params = { ...state.params, ...action.payload };
    },
  },
});

export const { updateParams } = mangaSearchSlice.actions;

export default mangaSearchSlice.reducer;
