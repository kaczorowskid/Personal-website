import styled from "styled-components";
import mcgowan from '../../../assets/img/mcgowan.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${mcgowan});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div<{pos: number}>`
  position: relative;
  /* width: 100px;
  height: 100px; */
  /* background: red; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  top: calc(-${({ pos}) => (pos! / window.screen.height) * 30}%);
`;

export const Text = styled.div`
  color: yellow;
  font-size: 30px;
  font-family: 'Press Start 2P';
`;