import styled from "styled-components";
import { device } from "../../../helper/deviceSize";
import { colorConfig } from "../../../colorsConfig";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${colorConfig.white};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (${device.laptop}) {
    height: 120vh;
  }
`;

export const CardsContainer = styled.div`
  width: 1000px;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  @media only screen and (${device.laptop}) {
    width: 90%;
    height: 100vh;
    flex-direction: column;
  }

  &::before {
    content: "Did you know that?";
    position: absolute;
    font-size: 2rem;
    top: -50px;
    left: 20px;
    font-family: 'Press Start 2P';
  }
`;

export const Card = styled.div<{title: string, touch: number}>`
  width: 30%;
  height: 90%;
  border: 3px solid ${colorConfig.beige};
  position: relative;
  transform-style: preserve-3d;
  background: ${colorConfig.lighterPink};
  border-radius: 20px;
  cursor: pointer;
  
  @media only screen and (${device.laptop}) {
    height: 30%;
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 20px;
    left: 20px;
    background: ${colorConfig.lightPink};
    transform: translateZ(-1px);
    border-radius: 20px;
  }

  &::after {
    content: "${({ title }) => title}";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 20px;
    background: ${colorConfig.lighterPink};
    transition: all 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
  }

  &:hover::after {
    opacity: 0;
    transition: all 1s;
  }

  &:nth-child(${({ touch }) => touch })::after {
    opacity: 0;
  }
`;

export const CardTitleContainer = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
export const CardContentContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: justify;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 1rem;

  @media only screen and (${device.laptop}) {
    font-size: 0.8rem;
  }
`;