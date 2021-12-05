import styled from "styled-components";
import stars from '../../../assets/img/stars.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardsContainer = styled.div`
    width: 1000px;
    border: 5px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    background: white;
    border-radius: 20px;

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

export const StarWarsCardContainer = styled.div`
    margin: 10px;
    width: 380px;
    height: 410px;
    background-image: url(${stars});
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StarWarsHeaderConatiner = styled.div`
    width: 100%;
    height: 60%;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: bold;

`;

export const StarWarsHeader = styled.span`
    font-family: 'Press Start 2P', cursive;
    color: #f6e41a;
`;

export const TitleContainer = styled.div`
    width: 100%;
    height: 40%;
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MovieTitle = styled.div`
    color: white;
    font-size: 20px;
`;