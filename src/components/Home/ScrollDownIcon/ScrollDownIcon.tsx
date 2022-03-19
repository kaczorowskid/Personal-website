import React from 'react';
import {
  Wrapper,
  ScrollDown,
  SVGContainer,
  ScrollDownPoint
} from './ScrollDownIcon.styled';

const ScrollDownIcon: React.FC = () => {
  return (
    <Wrapper>
      <ScrollDown>
        <SVGContainer height="30" width="10">
          <ScrollDownPoint cx="5" cy="15" r="3" />
          <ScrollDownPoint isSecond={true} cx="5" cy="15" r="3" />
        </SVGContainer>
      </ScrollDown>
    </Wrapper>
  )
}

export default ScrollDownIcon;