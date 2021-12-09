import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardsContainer = styled.div`
    width: 1000px;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;

    &::before {
        content: "Did you know that?";
        position: absolute;
        font-size: 2rem;
        top: -50px;
        left: 20px;
        font-family: 'Press Start 2P';
    }
`;

export const Card = styled.div<{title: string}>`
    width: 30%;
    height: 90%;
    border: 3px solid #d6d4f2;
    position: relative;
    transform-style: preserve-3d;
    background: #f2f2f2;
    border-radius: 20px;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 20px;
        left: 20px;
        background: #cdb0d1;
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
        background: #f2f2f2;
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
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.span`
    font-size: 1rem;
`;