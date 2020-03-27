import React from 'react';
import styled from 'styled-components';
import MediaItem from './components/MediaItem';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';

const StyledMedia = styled.main`
  .pageInfo {
    margin-bottom: 30px;
  }
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
    margin-bottom: 100px;
  }
`;

function Media() {
  const media = useSelector(state => state.media);
  return (
    <StyledMedia>
      <h2 className='title'>Media</h2>
      <h3 className='pageInfo'>Artist Chosang's works.</h3>
      <Masonry
        breakpointCols={2}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {Object.keys(media)
          .reverse()
          .map(key => {
            return <MediaItem key={key} {...media[key]} />;
          })}
      </Masonry>
    </StyledMedia>
  );
}

export default Media;
