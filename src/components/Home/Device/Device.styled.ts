import styled from "styled-components";
import kotel from '../../../assets/img/kotel.png';


export const Container = styled.div`
    top: 0;
    width: 100%;
    height: 240vh;
    /* border: 1px solid green; */
    position: relative;
    /* background: #333353; */
    background: #0f1223;
    z-index: 0;
`;

export const Compjuter = styled.div`
    position: sticky;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    /* width: 40%; */
    width: 50%;
    /* border: 2px solid red; */
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* height: 180vh; */
    height: 200vh;
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
        height: 18vh;;
        position: absolute;
        top: 0;
        left: 0;
        background: #0f1223;
    }

    &::after{
        content: '';
        width: 100%;
        height: 23vh;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #0f1223;

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
`;

export const Text = styled.span`
    font-size: 30px;
    color: white;
`;

