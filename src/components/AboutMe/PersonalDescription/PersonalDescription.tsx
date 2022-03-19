import React from 'react';
import {
  Container,
  CardContainer,
  ImageContainer,
  TextContainer,
  HeaderContainer,
  Header,
  DescriptionContainer,
  Description
} from './PersonalDescription.styled';
import { face } from '@assets/img';

const PersonalDescription: React.FC = () => {
  return (
    <Container>
      <CardContainer
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1
        }}>
        <ImageContainer>
          <img style={{ width: '100%', height: '100%' }} src={face} alt="" />
        </ImageContainer>
        <TextContainer>
          <HeaderContainer>
            <Header>
              Some information about me
            </Header>
          </HeaderContainer>
          <DescriptionContainer>
            <Description>
              I'm Damian, my hobby is programming web applications. I have been nurturing my passion for several years. On a daily basis I study computer science.
              Besides I am interested in electronics and mechanics.
            </Description>
          </DescriptionContainer>
        </TextContainer>
      </CardContainer>
    </Container>
  )
}

export default PersonalDescription;