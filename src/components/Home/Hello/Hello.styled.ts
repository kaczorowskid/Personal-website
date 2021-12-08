import styled from "styled-components";
import tlo from '../../../assets/img/tlo.jpg';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${tlo});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: sticky;
    top: 0;
`;