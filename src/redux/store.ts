import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mangaSearchReducer from 'redux/slices/mangaSearchSlice';
import mangaReaderReducer from 'redux/slices/mangaReaderSlice';

const rootReducer = combineReducers({
  mangaSearchReducer,
  mangaReaderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
