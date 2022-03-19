import React, { useEffect } from 'react';
import { Gallery, PersonalDescription, StarWars, Welcome, Technologies } from '@components/AboutMe';
import { Footer } from '@components/Footer';
import { Navbar } from '@components/Navbar';
import { useDispatch } from 'react-redux';
import { getAllMovies } from '@reducers';

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