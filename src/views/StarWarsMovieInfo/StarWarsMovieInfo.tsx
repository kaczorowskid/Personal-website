import React from 'react';
import Stars from '../../components/StarWarsInfo/Stars/Stars';
import StarWarsCard from '../../components/StarWarsInfo/StarWarsCard/StarWarsCard';

const StarWarsMovieInfo: React.FC = () => {
    return (
        <>
            <Stars>
                <StarWarsCard />
            </Stars>
        </>
    )
}

export default StarWarsMovieInfo;