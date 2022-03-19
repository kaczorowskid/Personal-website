import React from 'react';
import * as styled from './Gallery.styled';
import { kotel, piesel, pieselwut } from '@assets/img';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Gallery: React.FC = () => {

  const zoomStyle = {
    width: '100%',
    height: '100%'
  }

  return (
    <styled.Container>
      <styled.Wrapper>
        <styled.CardContainer>
          <styled.ImageConatiner>
            <Zoom wrapStyle={zoomStyle}>
              <styled.Image src={kotel} alt="" width='500' />
            </Zoom>
          </styled.ImageConatiner>
          <styled.ImageConatiner>
            <Zoom wrapStyle={zoomStyle}>
              <styled.Image src={piesel} alt="" width='500' />
            </Zoom>
          </styled.ImageConatiner>
          <styled.ImageConatiner>
            <Zoom wrapStyle={zoomStyle}>
              <styled.Image src={pieselwut} alt="" width='500' />
            </Zoom>
          </styled.ImageConatiner>
        </styled.CardContainer>
      </styled.Wrapper>
    </styled.Container>
  )
}

export default Gallery;