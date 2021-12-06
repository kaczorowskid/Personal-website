import React from 'react';
import Device from '../../components/Home/Device/Device';
import Hello from '../../components/Home/Hello/Hello';
import Navbar from '../../components/Navbar/Navbar';

const Home: React.FC = () => {
    return (
        <>
        <Navbar />
        <Hello />
        <Device />
        </>
    )
}

export default Home;