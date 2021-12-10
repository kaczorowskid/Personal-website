import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { config } from "../config";
import { callApi } from "../helper/callApi";
import { IMovie } from "../types/IMovie";
import { IMovies } from "../types/IMovies";

const { moviesApiPath } = config.requestsPath

export const getAllMovies = createAsyncThunk("movies/getAllMovies", async () => {
  const response = await callApi<IMovies>(moviesApiPath)
  return response
});

export const getOneMovie = createAsyncThunk('movies/getOneMovie', async (movieId: number) => {
  const response = await callApi<IMovie>(`${moviesApiPath}/${movieId}`)
  return response
})

interface Istate {
  dataAll: IMovies;
  dataOne: IMovie;
}

const initialState: Istate = {
  dataAll: {
    results: [
      {
        title: '',
        url: ''
      }
    ]
  },
  dataOne: {
    title: '',
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '',
  }
}

const moviesReducer = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<Istate>) => {
    builder.addCase(getAllMovies.fulfilled, (state: Istate, { payload }: PayloadAction<IMovies>) => {
      state.dataAll = payload
      state.dataOne = undefined
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

