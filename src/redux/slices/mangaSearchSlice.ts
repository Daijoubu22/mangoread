import { GetMangaListResponse, SearchMangaParams } from 'services/queries/mangaQueries';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Manga from 'services/models/Manga';
import Statistics from 'services/models/Statistics';

interface MangaSearchState {
  mangaList: Manga[],
  mangaTotalCount: number,
  statistics: Record<string, Statistics> | undefined;
  isLoading: boolean,
  params: SearchMangaParams,
  modalParams: SearchMangaParams,
  error: string,
}

const initialState: MangaSearchState = {
  mangaList: [],
  mangaTotalCount: 0,
  statistics: undefined,
  isLoading: false,
  params: {},
  modalParams: {},
  error: '',
};

const mangaSearchSlice = createSlice({
  name: 'mangaSearch',
  initialState,
  reducers: {
    mangaFetching(state) {
      state.isLoading = true;
    },
    mangaFetchingSuccess(state, action: PayloadAction<GetMangaListResponse>) {
      state.isLoading = false;
      state.error = '';
      state.mangaList = action.payload.data;
      state.mangaTotalCount = action.payload.total;
    },
    fetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    statisticsFetchingSuccess(state, action: PayloadAction<Record<string, Statistics>>) {
      state.statistics = action.payload;
    },
    updateParams(state, action: PayloadAction<SearchMangaParams>) {
      state.params = { ...state.params, ...action.payload };
    },
    updateModalParams(state, action: PayloadAction<SearchMangaParams>) {
      state.modalParams = { ...state.modalParams, ...action.payload };
    },
  },
});

export const {
  mangaFetching,
  mangaFetchingSuccess,
  fetchingError,
  updateParams,
  updateModalParams,
  statisticsFetchingSuccess,
} = mangaSearchSlice.actions;

export default mangaSearchSlice.reducer;
