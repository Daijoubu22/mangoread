import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { mangaApi } from 'store/api/mangaApi';

const rootReducer = combineReducers({
  [mangaApi.reducerPath]: mangaApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mangaApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
