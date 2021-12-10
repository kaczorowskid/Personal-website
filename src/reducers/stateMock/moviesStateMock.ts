import { IMovie } from "../../types/IMovie";
import { IMovies } from "../../types/IMovies";

export interface Istate {
  dataAll: IMovies;
  dataOne: IMovie;
}

export const moviesStateMock: Istate = {
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