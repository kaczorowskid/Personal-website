import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from '@reducers';

export const store = configureStore({
  reducer: {
    movies: moviesReducer.reducer
  }
})
