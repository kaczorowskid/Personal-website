import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export const useMovieData = () => {
    const data = useSelector((state: RootState) => state.movies.dataOne)

    return {
        data
    }
}