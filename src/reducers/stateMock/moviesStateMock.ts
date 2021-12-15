import { IMovie } from "../../types/IMovie";
import { IMovies } from "../../types/IMovies";

export interface Istate {
  loading: boolean,
  dataAll: IMovies;
  dataOne: IMovie;
}

export const moviesStateMock: Istate = {
  loading: true, 
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