import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 150px;
    border: 1px solid black;
    font-family: 'Roboto', sans-serif;
`;

export const ImgContainer = styled.div`
    position: absolute;
    right: 0;
    overflow: hidden;
`;

export const LogoContainer = styled.div`
    width: 20%;
    height: 150px;
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RouterButtonContainer = styled.div`
    position: absolute;
    right: 0;
    width: 20%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const RouterButton = styled.div<{btnColor: string}>`
    /* width: 50px;
    height: 30px; */
    color: ${({btnColor}) => btnColor};
    font-size: 36px;
`;