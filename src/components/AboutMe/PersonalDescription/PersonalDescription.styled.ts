import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CardContainer = styled(motion.div)`
  width: 1000px;
  height: 500px;
  border: 5px solid black;
  border-radius: 5px;
  position: relative;
  transform-style: preserve-3d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: #EDD9D9;
    top: 30px;
    left: 30px;
    position: absolute;
    transform: translateZ(-1px);
  }
`;

export const BlobContainer = styled(motion.div)`
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: -1;
`;

export const ImageContainer = styled(motion.div)`
  width: 30%;
  height: 60%;
`;

export const TextContainer = styled.div`
  width: 50%;
  height: 60%;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
`;

export const Description = styled.div`
  font-size: 24px;
  text-align: justify;
`;