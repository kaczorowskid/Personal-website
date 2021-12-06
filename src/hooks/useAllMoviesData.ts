import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';

export const useAllMoviesData = () => {
    const data = useSelector((state: RootState) => state.post.dataAll.results)
    // const id = useSelector((state: RootState) => state.post.dataAll.results.url)

    return {
        data
    }
}