import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

const StyledAdd = styled.main`
  .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: none;
    margin-bottom: 200px;
  }
`;

function Add() {
  return (
    <StyledAdd>
      <h2 className='title'>Media</h2>
      <h3>최신 패션 뉴스를 전해드립니다.</h3>
      <Masonry
        breakpointCols={1}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      ></Masonry>
    </StyledAdd>
  );
}

export default Add;
