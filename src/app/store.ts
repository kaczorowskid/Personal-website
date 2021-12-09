import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../reducers/movies';

export const store = configureStore({
  reducer: {
    movies: postsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>