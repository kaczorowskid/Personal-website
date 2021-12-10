import React from 'react';
import { IFacts } from '../../../types/IFacts';
import * as styled from './End.styled';
import { starWarsFacts } from './starWarsFacts';

const End: React.FC = () => {
    return (
        <styled.Container>
            <styled.CardsContainer>
                {starWarsFacts.map((fact: IFacts, i: number) => (
                    <styled.Card key = {i} title = {fact.title}>
                        <styled.CardContentContainer>
                            <styled.Text>{fact.content}</styled.Text>
                        </styled.CardContentContainer>
                    </styled.Card>
                ))}
            </styled.CardsContainer>
        </styled.Container>
    )
}

export default End;