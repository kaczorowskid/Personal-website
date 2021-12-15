import React, { Fragment, useEffect } from 'react';
import * as styled from './StarWarsCard.styled';
import ReactLoading from "react-loading";
import { config } from '../../../config';
import { useParams } from 'react-router-dom';
import { useMovieData } from '../../../hooks/useMovieData';
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
    <styled.Container data={dataOneMovie}>
      <styled.ExitIconContainer onClick={() => navigate(aboutMe)} >
        <styled.ExitIcon />
      </styled.ExitIconContainer>
      {!loading ? <Fragment>
        <styled.TextContainer title='Title' >
          <styled.Text>{dataOneMovie.title}</styled.Text>
        </styled.TextContainer>
        <styled.TextContainer title='Producer'>
          <styled.Text>{dataOneMovie.producer}</styled.Text>
        </styled.TextContainer>
        <styled.TextContainer title='Director'>
          <styled.Text>{dataOneMovie.director}</styled.Text>
        </styled.TextContainer>
        <styled.TextContainer title='Relase data'>
          <styled.Text>{dataOneMovie.release_date}</styled.Text>
        </styled.TextContainer>
        <styled.TextContainerBig>
          <styled.TextBig>{dataOneMovie.opening_crawl}</styled.TextBig>
        </styled.TextContainerBig>
      </Fragment> :
        <styled.LoadingContainer >
          <ReactLoading type='spin' width={100} />
        </styled.LoadingContainer>}

    </styled.Container>
  )
}

export default StarWarsCard;