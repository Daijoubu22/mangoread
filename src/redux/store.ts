import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mangaSearchReducer from 'redux/slices/mangaSearchSlice';
import mangaReaderReducer from 'redux/slices/mangaReaderSlice';
import mangaPageReducer from 'redux/slices/mangaPageSlice';

const rootReducer = combineReducers({
  mangaSearchReducer,
  mangaReaderReducer,
  mangaPageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
