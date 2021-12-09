import React, { useEffect } from 'react';
import Gallery from '../../components/AboutMe/Gallery/Gallery';
import PersonalDescription from '../../components/AboutMe/PersonalDescription/PersonalDescription';
import StarWars from '../../components/AboutMe/StarWars/StarWars';
import Welcome from '../../components/AboutMe/Welcome/Welcome';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch } from 'react-redux'
import { getAllMovies } from '../../reducers/movies';
import Technologies from '../../components/AboutMe/Technologies/Technologies';
import Test from '../../components/AboutMe/Test/Test';

const AboutMe: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies())
  }, [])

  return (
    <>
      <Navbar />
      <Welcome />
      <PersonalDescription />
      <Gallery />
      <Technologies />
      <StarWars />
      <Footer />
    </>
  )
}

export default AboutMe;