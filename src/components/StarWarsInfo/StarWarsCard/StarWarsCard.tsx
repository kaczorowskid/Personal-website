import React, { Fragment, useEffect } from 'react';
import {
  Container,
  ExitIconContainer,
  ExitIcon,
  TextContainer,
  Text,
  TextContainerBig,
  TextBig,
  LoadingContainer
} from './StarWarsCard.styled';
import ReactLoading from "react-loading";
import { config } from '@config';
import { useParams } from 'react-router-dom';
import { useMovieData } from '@hooks';
import { useDispatch } from 'react-redux';
import { getOneMovie } from '../../../reducers/movies';
import { useNavigate } from 'react-router';

const StarWarsCard: React.FC = () => {

  const { id } = useParams();
  const { dataOneMovie, loading } = useMovieData();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { aboutMe } = config.routerPath;

  useEffect(() => {
    dispatch(getOneMovie(Number(id)))
  }, [])

  return (
    <Container data={dataOneMovie}>
      <ExitIconContainer onClick={() => navigate(aboutMe)} >
        <ExitIcon />
      </ExitIconContainer>
      {!loading ? <Fragment>
        <TextContainer title='Title' >
          <Text>{dataOneMovie.title}</Text>
        </TextContainer>
        <TextContainer title='Producer'>
          <Text>{dataOneMovie.producer}</Text>
        </TextContainer>
        <TextContainer title='Director'>
          <Text>{dataOneMovie.director}</Text>
        </TextContainer>
        <TextContainer title='Relase data'>
          <Text>{dataOneMovie.release_date}</Text>
        </TextContainer>
        <TextContainerBig>
          <TextBig>{dataOneMovie.opening_crawl}</TextBig>
        </TextContainerBig>
      </Fragment> :
        <LoadingContainer >
          <ReactLoading type='spin' width={100} />
        </LoadingContainer>}

    </Container>
  )
}

export default StarWarsCard;