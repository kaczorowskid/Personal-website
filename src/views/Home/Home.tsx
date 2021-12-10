import React from 'react';
import Footer from '../../components/Footer/Footer';
import Device from '../../components/Home/Device/Device';
import End from '../../components/Home/End/End';
import Hello from '../../components/Home/Hello/Hello';
import Navbar from '../../components/Navbar/Navbar';

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