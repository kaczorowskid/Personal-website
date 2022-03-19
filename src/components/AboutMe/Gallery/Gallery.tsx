import React from 'react';
import {
  Container,
  Wrapper,
  CardContainer,
  ImageConatiner,
  Image
} from './Gallery.styled';
import { kotel, piesel, pieselwut } from '@assets/img';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Gallery: React.FC = () => {

  const zoomStyle = {
    width: '100%',
    height: '100%'
  }

  return (
    <Container>
      <Wrapper>
        <CardContainer>
          <ImageConatiner>
            <Zoom wrapStyle={zoomStyle}>
              <Image src={kotel} alt="" width='500' />
            </Zoom>
          </ImageConatiner>
          <ImageConatiner>
            <Zoom wrapStyle={zoomStyle}>
              <Image src={piesel} alt="" width='500' />
            </Zoom>
          </ImageConatiner>
          <ImageConatiner>
            <Zoom wrapStyle={zoomStyle}>
              <Image src={pieselwut} alt="" width='500' />
            </Zoom>
          </ImageConatiner>
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Gallery;