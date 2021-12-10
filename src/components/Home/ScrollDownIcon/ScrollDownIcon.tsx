import React from 'react';
import * as styled from './ScrollDownIcon.styled';

const ScrollDownIcon: React.FC = () => {
  return (
    <>
      <styled.Wrapper>
        <styled.ScrollDown>
          <styled.SVGContainer height="30" width="10">
            <styled.ScrollDownPoint cx="5" cy="15" r="3" />
            <styled.ScrollDownPoint isSecond={true} cx="5" cy="15" r="3" />
          </styled.SVGContainer>
        </styled.ScrollDown>
      </styled.Wrapper>
    </>
  )
}

export default ScrollDownIcon;