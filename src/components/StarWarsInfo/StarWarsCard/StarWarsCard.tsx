import React, { Fragment, useEffect } from 'react';
import * as styled from './StarWarsCard.styled';
import ReactLoading from "react-loading";
import { config } from '../../../config';
import { useParams } from 'react-router-dom';
import { useMovieData } from '../../../hooks/useMovieData';
import { useDispatch } from 'react-redux';
import { getOneMovie } from '../../../reducers/movies';
import { useNavigate } from 'react-router';
import { useLoadingStatus } from '../../../hooks/useLoadingStatus';

const StarWarsCard: React.FC = () => {

  const { id } = useParams();
  const { data } = useMovieData();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading } = useLoadingStatus();

  const { aboutMe } = config.routerPath;

  useEffect(() => {
    dispatch(getOneMovie(Number(id)))
  }, [])

  return (
    <styled.Container data={data}>
      <styled.ExitIconContainer onClick={() => navigate(aboutMe)} >
        <styled.ExitIcon />
      </styled.ExitIconContainer>
      {!loading ? <Fragment>
        <styled.TextContainer title='Title' >
          <styled.Text>{data.title}</styled.Text>
        </styled.TextContainer>
        <styled.TextContainer title='Producer'>
          <styled.Text>{data.producer}</styled.Text>
        </styled.TextContainer>
        <styled.TextContainer title='Director'>
          <styled.Text>{data.director}</styled.Text>
        </styled.TextContainer>
        <styled.TextContainer title='Relase data'>
          <styled.Text>{data.release_date}</styled.Text>
        </styled.TextContainer>
        <styled.TextContainerBig>
          <styled.TextBig>{data.opening_crawl}</styled.TextBig>
        </styled.TextContainerBig>
      </Fragment> :
        <styled.LoadingContainer >
          <ReactLoading type='spin' width={100} />
        </styled.LoadingContainer>}

    </styled.Container>
  )
}

export default StarWarsCard;