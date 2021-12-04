import React from 'react';
import * as styled from './Navbar.styled';
import blobs from '../../assets/img/blobs.png';

const Navbar: React.FC = () => {
    return (
        <>
            <styled.Container>
                <styled.ImgContainer>
                    <img src={blobs} alt="plask kropeczka" />
                </styled.ImgContainer>
                <styled.LogoContainer>Kozak stronka mordo</styled.LogoContainer>
                <styled.RouterButtonContainer>
                    <styled.RouterButton>Home</styled.RouterButton>
                    <styled.RouterButton>About</styled.RouterButton>
                </styled.RouterButtonContainer>
            </styled.Container>
        </>
    )
}

export default Navbar;