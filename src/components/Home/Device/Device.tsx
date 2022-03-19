import React from 'react';
import {
  Container,
  TextContainer,
  Text,
  Mask,
  ImageConatiner
} from './Device.styled';
import { site } from '@assets/img';
import { useScrollValue } from '@hooks';

const Device: React.FC = () => {

  const { scrollValue } = useScrollValue();

  return (
    <Container>
      <TextContainer pos={scrollValue} >
        <Text>Check About section ;)</Text>
      </TextContainer>
      <Mask />
      <ImageConatiner>
        <img style={{ width: '100%', height: '100%' }} src={site} alt="" />
      </ImageConatiner>
    </Container>
  )
}

export default Device;