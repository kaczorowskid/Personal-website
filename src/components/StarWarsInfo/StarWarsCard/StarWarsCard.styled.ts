import styled from "styled-components";

export const Container = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 700px;
    border: 5px solid white;
    -webkit-box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
    -moz-box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
    box-shadow: 8px 10px 8px 0px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextContainer = styled.div`
    width: 80%;
    height: 10%;
    border-bottom: 3px dotted yellow;
    position: relative;
    font-family: 'Press Start 2P';

    &::before {
        content: 'Title';
        position: absolute;
        color: yellow;
        bottom: 0;
    }
`;

export const Text = styled.span`
    font-family: 'Press Start 2P';
    color: yellow;
    position: absolute;
    bottom: 0;
    right: 0;
`;