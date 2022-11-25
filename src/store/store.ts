import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { mangaApi } from 'store/api/mangaApi';
import mangaSearchReducer from 'store/reducers/mangaSearchReducer';

const rootReducer = combineReducers({
  mangaSearchReducer,
  [mangaApi.reducerPath]: mangaApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mangaApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
