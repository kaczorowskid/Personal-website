import styled from "styled-components";
import stopka from '../../../assets/img/stopka.png';


export const Container = styled.div`
    top: 0;
    width: 100%;
    height: 240vh;
    position: relative;
    background: black;
    z-index: 0;
`;

export const Compjuter = styled.div`
    top: 0;
    border: 5px solid black;
    width: 40%;
    height: 45vh;
    margin-top: calc(40vh);
    background: red;
    opacity: 0.5;
    z-index: 100;
`;

export const ImageConatiner = styled.div`
    position: absolute;
    width: 40%;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 180vh;
    z-index: -1;
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
        width: 100%;
        height: 27.5vh;
        position: absolute;
        top: 0;
        left: 0;
        background: black;
    }

    &::after{
        content: '';
        width: 100%;
        height: 32.5vh;
        position: absolute;
        bottom: 0;
        left: 0;
        background: black;

        background-image: url(${stopka});
        background-repeat: no-repeat;
        background-size: 25% 50%;
        background-position: 50% 0;
    }
`;

export const TextContainer = styled.div<{pos?: number}>`
    top: 50%;
    transform: translate(0%, -50%);
    width: 500px;
    height: 100px;
    position: fixed;
    z-index: -1;
    left: calc(120vh + 100% - ${({ pos }) => (pos! / window.screen.width * 1.5) * 100}%);
    text-align: center;
`;

export const Text = styled.span`
    font-family: 'Press Start 2P';
    font-size: 30px;
    color: white;
`;

