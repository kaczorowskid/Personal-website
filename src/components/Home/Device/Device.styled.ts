import styled from "styled-components";
import { stopka } from '@assets/img';
import { device } from '@helper';

export const Container = styled.div`
  top: 0;
  width: 100%;
  height: 240vh;
  position: relative;
  background: ${({ theme }) => theme.white};
  z-index: 0;
`;

export const ImageConatiner = styled.div`
  position: absolute;
  width: 40%;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 180vh;
  z-index: -1;
  border-left: 5px solid ${({ theme }) => theme.black};
  border-right: 5px solid ${({ theme }) => theme.black};

  @media only screen and (${device.laptop}) {
    width: 90%;
  }
`;

export const Mask = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  position: sticky;
  z-index: 1;

  &::before {
    content: '';
    width: 40%;
    height: 27.5vh;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    background: ${({ theme }) => theme.white};
    border-bottom: 5px solid black;
    
    @media only screen and (${device.laptop}) {
      width: 90%;
    }
  }

  &::after{
    content: '';
    width: 100%;
    height: 33.5vh;
    position: absolute;
    bottom: -10px;
    left: 0;
    background: ${({ theme }) => theme.white};
    background-image: url(${stopka});
    background-repeat: no-repeat;
    background-size: 40.5% 40%;
    background-position: 50% 0;

    @media only screen and (${device.laptop}) {
      background-size: 90.5% 40%;
    }
  }
`;

export const TextContainer = styled.div<{ pos?: number }>`
  top: 50%;
  transform: translate(0%, -50%);
  width: 500px;
  height: 100px;
  position: fixed;
  z-index: -1;
  left: calc(120vh + 100% - ${({ pos }) => (pos! / window.screen.width * 1.5) * 100}%);
  text-align: center;

  @media only screen and (${device.laptop}) {
    display: none;
  }
`;

export const Text = styled.span`
  font-family: 'Press Start 2P';
  font-size: 30px;
  color: ${({ theme }) => theme.black};
`;