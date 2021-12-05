import React, { useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar/Navbar'
import AboutMe from './views/AboutMe/AboutMe';

import { useDispatch } from 'react-redux'
import { getAllMovies } from './reducers/movies';
import Footer from './components/Footer/Footer';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies())
  }, [])

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
