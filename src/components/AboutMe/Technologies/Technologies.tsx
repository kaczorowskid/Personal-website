import React, { Fragment } from 'react';
import * as styled from './Technologies.styled';
import { technologiesList } from './technologiesList';

const Technologies: React.FC = () => {

  return (
    <styled.Container>
      <styled.ContentContainer
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1
        }}
      >
        {Object.entries(technologiesList).map(([key, value]: [key: string, value: string[]], i: number) => (
          <Fragment key={i}>
            <styled.Title>{key}</styled.Title>
            <styled.ItemsContainer>
              {value.map((technology: string, valI: number) => <styled.Item key={valI}>{technology}</styled.Item>
              )}
            </styled.ItemsContainer>
          </Fragment>
        ))}
      </styled.ContentContainer>
    </styled.Container>
  )
}

export default Technologies;