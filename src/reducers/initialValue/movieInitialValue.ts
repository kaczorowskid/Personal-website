import { IMovie, IMovies } from '@types'

export interface Istate {
  loading: boolean,
  dataAll: IMovies;
  dataOne: IMovie;
}

export const movieInitialValue: Istate = {
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