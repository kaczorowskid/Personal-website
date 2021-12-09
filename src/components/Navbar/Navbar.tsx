import React, { useEffect, useState } from 'react';
import * as styled from './Navbar.styled';
import blobsSvg from '../../assets/img/blobs.svg';
import { config } from '../../config';
import { useNavigate } from 'react-router';
import { useIsMobile } from '../../hooks/useIsMobile';

const Navbar: React.FC = () => {

  const { aboutMe, home } = config.routerPath;
  const navigate = useNavigate();
  const { mobile } = useIsMobile();
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const lineOneVariants = {
    initial: { rotate: "0deg" },
    animate: { y: ".35rem", rotate: "45deg" },
  };
  const lineTwoVariants = {
    initial: { rotate: "0deg" },
    animate: { y: "-.35rem", rotate: "-45deg" },
  };

  return (
    <>
      <styled.Container>
        <styled.LogoContainer>OK site</styled.LogoContainer>
        {!mobile ? <styled.RouterButtonContainer>
          <styled.RouterButton btnColor='yellow' onClick={() => navigate(home)} >Home</styled.RouterButton>
          <styled.RouterButton btnColor='white' onClick={() => navigate(aboutMe)} >About</styled.RouterButton>
        </styled.RouterButtonContainer> :
          <styled.RouterButtonContainer>
            <styled.HamburgerContainer onClick={() => setMenuOpen(prev => !prev)}>
              <styled.HamburgerLine
                variants={lineOneVariants}
                initial="initial"
                animate={menuOpen ? "animate" : "initial"}
              />
              <styled.HamburgerLine
                variants={lineTwoVariants}
                initial="initial"
                animate={menuOpen ? "animate" : "initial"}
              />
            </styled.HamburgerContainer>
          </styled.RouterButtonContainer>}
      </styled.Container>
      {menuOpen && <styled.HamburgerMenuContainer>

      </styled.HamburgerMenuContainer>}
    </>
  )
}

export default Navbar;