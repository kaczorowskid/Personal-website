import React, { Fragment } from 'react';
import {
  Container,
  ContentContainer,
  Title,
  ItemsContainer,
  Item
} from './Technologies.styled';
import { technologiesList } from './technologiesList';

const Technologies: React.FC = () => {

  return (
    <Container>
      <ContentContainer
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1
        }}
      >
        {Object.entries(technologiesList).map(([key, value]: [key: string, value: Array<string>], i: number) => (
          <Fragment key={i}>
            <Title>{key}</Title>
            <ItemsContainer>
              {value.map((technology: string, valI: number) => <Item key={valI}>{technology}</Item>
              )}
            </ItemsContainer>
          </Fragment>
        ))}
      </ContentContainer>
    </Container>
  )
}

export default Technologies;