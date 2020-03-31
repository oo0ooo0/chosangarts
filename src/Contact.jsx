import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import 'lightgallery.js/dist/css/lightgallery.css';

import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';

const StyledContact = styled.main`
  .myform {
    margin: 0 auto;
    width: 509px;
    padding: 14px;
  }
  #form-wrapper {
    background: none repeat scroll 0 0 #c6c6c6;
    border: 2px solid #8b8b8b;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -op-border-radius: 10px;
    -webkit-border-radius: 10px;
  }
  #form-wrapper h1 {
    font-weight: bold;
    margin-bottom: 8px;
  }
  #form-wrapper p {
    font-size: 11px;
    color: #666666;
    margin-bottom: 20px;
    border-bottom: solid 1px #7e7e7e;
    padding-bottom: 10px;
  }
  #form-wrapper label {
    display: block;
    font-weight: bold;
    text-align: right;
    width: 193px;
    float: left;
  }
  #form-wrapper .small {
    color: #666666;
    display: block;
    font-size: 11px;
    font-weight: normal;
    text-align: right;
    width: 193px;
  }
  #form-wrapper input,
  #form-wrapper textarea {
    float: left;
    border: solid 1px #aacfe4;
    width: 284px;
    margin: 2px 0 20px 10px;
    border-radius: 15px;
    -moz-border-radius: 15px;
    -op-border-radius: 15px;
    -webkit-border-radius: 15px;
    font-size: 14px;
  }

  #form-wrapper input {
    height: 25px;
    padding: 4px 10px;
  }
  #form-wrapper textarea {
    padding: 10px 10px;
    overflow: auto;
  }
  /* ----------- Form Button ----------- */
  #form-wrapper button {
    background: #2c3e4a;
    background: -webkit-gradient(linear, left top, left bottom, from(#919496), to(#2c3e4a));
    background: -webkit-linear-gradient(top, #919496, #2c3e4a);
    background: -moz-linear-gradient(top, #919496, #2c3e4a);
    background: -ms-linear-gradient(top, #919496, #2c3e4a);
    background: -o-linear-gradient(top, #919496, #2c3e4a);
    padding: 5px 10px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    margin-left: 315px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    vertical-align: middle;
  }
  #form-wrapper button:hover {
    background: #3d4b54;
    color: #ccc;
  }

  /* 
  .workTitle {
    text-align: center;
  }
  .imageWrap {
    display: flex;
    align-items: center;
  } */
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
    <StyledContact>
      <div id='form-wrapper' className='myform'>
        <form id='form' name='form' method='post' action='index.html'>
          <h1>Contact </h1>
          <p>Please complete the form bellow.</p>

          <label for='name'>
            Name
            <span className='small'>Add your name</span>
          </label>
          <input type='text' name='name' placeholder='Name' id='name' />

          <label for='email'>
            Email
            <span className='small'>Add a valid address</span>
          </label>
          <input type='text' name='email' placeholder='Email' id='email' />

          <label for='phone'>
            Phone
            <span className='small'>Add your mobile no.</span>
          </label>
          <input type='text' name='phone' placeholder='Phone' id='phone' />

          <label for='web'>
            Web-site
            <span className='small'>Add your web-site url</span>
          </label>
          <input id='web' type='text' placeholder='Web-site' name='web' id='web' />

          <label for='message'>
            Message
            <span className='small'>Write something to me</span>
          </label>
          <textarea
            placeholder='Write something to us'
            name='message'
            id='message'
            rows='5'
          ></textarea>

          <button type='submit'>Send</button>
          <div className='spacer'></div>
        </form>
      </div>

      {/* <LightgalleryProvider
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
      </LightgalleryProvider> */}
    </StyledContact>
  );
}

export default Contact;
