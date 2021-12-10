import React, { useState } from 'react';
import { IFacts } from '../../../types/IFacts';
import * as styled from './End.styled';
import { starWarsFacts } from './starWarsFacts';

const End: React.FC = () => {

  const [isTouched, setIsTouched] = useState<number>(0);

  return (
    <styled.Container>
      <styled.CardsContainer>
        {starWarsFacts.map((fact: IFacts, i: number) => (
          <styled.Card
            onTouchStart={() => setIsTouched(i + 1)}
            onTouchMove={() => setIsTouched(i + 1)}
            onTouchEnd={() => setIsTouched(0)}
            touch={isTouched}
            key={i}
            title={fact.title}>
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