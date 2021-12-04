import React from 'react';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './views/AboutMe/AboutMe';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AboutMe />
    </>
  );
}

export default App;
