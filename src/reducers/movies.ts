import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { config } from '@config';
import { callApi } from '@helper';
import { IMovie, IMovies } from '@types';
import { Istate, movieInitialValue } from "./initialValue";

const { moviesApiPath } = config.requestsPath

export const getAllMovies = createAsyncThunk("movies/getAllMovies", async () => {
  return await callApi<IMovies>(moviesApiPath)
});

export const getOneMovie = createAsyncThunk('movies/getOneMovie', async (movieId: number) => {
  return await callApi<IMovie>(`${moviesApiPath}/${movieId}`)
})

export const moviesReducer = createSlice({
  name: 'movies',
  initialState: movieInitialValue,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<Istate>) => {
    builder.addCase(getAllMovies.pending, (state: Istate) => {
      state.loading = true
    });
    builder.addCase(getAllMovies.fulfilled, (state: Istate, { payload }: PayloadAction<IMovies>) => {
      state.loading = false
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
    builder.addCase(getOneMovie.pending, (state: Istate) => {
      state.loading = true
    });
    builder.addCase(getOneMovie.fulfilled, (state: Istate, { payload }: PayloadAction<IMovie>) => {
      state.loading = false
      state.dataOne = payload
    });
    builder.addCase(getOneMovie.rejected, () => {
      console.error("Any error to get one data");
    });
  }
})

// export moviesReducer.reducer;

