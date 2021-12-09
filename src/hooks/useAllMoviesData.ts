import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export const useAllMoviesData = () => {
  const data = useSelector((state: RootState) => state.movies.dataAll.results)

  return {
    data
  }
}