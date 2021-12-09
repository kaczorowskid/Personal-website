import styled from "styled-components";
import { motion } from 'framer-motion';
import { device } from "../../../helper/deviceSize";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImageContainer = styled(motion.div)`
  width: 530px;
  height: 410px;

  @media only screen and (${device.laptop}) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  width: 500px;
  height: 300px;
  z-index: 1;

  @media only screen and (${device.laptop}) {
    width: 90%;
  }
`;

export const MyWelcomeContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyWelcome = styled(motion.span)`
  font-size: 4rem;
  font-weight: bold;

  @media only screen and (${device.laptop}) {
    font-size: 3rem;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled(motion.span)`
  /* font-size: 36px; */
  font-size: 2rem;

  @media only screen and (${device.laptop}) {
    font-size: 1.5rem;
  }
`;