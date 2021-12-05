import React, { useState } from 'react';
import * as styled from './Welcome.styled';
import programist from '../../../assets/img/pragramist.png';
import { imageVariant, textVariants } from './animations';

const Welcome: React.FC = () => {

    const [helloIsEnd, setHelloIsEnd] = useState<boolean>(false);

    return (
        <>
            <styled.Wrapper>
                <styled.Container>
                    <styled.ImageContainer
                        {...imageVariant}
                    >
                        <img style={{ width: '100%', height: '100%' }} src={programist} alt="programist" />
                    </styled.ImageContainer>
                    <styled.ContentContainer>
                        <styled.MyWelcomeContainer>
                            {[..."Hi I'm Damian"].map((item, i, array) => {
                                return (
                                    <styled.MyWelcome
                                        key={i}
                                        custom={i}
                                        initial='hidden'
                                        animate='animation'
                                        variants={textVariants}
                                        onAnimationComplete={() => {
                                            i == array.length - 1 && setHelloIsEnd(true)
                                        }}
                                    >
                                        {item === " " ? <span>&nbsp;</span> : item}
                                    </styled.MyWelcome>
                                )
                            })}
                        </styled.MyWelcomeContainer>
                        <styled.DescriptionContainer>
                            {helloIsEnd && [..."Aspirating frontend developer"].map((item, i, array) => {
                                return (
                                    <styled.Description
                                        key={i}
                                        custom={i}
                                        initial='hidden'
                                        animate='animation'
                                        variants={textVariants}
                                    >
                                        {item === " " ? <span>&nbsp;</span> : item}
                                    </styled.Description>
                                )
                            })}
                        </styled.DescriptionContainer>
                    </styled.ContentContainer>
                </styled.Container>
            </styled.Wrapper>
        </>
    )
}

export default Welcome;