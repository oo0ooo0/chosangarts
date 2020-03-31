import React from 'react';
import styled from 'styled-components';
import { LayoutContainer } from './components/Containers';

const StyledFooter = styled.footer`
  border-top: 1px solid lightGray;
  padding: 1.5px 0px;
  color: gray;
  .footer {
    > div {
      text-align: center;
    }

    div,
    a {
      font-size: 10px;
      color: gray;
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
              <a href='mailTo:cswart@never.com'> E-mail cswart@never.com</a>
            </p>
          </div>
          <div className='builtBy'>design & built by. KWONJAMIN</div>
        </div>
      </LayoutContainer>
    </StyledFooter>
  );
}

export default Footer;
