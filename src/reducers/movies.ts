import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { config } from "../config";
import { callApi } from "../helper/callApi";

const { moviesApiPath } = config.requestsPath

export const getAllMovies = createAsyncThunk("movies/getAllMovies", async () => {
    const { response, error } = await callApi(moviesApiPath)
    if(error) console.log(error)
    return response
});

export const getOneMovie = createAsyncThunk('movies/getOneMovie', async (movieId: number) => {
    const { response, error } = await callApi(`${moviesApiPath}/${movieId}`)
    if(error) console.log(error)
    return response
})

interface Istate {
    dataAll: any,
    dataOne: any
}

const initialState: Istate = {
    dataAll: {},
    dataOne: {}
}

const postsReducer = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<Istate>) => {
        builder.addCase(getAllMovies.fulfilled, (state: Istate, { payload }: PayloadAction<any>) => {
            state.dataAll = payload
            state.dataOne = {}
        });
        builder.addCase(getAllMovies.rejected, () => {
            console.error("Any error to get all data");
        });
        builder.addCase(getOneMovie.fulfilled, (state: Istate, { payload }: PayloadAction<any>) => {
            state.dataOne = payload
        });
        builder.addCase(getOneMovie.rejected, () => {
            console.error("Any error to get one data");
        });
    }
})

export default postsReducer.reducer;

