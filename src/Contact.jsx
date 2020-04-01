import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.main`
  height: 65vh;
  .container {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 10px 0px;
    .contactImg {
      display: flex;
      width: 40%;
      img {
        width: 100%;
      }
    }

    .myform {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      padding: 14px;
      h4 {
        font-size: 35px;
      }
      address {
        margin: 15px 0px;
      }
    }
  }
  @media (max-width: 768px) {
    .contactImg {
      display: none;
    }
    .container {
      margin: 40px 0px;
    }
  }
`;

function Contact() {
  return (
    <StyledContact>
      <h2 className='title'>Contact</h2>

      <div className='container'>
        <div className='contactImg'>
          <img src='img/1006.jpeg' alt='컨택트 이미지'></img>
        </div>
        <div className='myform'>
          <h4>Cho-sang</h4>
          <p>Media Art & Painting & Installation</p>
          <address>
            경기도 안산시 단원구 고잔동 640번지
            <br />
            서울예술대학교 영상학부 디지털아트과
          </address>
          <div className='email'>
            <a href='mail-to:cswart@never.com'>Email: cswart@never.com</a>
          </div>
        </div>
      </div>
    </StyledContact>
  );
}

export default Contact;
