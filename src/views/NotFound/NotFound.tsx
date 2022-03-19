import React from 'react';
import {
  Container
} from './NotFound.styled';
import { Navbar } from '@components/Navbar';

const NotFound: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        404
      </Container>
    </>
  )
}

export default NotFound;