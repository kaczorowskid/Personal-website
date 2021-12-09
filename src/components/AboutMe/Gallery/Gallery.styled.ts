import styled from "styled-components";
import { device } from "../../../helper/deviceSize";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background: #F1B9B9;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (${device.laptop}) {
    height: 100vh;
  }
`;

export const CardContainer = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (${device.laptop}) {
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const ImageConatiner = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (${device.laptop}) {
    width: 90%;
    height: 30%;
    margin: 10px 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;


