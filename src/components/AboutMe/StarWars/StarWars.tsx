import React from 'react';
import * as styled from './StarWars.styled';
import { useAllMoviesData } from '../../../hooks/useAllMoviesData';

const StarWars: React.FC = () => {

    const { data } = useAllMoviesData();

    return (
        <>
            <styled.Container>
                <styled.CardsContainer>
                    {data && data.map((item: any, i: number) => (
                        <styled.StarWarsCardContainer key={i} >
                            <styled.StarWarsHeaderConatiner>
                                <styled.StarWarsHeader>Star</styled.StarWarsHeader>
                                <styled.StarWarsHeader>Wars</styled.StarWarsHeader>
                            </styled.StarWarsHeaderConatiner>
                            <styled.TitleContainer>
                                <styled.MovieTitle>{item.title}</styled.MovieTitle>
                            </styled.TitleContainer>
                        </styled.StarWarsCardContainer>
                    ))}
                </styled.CardsContainer>
            </styled.Container>
        </>
    )
}

export default StarWars;