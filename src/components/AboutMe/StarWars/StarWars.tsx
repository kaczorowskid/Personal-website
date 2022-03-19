import React from 'react';
import {
  Container,
  CardsContainer,
  StarWarsCardContainer,
  StarWarsHeaderConatiner,
  StarWarsHeader,
  TitleContainer,
  MovieTitle
} from './StarWars.styled';
import ReactLoading from "react-loading";
import { urlParser } from '@helper';
import { useNavigate } from "react-router-dom";
import { useMovieData } from '@hooks'

const StarWars: React.FC = () => {

  const { dataAllMovies, loading } = useMovieData();
  const navigate = useNavigate()

  return (
    <Container>
      <CardsContainer>
        {!loading ? dataAllMovies.map((item: any, i: number) => (
          <StarWarsCardContainer
            onClick={() => navigate(`/movie/${urlParser(item.url)}`)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ...(i % 2 !== 0) && { delay: 0.5 },
              duration: 1
            }}
            key={i} >
            <StarWarsHeaderConatiner>
              <StarWarsHeader>Star</StarWarsHeader>
              <StarWarsHeader>Wars</StarWarsHeader>
            </StarWarsHeaderConatiner>
            <TitleContainer>
              <MovieTitle>{item.title}</MovieTitle>
            </TitleContainer>
          </StarWarsCardContainer>
        )) : <ReactLoading type='spin' width={100} height={100} color='black' />}
      </CardsContainer>
    </Container>
  )
}

export default StarWars;