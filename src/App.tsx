import React from 'react';

import GlobalStyle from './GlobalStyle';
import Home from './views/Home/Home';
import AboutMe from './views/AboutMe/AboutMe';
import StarWarsMovieInfo from './views/StarWarsMovieInfo/StarWarsMovieInfo';

import { config } from './config';
import AppRouting from './routes/AppRouting';
import { IRoutingTypes } from './types/IRoutingType';

const App = () => {

  const { home, aboutMe, movie } = config.routerPath;

  const routes: Array<IRoutingTypes> = [
    {
      path: home,
      element: <Home />
    },
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
