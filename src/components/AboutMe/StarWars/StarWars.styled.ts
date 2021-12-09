import { motion } from "framer-motion";
import styled from "styled-components";
import stars from '../../../assets/img/stars.svg';

export const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardsContainer = styled.div`
  padding: 5px;
  width: 1000px;
  border: 5px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  background: white;
  border-radius: 20px;
  margin-bottom: 50px;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: #393535;
    top: 30px;
    left: 30px;
    position: absolute;
    z-index: -1;
  }
`;

export const StarWarsCardContainer = styled(motion.div)`
  margin: 10px;
  width: 380px;
  height: 410px;
  background-image: url(${stars});
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid white;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    border: 4px solid yellow;
  }
`;

export const StarWarsHeaderConatiner = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
`;

export const StarWarsHeader = styled.span`
  font-family: 'Press Start 2P';
  color: #f6e41a;
`;

export const TitleContainer = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const MovieTitle = styled.div`
  color: white;
  font-size: 15px;
  font-family: 'Press Start 2P';
`;