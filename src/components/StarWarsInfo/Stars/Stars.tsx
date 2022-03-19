import React from 'react';
import {
  Container,
  Star1,
  Star2,
  Star3,
  ContentContainer
} from './Starts.styled';

interface Props {
  children: React.ReactNode
}

const Stars: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Container>
        <Star1 />
        <Star2 />
        <Star3 />
      </Container>
      <ContentContainer>
        {children}
      </ContentContainer>
    </>
  )
}

export default Stars;