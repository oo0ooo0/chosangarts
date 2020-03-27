import React from 'react';
import styled from 'styled-components';
import { LayoutContainer } from './components/Containers';

const StyledFooter = styled.footer`
  .service-area-wrap {
    border-top: 1px solid lightGray;
    border-bottom: 1px solid lightGray;
    padding: 20px 0px;

    .service-area {
      display: flex;

      h3 {
        font: normal 700 14px/28px 'Roboto Slab';
      }
      > ul {
        width: 20%;
        li {
          margin: 5px;
        }
      }
      .join-list {
        li a {
          font: normal 700 14px/28px 'Roboto Slab';
        }
      }
      .social {
        .social-icon {
          display: flex;
          justify-content: flex-start;
        }
      }
      i {
        color: lightGray;
        font-size: 20px;
        margin-right: 5px;
      }
    }
  }
  .footer {
    > div {
      margin-top: 10px;
      text-align: center;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <LayoutContainer width={100}>
        <div className='service-area-wrap'>
          <LayoutContainer></LayoutContainer>
        </div>
        <div className='footer'>
          <div className='copyWrites'>ⓒ 2020 ChoSang.Artist, All Rights Reserved</div>
          <div className='address'>
            <p>
              <a href='https://www.facebook.com/profile.php?id=100012313273765'> SNS Facebook</a>|
              <a href='mailTo:chosangw@gmail.com'> E-mail chosangw@gmail.com</a>
            </p>
          </div>
          <div className='builtBy'>design & built by. KWONJAMIN</div>
        </div>
      </LayoutContainer>
    </StyledFooter>
  );
}

export default Footer;
