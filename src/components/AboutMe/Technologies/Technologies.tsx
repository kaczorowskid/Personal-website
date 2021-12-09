import React, { Fragment } from 'react';
import * as styled from './Technologies.styled';
import { technologiesList } from './technologiesList';

const Technologies: React.FC = () => {

    return (
        <styled.Container>
            <styled.ContentContainer
                initial={{ x: window.screen.width / 2 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1
                }}
            >
                {Object.entries(technologiesList).map(([key, value], i: number) => (
                    <Fragment key={i}>
                        <styled.Title>{key}</styled.Title>
                        <styled.ItemsContainer>
                            {value.map((technology: string, valI: number) => <styled.Item key={valI}>{technology}</styled.Item>
                            )}
                        </styled.ItemsContainer>
                    </Fragment>
                )
                )}
            </styled.ContentContainer>
        </styled.Container>
    )
}

export default Technologies;