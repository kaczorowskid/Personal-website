import React, { useState } from 'react';
import { IFacts } from '@types';
import {
  Container,
  CardsContainer,
  Card,
  CardContentContainer,
  Text
} from './End.styled';
import { starWarsFacts } from './starWarsFacts';

const End: React.FC = () => {

  const [isTouched, setIsTouched] = useState<number>(0);

  return (
    <Container>
      <CardsContainer>
        {starWarsFacts.map((fact: IFacts, i: number) => (
          <Card
            onTouchStart={() => setIsTouched(i + 1)}
            onTouchMove={() => setIsTouched(i + 1)}
            onTouchEnd={() => setIsTouched(0)}
            touch={isTouched}
            key={i}
            title={fact.title}>
            <CardContentContainer>
              <Text>{fact.content}</Text>
            </CardContentContainer>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  )
}

export default End;