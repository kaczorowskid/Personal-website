import { motion } from "framer-motion";
import styled from "styled-components";
import mcgowan from '../../../assets/img/mcgowan.jpg';
import { colorConfig } from "../../../colorsConfig";
import { device } from "../../../helper/deviceSize";

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
  color: ${colorConfig.darkYellow};
  font-size: 4rem;
  font-family: 'Press Start 2P';

  @media only screen and (${device.laptop}) {
      font-size: 3rem;
  }
`;