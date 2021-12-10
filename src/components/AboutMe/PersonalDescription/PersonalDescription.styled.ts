import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../../helper/deviceSize";
import { colorConfig } from "../../../colorsConfig";

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
  border: 5px solid ${colorConfig.black};
  border-radius: 5px;
  position: relative;
  transform-style: preserve-3d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (${device.tablet}) {
    width: 90%;
    height: 70%;
    display: block;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: ${colorConfig.lightPink};
    top: 30px;
    left: 30px;
    position: absolute;
    transform: translateZ(-1px);

    @media only screen and (${device.laptop}) {
      top: 20px;
      left: 20px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: 100%;

  @media only screen and (${device.laptop}) {
    width: 100%;
    height: 30%;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  height: 80%;

  @media only screen and (${device.laptop}) {
    width: 100%;
    height: 70%;
    text-align: center;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 1.3rem;
`;