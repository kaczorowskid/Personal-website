import styled from "styled-components";
import { colorConfig } from "../../colorsConfig";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: ${colorConfig.lightBlack};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  color: ${colorConfig.yellow};
`;