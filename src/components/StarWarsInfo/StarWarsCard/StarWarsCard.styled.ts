import styled from "styled-components";
import { Cross } from '@styled-icons/entypo';
import { device } from "../../../helper/deviceSize";
import { colorConfig } from "../../../colorsConfig";

export const Container = styled.div<{ data?: any }>`
  width: 1000px;
  height: 700px;
  border: 5px solid ${colorConfig.white};
  border-radius: 10px;
  -webkit-box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
  box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
  display: flex;
  position: relative;

  ${({ data }) => data ? ({
  'flex-direction': 'column',
  'align-items': 'center'
  }) : ({
  'align-items': 'cente',
  'justify-content': 'center'
  })}

  @media only screen and (${device.laptop}) {
    width: 95%;
    height: 90%;
  }
`;

export const TextContainer = styled.div<{title: string}>`
  width: 90%;
  height: 10%;
  border-bottom: 3px dotted ${colorConfig.yellow};
  font-family: 'Press Start 2P';
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  position: relative;

  @media only screen and (${device.laptop}) {
    justify-content: flex-end;
  }

  &::before {
    content: "${({ title }) => title}";
    position: absolute;
    color: ${colorConfig.yellow};
    bottom: 0px;
    left: 0;

    @media only screen and (${device.laptop}) {
      font-size: 0.75rem;
    }

    @media only screen and (${device.mobileM}) {
      font-size: 0.6rem;
    }
  }

`;

export const Text = styled.span`
  font-family: 'Press Start 2P';
  color: ${colorConfig.yellow};
  font-size: 0.9rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  width: 60%;

  @media only screen and (${device.laptop}) {
    font-size: 0.75rem;
  }

  @media only screen and (${device.mobileM}) {
    font-size: 0.6rem;
  }
`;

export const TextContainerBig = styled.div`
  width: 90%;
  height: 55%;
  margin: 10px 0;
  position: relative;
  font-family: 'Press Start 2P';
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBig = styled.span`
  font-family: 'Press Start 2P';
  color: ${colorConfig.yellow};
  font-size: 0.9rem;
  height: 100%;
`;

export const ExitIconContainer = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export const ExitIcon = styled(Cross)`
  color: ${colorConfig.red};
  position: absolute;
  width: 100%;
  height: 100%;
`;