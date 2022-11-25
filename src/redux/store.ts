import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { mangaApi } from 'redux/api/mangaApi';
import mangaSearchReducer from 'redux/slices/mangaSearchSlice';
import { statisticsApi } from 'redux/api/statisticsApi';

const rootReducer = combineReducers({
  mangaSearchReducer,
  [mangaApi.reducerPath]: mangaApi.reducer,
  [statisticsApi.reducerPath]: statisticsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    mangaApi.middleware,
    statisticsApi.middleware,
  ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
