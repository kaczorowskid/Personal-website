import React from 'react';
import * as styled from './Gallery.styled';
import kotel from '../../../assets/img/kotel.png'
import piesel from '../../../assets/img/piesel.jpg'

const Gallery: React.FC = () => {

    const imageData = [

    ]

    return (
        <>
            <styled.Container>
                <styled.Wrapper>
                <styled.CardContainer>
                    <styled.ImageConatiner>
                        <img style = {{width: '100%', height: '100%'}} src={kotel} alt="" />
                    </styled.ImageConatiner>
                    <styled.ImageConatiner>
                        <img style = {{width: '100%', height: '100%'}} src={piesel} alt="" />
                    </styled.ImageConatiner>
                    <styled.ImageConatiner>
                        <img style = {{width: '100%'}} src="https://tinypng.com/images/social/website.jpg" alt="" />
                    </styled.ImageConatiner>
                </styled.CardContainer>
                </styled.Wrapper>
            </styled.Container>
        </>
    )
}

export default Gallery;