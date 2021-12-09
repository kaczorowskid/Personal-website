import React from 'react';
import * as styled from './Navbar.styled';
import blobsSvg from '../../assets/img/blobs.svg';
import { config } from '../../config';
import { useNavigate } from 'react-router';

interface Props {
  blob: boolean
}

const Navbar: React.FC<Props> = ({ blob }) => {

  const { aboutMe, home } = config.routerPath;
  const navigate = useNavigate();

  return (
    <>
    {blob && <styled.ImgContainer>
      <styled.Image src={blobsSvg} alt="plask kropeczka" />
    </styled.ImgContainer>}
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