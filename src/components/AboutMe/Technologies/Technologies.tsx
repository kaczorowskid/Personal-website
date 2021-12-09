import React, { useState } from 'react';
import * as styled from './Technologies.styled';

const Technologies: React.FC = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);


    return (
        <>
            <styled.Container>
                {/* <button onClick = {() => setIsVisible(prev => !prev)} >clickme</button>
            <styled.ContentContainer>
                <styled.Column>
                    <styled.Mask mask = {isVisible} />
                </styled.Column>
                <styled.Column></styled.Column>
            </styled.ContentContainer> */}

                <styled.ContentContainer>
                    <styled.Title>Frontend</styled.Title>
                    <styled.ItemsContainer>
                        <styled.Item>JavaScript</styled.Item>
                        <styled.Item>Typescript</styled.Item>
                        <styled.Item>React</styled.Item>
                        <styled.Item>Redux</styled.Item>
                        <styled.Item>material-ui</styled.Item>
                        <styled.Item>styled-components</styled.Item>
                        <styled.Item>HTML</styled.Item>
                        <styled.Item>CSS</styled.Item>
                    </styled.ItemsContainer>
                    <styled.Title>Backend</styled.Title>
                    <styled.ItemsContainer>
                        <styled.Item>JavaScript</styled.Item>
                        <styled.Item>Typescript</styled.Item>
                        <styled.Item>React</styled.Item>
                        <styled.Item>Redux</styled.Item>
                        <styled.Item>material-ui</styled.Item>
                        <styled.Item>styled-components</styled.Item>
                        <styled.Item>HTML</styled.Item>
                        <styled.Item>CSS</styled.Item>
                    </styled.ItemsContainer>
                </styled.ContentContainer>
            </styled.Container>
        </>
    )
}

export default Technologies;