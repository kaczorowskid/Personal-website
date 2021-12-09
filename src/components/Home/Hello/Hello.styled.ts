import { motion } from "framer-motion";
import styled from "styled-components";
import mcgowan from '../../../assets/img/mcgowan.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${mcgowan});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const TextContainer = styled.div<{pos?: number}>`
  position: relative;
  display: flex;
  text-align: center;
  top: calc(-${({ pos}) => (pos! / window.screen.height) * 30}%);
`;

export const Text = styled(motion.div)`
  color: #646400;
  font-size: 4rem;
  font-family: 'Press Start 2P';
`;