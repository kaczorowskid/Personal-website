import styled from "styled-components";
import mcgowan from '../../../assets/img/mcgowan.jpg';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${mcgowan});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: sticky;
    top: 0;
`;