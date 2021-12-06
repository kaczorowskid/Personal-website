import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export const useMovieData = () => {
    const data = useSelector((state: RootState) => state.post.dataOne)

    return {
        data
    }
}