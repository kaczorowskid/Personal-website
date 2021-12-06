import React, { Fragment, useEffect } from 'react';
import * as styled from './StarWarsCard.styled';
import ReactLoading from "react-loading";
import { useParams } from 'react-router-dom';
import { useMovieData } from '../../../hooks/useMovieData';
import { useDispatch } from 'react-redux';
import { getOneMovie } from '../../../reducers/movies';

const StarWarsCard: React.FC = () => {

    const { id } = useParams();
    const { data } = useMovieData();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneMovie(Number(id)))
    }, [])


    return (
        <styled.Container data={data}>
            {data ? <Fragment>
                <styled.TextContainer>
                    <styled.LineTitle>Title</styled.LineTitle>
                    <styled.Text>{data.title}</styled.Text>
                </styled.TextContainer>
                <styled.TextContainer>
                    <styled.LineTitle>Director</styled.LineTitle>
                    <styled.Text>{data.producer}</styled.Text>
                </styled.TextContainer>
                <styled.TextContainer>
                    <styled.LineTitle>Producer</styled.LineTitle>
                    <styled.Text>{data.director}</styled.Text>
                </styled.TextContainer>
                <styled.TextContainer>
                    <styled.LineTitle>Relase Date</styled.LineTitle>
                    <styled.Text>{data.release_date}</styled.Text>
                </styled.TextContainer>
                <styled.TextContainer1>
                    <styled.LineTitle>Relase Date</styled.LineTitle>
                    <styled.Text>{data.opening_crawl}</styled.Text>
                </styled.TextContainer1>
            </Fragment> : <ReactLoading type='spin' width={100} />}
        </styled.Container>
    )
}

export default StarWarsCard;