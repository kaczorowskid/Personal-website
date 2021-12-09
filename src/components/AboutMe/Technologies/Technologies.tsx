import React, { Fragment, useState } from 'react';
import * as styled from './Technologies.styled';
import { technologiesList } from './technologiesList';

const Technologies: React.FC = () => {

    return (
        <styled.Container>
            <styled.ContentContainer>
                {Object.entries(technologiesList).map(([key, value], i: number) => (
                    <Fragment key={i}>
                        <styled.Title>{key}</styled.Title>
                        <styled.ItemsContainer>
                            {value.map((technology: string) => <styled.Item>{technology}</styled.Item>
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