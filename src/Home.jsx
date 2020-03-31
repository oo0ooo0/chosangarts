import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.main`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 2vw;
    line-height: 1;
    margin-bottom: 20px;
    text-align: center;
  }
  .imageWrap {
    text-align: center;
    width: 70%;
    /* background: rgba(0, 0, 0, 0.1); */

    img {
      padding: 2px 0px;
      border-bottom: 1px solid lightgray;
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
      <h3>
        Chosang solo exhibition <br />
        '대상성 없는 대상성'
        <br />
        Gallery MHK 2020.04.07~29
      </h3>
      <div className='imageWrap'>
        <img src='/img/objectA-1.jpeg' />
        <img src='/img/objectA-2.jpeg' />
      </div>
    </StyledAbout>
  );
}

export default Home;
