import React from 'react';
import GlobalStyle from './GlobalStyle';
import AboutMe from './views/AboutMe/AboutMe';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
