import React from 'react';
import PersonalDescription from '../../components/AboutMe/PersonalDescription/PersonalDescription';
import Welcome from '../../components/AboutMe/Welcome/Welcome';

const AboutMe: React.FC = () => {
    return (
        <>
        <Welcome />
        <PersonalDescription />
        </>
    )
}

export default AboutMe;