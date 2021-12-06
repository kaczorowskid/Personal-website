import React from 'react';
import * as styled from './Device.styled';
import site from '../../../assets/img/stronka.png'

const Device: React.FC = () => {
    return (
        <>
            <styled.Container>
                <styled.ImageConatiner>
                    <img style={{ width: '100%' }} src={site} alt="" />

                </styled.ImageConatiner>
                <styled.Compjuter>
                </styled.Compjuter>
            </styled.Container>
        </>
    )
}

export default Device;