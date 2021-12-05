import React, { useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar/Navbar'
import AboutMe from './views/AboutMe/AboutMe';
import { useAllMoviesData } from './hooks/useAllMoviesData';

import { useDispatch } from 'react-redux'
import { getAllMovies, getOneMovie } from './reducers/movies';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies())
  }, [])

  const { data } = useAllMoviesData();

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AboutMe />
      <button onClick={() => dispatch(getAllMovies())} >Get all</button>
      <button onClick={() => dispatch(getOneMovie(1))} >one</button>
    </>
  );
}

export default App;
