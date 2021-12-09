import React from 'react';
import * as styled from './Starts.styled';

interface Props {
  children: React.ReactNode
}

const Stars: React.FC<Props> = ({ children }) => {
  return (
    <styled.Container>
      <styled.Star1 />
      <styled.Star2 />
      <styled.Star3 />
      {children}
    </styled.Container>
  )
}

export default Stars;