import React from 'react';
import GlobalStyle from './GlobalStyle';
import AboutMe from './views/AboutMe/AboutMe';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarWarsMovieInfo from './views/StarWarsMovieInfo/StarWarsMovieInfo';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path = '/starwars' element = {<StarWarsMovieInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
