import React, { useEffect, useState } from 'react';
import * as styled from './Device.styled';
import site from '../../../assets/img/stronka.png'
import { motion, useMotionValue, useViewportScroll } from 'framer-motion'

const Device: React.FC = () => {

    const [scrollValue, setScrollValue] = useState<number>(0);
    
    const checkScroll = () => setScrollValue(window.scrollY);
    
    useEffect(() => {
      window.addEventListener('scroll', checkScroll);
      return () => window.removeEventListener('scroll', checkScroll);
    })



    return (
        <>
            <styled.Container>
            <styled.TextContainer pos = {scrollValue} >
                <styled.Text>Check About section ;)</styled.Text>
            </styled.TextContainer>
            <styled.Mask />
            {/* <styled.Compjuter /> */}

                <styled.ImageConatiner>
                    <img style={{ width: '100%', height: '100%' }} src={site} alt="" />
                </styled.ImageConatiner>
            </styled.Container>
        </>
    )
}

export default Device;