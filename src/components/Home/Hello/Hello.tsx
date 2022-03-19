import React from 'react';
import {
  Container,
  TextContainer,
  Text
} from './Hello.styled';
import { useScrollValue } from '@hooks';
import { ScrollDownIcon } from '../ScrollDownIcon';
import { randomNumber } from '@helper';

const Hello: React.FC = () => {

  const { scrollValue } = useScrollValue();

  return (
    <Container>
      <TextContainer pos={scrollValue}>
        <Text>Hi, my name is</Text>
      </TextContainer>
      <TextContainer pos={scrollValue}>
        {[...'Damian'].map((letter: string, i: number) => (
          <Text
            key={i}
            initial={{ x: randomNumber(0, -window.screen.width / 2), y: randomNumber(0, -window.screen.height) }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 2 }}
          >{letter}</Text>
        ))}
      </TextContainer>
      <ScrollDownIcon />
    </Container>
  )
}

export default Hello;