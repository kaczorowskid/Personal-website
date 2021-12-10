import React from 'react';
import * as styled from './PersonalDescription.styled';
import face from '../../../assets/img/face.svg';

const PersonalDescription: React.FC = () => {
  return (
    <styled.Container>
      <styled.CardContainer
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1
        }}>
        <styled.ImageContainer>
          <img style={{ width: '100%', height: '100%' }} src={face} alt="" />
        </styled.ImageContainer>
        <styled.TextContainer>
          <styled.HeaderContainer>
            <styled.Header>
              Some information about me
            </styled.Header>
          </styled.HeaderContainer>
          <styled.DescriptionContainer>
            <styled.Description>
              I'm Damian, my hobby is programming web applications. I have been nurturing my passion for several years. On a daily basis I study computer science.
              Besides I am interested in electronics and mechanics.
            </styled.Description>
          </styled.DescriptionContainer>
        </styled.TextContainer>
      </styled.CardContainer>
    </styled.Container>
  )
}

export default PersonalDescription;