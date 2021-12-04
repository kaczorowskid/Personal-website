import React from 'react';
import * as styled from './Navbar.styled';
import blobs from '../../assets/img/blobs.png';
import blobsSvg from '../../assets/img/blobs.svg';

const Navbar: React.FC = () => {
    return (
        <>
            <styled.Container>
                <styled.ImgContainer>
                    <img style = {{position: 'relative'}} src={blobsSvg} alt="plask kropeczka" />
                </styled.ImgContainer>
                <styled.LogoContainer>Kozak stronka mordo</styled.LogoContainer>
                <styled.RouterButtonContainer>
                    <styled.RouterButton btnColor='black' >Home</styled.RouterButton>
                    <styled.RouterButton btnColor='white' >About</styled.RouterButton>
                </styled.RouterButtonContainer>
            </styled.Container>
        </>
    )
}

export default Navbar;