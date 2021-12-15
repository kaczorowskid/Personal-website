import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export const useLoadingStatus = () => {
  const loading = useSelector((state: RootState) => state?.movies.loading)

  return {
    loading
  }
}