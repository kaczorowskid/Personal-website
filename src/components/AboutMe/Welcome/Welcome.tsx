import React, { useState } from 'react';
import {
  Wrapper,
  Container,
  ImageContainer,
  ContentContainer,
  MyWelcomeContainer,
  MyWelcome,
  DescriptionContainer,
  Description
} from './Welcome.styled';
import { pragramist } from '@assets/img';
import { imageVariant, textVariants } from './animations';

const Welcome: React.FC = () => {

  const [helloIsEnd, setHelloIsEnd] = useState<boolean>(false);

  return (
    <Wrapper>
      <Container>
        <ImageContainer
          {...imageVariant}
        >
          <img style={{ width: '100%', height: '100%' }} src={pragramist} alt="programist" />
        </ImageContainer>
        <ContentContainer>
          <MyWelcomeContainer>
            {[..."Hi I'm Damian"].map((item, i, array) => {
              return (
                <MyWelcome
                  key={i}
                  custom={i}
                  initial='hidden'
                  animate='animation'
                  variants={textVariants}
                  onAnimationComplete={() => {
                    i === array.length - 1 && setHelloIsEnd(true)
                  }}
                >
                  {item === " " ? <span>&nbsp;</span> : item}
                </MyWelcome>
              )
            })}
          </MyWelcomeContainer>
          <DescriptionContainer>
            {helloIsEnd && [..."Aspirating frontend developer"].map((item, i, array) => {
              return (
                <Description
                  key={i}
                  custom={i}
                  initial='hidden'
                  animate='animation'
                  variants={textVariants}
                >
                  {item === " " ? <span>&nbsp;</span> : item}
                </Description>
              )
            })}
          </DescriptionContainer>
        </ContentContainer>
      </Container>
    </Wrapper>
  )
}

export default Welcome;