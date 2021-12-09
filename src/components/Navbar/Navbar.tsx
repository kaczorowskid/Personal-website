import React from 'react';
import * as styled from './Navbar.styled';
import blobsSvg from '../../assets/img/blobs.svg';
import { config } from '../../config';
import { useNavigate } from 'react-router';

const Navbar: React.FC = () => {

  const { aboutMe, home } = config.routerPath;
  const navigate = useNavigate();

  return (
    <styled.Container>
      {/* <styled.ImgContainer>
        <img style={{ width: '100%' }} src={blobsSvg} alt="plask kropeczka" />
      </styled.ImgContainer> */}
      <styled.LogoContainer>OK site</styled.LogoContainer>
      <styled.RouterButtonContainer>
        <styled.RouterButton btnColor='yellow' onClick={() => navigate(home)} >Home</styled.RouterButton>
        <styled.RouterButton btnColor='white' onClick={() => navigate(aboutMe)} >About</styled.RouterButton>
      </styled.RouterButtonContainer>
    </styled.Container>
  )
}

export default Navbar;