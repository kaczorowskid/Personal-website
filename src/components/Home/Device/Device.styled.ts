import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 250vh;
    border: 1px solid green;
    position: relative;
    background: #333353;
`;

export const Compjuter = styled.div`
    position: sticky;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: red;
    width: 40%;
    height: 40vh;
    margin-top: calc(40vh);
    opacity: 0.1;
`;

export const ImageConatiner = styled.div`
    position: absolute;
    width: 40%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* height: 40vh; */
`;

