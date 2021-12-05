import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/movies';


export const store = configureStore({
    reducer: {
        post: postsReducer
    }
})