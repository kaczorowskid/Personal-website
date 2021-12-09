import React from 'react';
import * as styled from './Hello.styled';
import { motion } from 'framer-motion';
import { useScrollValue } from '../../../hooks/useScrollValue';
import ScrollDownIcon from '../ScrollDownIcon/ScrollDownIcon';

function rand(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Hello: React.FC = () => {

  const { scrollValue } = useScrollValue();

  return (
    <styled.Container>
      {/* {[...'dupa'].map((letter, i) => {
        return (
          <>
            <motion.div
            style = {{color: 'yellow', fontSize: '50px', position: 'relative', top: '300px'}}
            initial = {{x: rand(0, window.screen.width), y: rand(0, window.screen.height)}}
            animate = {{x: 0, y: 0}}
            transition = {{duration: 2}}
            >{letter}</motion.div>
          </>
        )
      })} */}
      <styled.TextContainer pos = {scrollValue}>
        <styled.Text>Damian</styled.Text>
      </styled.TextContainer>
      <ScrollDownIcon />
    </styled.Container>
  )
}

export default Hello;