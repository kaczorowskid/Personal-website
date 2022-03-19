import React, { useState } from 'react';
import {
  Container,
  LogoContainer,
  RouterButtonContainer,
  RouterButton,
  HamburgerContainer,
  HamburgerLine,
  HamburgerMenuContainer
} from './Navbar.styled';
import { config } from '@config';
import { useNavigate } from 'react-router';
import { useIsMobile } from '@hooks'

const Navbar: React.FC = () => {

  const { aboutMe, home } = config.routerPath;
  const navigate = useNavigate();
  const detectMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const lineOneVariants = {
    initial: { rotate: "0deg" },
    animate: { y: ".35rem", rotate: "45deg" },
  };
  const lineTwoVariants = {
    initial: { rotate: "0deg" },
    animate: { y: "-.35rem", rotate: "-45deg" },
  };

  const menu = {
    initial: { y: -2000 },
    animate: { y: 0 },
  }

  return (
    <>
      <Container>
        <LogoContainer onClick={() => navigate(home)} >OK site</LogoContainer>
        {!detectMobile.isMobile() ? (
          <RouterButtonContainer>
            <RouterButton btnColor='yellow' onClick={() => navigate(home)} >Home</RouterButton>
            <RouterButton btnColor='white' onClick={() => navigate(aboutMe)} >About</RouterButton>
          </RouterButtonContainer>
        ) : (
          <RouterButtonContainer>
            <HamburgerContainer onClick={() => setMenuOpen(prev => !prev)}>
              <HamburgerLine
                variants={lineOneVariants}
                initial="initial"
                animate={menuOpen ? "animate" : "initial"}
              />
              <HamburgerLine
                variants={lineTwoVariants}
                initial="initial"
                animate={menuOpen ? "animate" : "initial"}
              />
            </HamburgerContainer>
          </RouterButtonContainer>
        )}
      </Container>
      {<HamburgerMenuContainer
        variants={menu}
        initial="initial"
        animate={menuOpen ? 'animate' : 'initial'}
        transition={{ duration: 1 }}
      >
        <RouterButton btnColor='yellow' onClick={() => navigate(home)} >Home</RouterButton>
        <RouterButton btnColor='white' onClick={() => navigate(aboutMe)} >About</RouterButton>
      </HamburgerMenuContainer>}
    </>
  )
}

export default Navbar;