import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { config } from "../config";
import { callApi } from "../helper/callApi";
import { IMovie } from "../types/IMovie";
import { IMovies } from "../types/IMovies";
import { Istate, moviesStateMock } from "./stateMock/moviesStateMock";

const { moviesApiPath } = config.requestsPath

export const getAllMovies = createAsyncThunk("movies/getAllMovies", async () => {
  const response = await callApi<IMovies>(moviesApiPath)
  return response
});

export const getOneMovie = createAsyncThunk('movies/getOneMovie', async (movieId: number) => {
  const response = await callApi<IMovie>(`${moviesApiPath}/${movieId}`)
  return response
})

const initialState = moviesStateMock;

const moviesReducer = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<Istate>) => {
    builder.addCase(getAllMovies.fulfilled, (state: Istate, { payload }: PayloadAction<IMovies>) => {
      state.dataAll = payload
      state.dataOne = {
        title: '',
        opening_crawl: '',
        director: '',
        producer: '',
        release_date: ''
      }
    });
    builder.addCase(getAllMovies.rejected, () => {
      console.error("Any error to get all data");
    });
    builder.addCase(getOneMovie.fulfilled, (state: Istate, { payload }: PayloadAction<IMovie>) => {
      state.dataOne = payload
    });
    builder.addCase(getOneMovie.rejected, () => {
      console.error("Any error to get one data");
    });
  }
})

export default moviesReducer.reducer;

