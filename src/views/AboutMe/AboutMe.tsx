import React from 'react';
import Gallery from '../../components/AboutMe/Gallery/Gallery';
import PersonalDescription from '../../components/AboutMe/PersonalDescription/PersonalDescription';
import StarWars from '../../components/AboutMe/StarWars/StarWars';
import Welcome from '../../components/AboutMe/Welcome/Welcome';

const AboutMe: React.FC = () => {
    return (
        <>
        <Welcome />
        <PersonalDescription />
        <Gallery />
        <StarWars />
        </>
    )
}

export default AboutMe;