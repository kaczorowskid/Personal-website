import React from 'react';
import * as styled from './StarWars.styled';
import ReactLoading from "react-loading";
import { urlParser } from '@helper';
import { useNavigate } from "react-router-dom";
import { useMovieData } from '@hooks'

const StarWars: React.FC = () => {

  const { dataAllMovies, loading } = useMovieData();
  const navigate = useNavigate()

  return (
    <styled.Container>
      <styled.CardsContainer>
        {!loading ? dataAllMovies.map((item: any, i: number) => (
          <styled.StarWarsCardContainer
            onClick={() => navigate(`/movie/${urlParser(item.url)}`)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ...(i % 2 !== 0) && { delay: 0.5 },
              duration: 1
            }}
            key={i} >
            <styled.StarWarsHeaderConatiner>
              <styled.StarWarsHeader>Star</styled.StarWarsHeader>
              <styled.StarWarsHeader>Wars</styled.StarWarsHeader>
            </styled.StarWarsHeaderConatiner>
            <styled.TitleContainer>
              <styled.MovieTitle>{item.title}</styled.MovieTitle>
            </styled.TitleContainer>
          </styled.StarWarsCardContainer>
        )) : <ReactLoading type='spin' width={100} height={100} color='black' />}
      </styled.CardsContainer>
    </styled.Container>
  )
}

export default StarWars;