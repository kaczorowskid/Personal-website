import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export const useMovieData = () => {
  const dataOneMovie = useSelector((state: RootState) => state?.movies.dataOne)
  const dataAllMovies = useSelector((state: RootState) => state?.movies.dataAll.results)
  const loading = useSelector((state: RootState) => state?.movies.loading)

  return {
    dataOneMovie,
    dataAllMovies,
    loading
  }
}