import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    width: 850px;
    height: 500px;
    border: 5px solid orange;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 1.5rem;

`;

export const ItemsContainer = styled.div`
    width: 100%;
    height: 20%;
    margin-top: 20px;
`;

export const Item = styled.div`
    margin: 5px;
    padding: 10px 15px;
    background: #e0e0e0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;