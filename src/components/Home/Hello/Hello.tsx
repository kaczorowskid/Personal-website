import React from 'react';
import * as styled from './Hello.styled';
import { useScrollValue } from '../../../hooks/useScrollValue';
import ScrollDownIcon from '../ScrollDownIcon/ScrollDownIcon';
import { randomNumber } from '../../../helper/randomNumber';
const Hello: React.FC = () => {

  const { scrollValue } = useScrollValue();

  return (
    <styled.Container>
      <styled.TextContainer pos={scrollValue}>
        <styled.Text>Hi, my name is</styled.Text>
      </styled.TextContainer>
      <styled.TextContainer pos={scrollValue}>
        {[...'Damian'].map((letter: string, i: number) => (
          <styled.Text
            key={i}
            initial={{ x: randomNumber(0, -window.screen.width / 2), y: randomNumber(0, -window.screen.height) }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 2 }}
          >{letter}</styled.Text>
        ))}
      </styled.TextContainer>
      <ScrollDownIcon />
    </styled.Container>
  )
}

export default Hello;