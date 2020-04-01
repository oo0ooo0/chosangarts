import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WorkItem from './components/WorkItem';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';
import { calcColumn } from './utils/common';

const StyledWorks = styled.main`
  .my-masonry-grid {
    display: flex;
    margin-left: -5px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 5px; /* gutter size */
    background-clip: padding-box;
    > div {
      /* change div to reference your elements you put in <Masonry> */
      background: none;
      margin-bottom: 5px;
    }
  }
`;

function Works() {
  const works = useSelector(state => state.works);
  const [columnNum, setColumnNum] = useState(calcColumn);
  function resizeHandler() {
    setColumnNum(calcColumn());
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <StyledWorks>
      <h2 className='title'>Work</h2>
      <h3>Artist Chosang's works.</h3>
      <Masonry
        breakpointCols={columnNum}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {Object.keys(works)
          .reverse()
          .map(key => {
            return <WorkItem key={key} {...works[key]} />;
          })}
      </Masonry>
    </StyledWorks>
  );
}

export default Works;
