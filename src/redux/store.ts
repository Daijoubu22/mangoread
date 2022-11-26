import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mangaSearchReducer from 'redux/slices/mangaSearchSlice';

const rootReducer = combineReducers({
  mangaSearchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
