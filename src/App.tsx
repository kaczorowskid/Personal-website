import React from 'react';

import GlobalStyle from './GlobalStyle';
import AboutMe from './views/AboutMe/AboutMe';
import StarWarsMovieInfo from './views/StarWarsMovieInfo/StarWarsMovieInfo';

import { config } from './config';
import AppRouting from './routes/AppRouting';

const App = () => {

  const { aboutMe, movie } = config.routerPath;

  const routes = [
    {
      path: aboutMe,
      element: <AboutMe />
    },
    {
      path: movie,
      element: <StarWarsMovieInfo />
    }
  ]

  return (
    <>
      <GlobalStyle />
      <AppRouting routes = {routes} />
    </>
  );
}

export default App;
