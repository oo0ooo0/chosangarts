import React from 'react';
import styled from 'styled-components';
import { LayoutContainer } from './components/Containers';

const StyledFooter = styled.footer`
  border-top: 1px solid lightGray;
  padding: 20px 0px;
  color: gray;
  .footer {
    a {
      color: gray;
    }
    > div {
      margin-top: 5px;
      text-align: center;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <LayoutContainer width={100}>
        <div className='footer'>
          <div className='copyWrites'>ⓒ 2020 ChoSang.Artist, All Rights Reserved</div>
          <div className='address'>
            <p>
              <a href='https://www.facebook.com/profile.php?id=100012313273765'> SNS Facebook |</a>
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
