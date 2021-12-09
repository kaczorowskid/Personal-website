import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    width: 850px;
    height: 500px;
    border: 2px solid orange;
    display: flex;
    flex-direction: column;
`;

// export const Column = styled.div`
//     width: 50%;
//     height: 100%;
//     border: 1px solid green;
//     position: relative;

//     &::before {
//         content: "Backen";
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         background: red;
//     }

// `;

// export const Mask = styled.div<{mask: boolean}>`
//     width: 100%;
//     height: 100%;
//     background: green;
//     z-index: 100;
//     position: relative;
//     opacity: ${({ mask }) => mask ? 1 : 0};
//     transition: all 1s linear;
// `;

export const Title = styled.div`
    width: 100%;
    height: 10%;
    border: 2px solid red;
    display: flex;
    align-items: center;
`;

export const ItemsContainer = styled.div`
    width: 100%;
    height: 20%;
    border: 1px solid blue;
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