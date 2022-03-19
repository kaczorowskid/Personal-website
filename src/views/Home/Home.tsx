import React from 'react';
import { Footer } from '@components/Footer';
import { Device, End, Hello } from '@components/Home';
import { Navbar } from '@components/Navbar';

const Home: React.FC = () => {

  return (
    <>
      <Navbar />
      <Hello />
      <Device />
      <End />
      <Footer />
    </>
  )
}

export default Home;