import React, { useEffect } from 'react';
import * as styled from './Navbar.styled';
import blobsSvg from '../../assets/img/blobs.svg';
import { config } from '../../config';
import { useNavigate } from 'react-router';
import { useIsMobile } from '../../hooks/useIsMobile';

const Navbar: React.FC = () => {

  const { aboutMe, home } = config.routerPath;
  const navigate = useNavigate();
  const { mobile } = useIsMobile();


  return (
    <>
      <styled.Container>
        <styled.LogoContainer>OK site</styled.LogoContainer>
        <styled.RouterButtonContainer>
          <styled.RouterButton btnColor='yellow' onClick={() => navigate(home)} >Home</styled.RouterButton>
          <styled.RouterButton btnColor='white' onClick={() => navigate(aboutMe)} >About</styled.RouterButton>
        </styled.RouterButtonContainer>
      </styled.Container>
    </>
  )
}

export default Navbar;