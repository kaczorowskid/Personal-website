import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { config } from "../config";
import { callApi } from "../helper/callApi";

const { moviesApiPath } = config.requestsPath

export const getAllMovies = createAsyncThunk("movies/getAll", async () => {
    const { response } = await callApi(moviesApiPath)
    return response
});

export const getOneMovie = createAsyncThunk('movie/getOneMovie', async ( movieId: number) => {
    const { response } = await callApi(`${moviesApiPath}/${movieId}`)
    return response
})

const postsReducer = createSlice({
    name: 'movies',
    initialState: {
        dataAll: {},
        dataOne: {}
    },
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(getAllMovies.fulfilled, (state: any, {payload}: any) => {
            state.dataAll = payload
        });
        builder.addCase(getAllMovies.rejected, () => {
            console.error("Any error to get all data");
        });
        builder.addCase(getOneMovie.fulfilled, (state: any, {payload}: any) => {
            state.dataOne = payload
        });
        builder.addCase(getOneMovie.rejected, () => {
            console.error("Any error to get one data");
        });
    }
})

export default postsReducer.reducer;

