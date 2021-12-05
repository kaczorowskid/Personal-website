import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../reducers/movies';

export const store = configureStore({
    reducer: {
        post: postsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>