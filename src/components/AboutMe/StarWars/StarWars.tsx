import React from 'react';
import * as styled from './StarWars.styled';
import { useAllMoviesData } from '../../../hooks/useAllMoviesData';
import { urlParser } from '../../../helper/urlParser';
import { useNavigate  } from "react-router-dom";

const StarWars: React.FC = () => {

    const { data } = useAllMoviesData();
    const navigate = useNavigate ()

    return (
        <styled.Container>
            <styled.CardsContainer>
                {data && data.map((item: any, i: number) => (
                    <styled.StarWarsCardContainer
                        onClick = {() => navigate('/movie/1')} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            ...(i % 2 == 1) && { delay: 0.5 },
                            duration: 1
                        }}
                        key={i} >
                        <styled.StarWarsHeaderConatiner>
                            <styled.StarWarsHeader>Star</styled.StarWarsHeader>
                            <styled.StarWarsHeader>Wars</styled.StarWarsHeader>
                        </styled.StarWarsHeaderConatiner>
                        <styled.TitleContainer>
                            <styled.MovieTitle>{item.title}</styled.MovieTitle>
                            <styled.MovieTitle>{urlParser(item.url)}</styled.MovieTitle>
                        </styled.TitleContainer>
                    </styled.StarWarsCardContainer>
                ))}
            </styled.CardsContainer>
        </styled.Container>
    )
}

export default StarWars;