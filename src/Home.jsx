import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.main`
  margin-top: 200px;
  display: flex;
  justify-content: center;
  .imageWrap {
    text-align: center;
    width: 70%;
    /* background: rgba(0, 0, 0, 0.1); */
    img {
      width: 100%;
      :first-child {
        margin-bottom: 20px;
      }
    }
  }
`;

function Home() {
  return (
    <StyledAbout>
      <div className='imageWrap'>
        <img src='/img/objectA-1.jpg' />
        <img src='/img/objectA-2.jpg' />
      </div>
    </StyledAbout>
  );
}

export default Home;
