import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from './GlobalStyle';
import AboutMe from './views/AboutMe/AboutMe';
import StarWarsMovieInfo from './views/StarWarsMovieInfo/StarWarsMovieInfo';

import { config } from './config';

const App = () => {

  const { aboutMe, movie } = config.routerPath;

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path = {aboutMe} element = {<AboutMe />} />
          <Route path = {movie} element = {<StarWarsMovieInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
