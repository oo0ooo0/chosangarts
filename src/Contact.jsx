import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import 'lightgallery.js/dist/css/lightgallery.css';

import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';

const StyledWorks = styled.main`
  .workTitle {
    text-align: center;
  }
  .imageWrap {
    display: flex;
    align-items: center;
  }
`;

const GROUP1 = [
  'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  'https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
  'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  'https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
  'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  'https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
  'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  'https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
  'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  'https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
  'https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  'https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
];

const GROUP2 = [
  'https://images.unsplash.com/photo-1551833726-deb5e781c68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1551803021-92431219e83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1551852284-ce16dd4d63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
];

const PhotoItem = ({ image, group }) => (
  <div style={{ maxWidth: '40%', width: '40%', padding: '1% ' }}>
    <LightgalleryItem group={group} src={image}>
      <img src={image} style={{ width: '100%' }} />
    </LightgalleryItem>
  </div>
);
function Contact() {
  return (
    <StyledWorks>
      <LightgalleryProvider
        onAfterSlide={() => {
          console.log('onAfterSlide');
        }}
      >
        <h2 className='workTitle'> 대상 a로서의 응시 2020.04.07-29 갤러리 MHK </h2>
        <div className='imageWrap'>
          {GROUP1.map((p, idx) => (
            <PhotoItem key={idx} image={p} group='objetA' />
          ))}
        </div>
        <h2 className='workTitle'>2017 차지위물화, 트렁크 갤러리</h2>
        <div className='imageWrap'>
          {GROUP2.map((p, idx) => (
            <PhotoItem key={idx} image={p} group='group2' />
          ))}
        </div>
      </LightgalleryProvider>
    </StyledWorks>
  );
}

export default Contact;
