import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 10;

  .main-menu-wrap {
    margin-top: 30px;
    border-bottom: 1px solid lightGray;
    .header-cont {
      width: 92%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      .logo {
        display: flex;
        word-wrap: normal;
        justify-content: center;
        align-items: center;

        a {
          /* border: 1px solid red; */
          display: block;
          width: auto;
        }
      }
      .gnb {
        /* border: 1px solid black; */
        width: 100%;
        display: flex;

        ul {
          margin-left: 100px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          li {
            padding: 30px 0px;
            a {
              margin-top: 10px;
              display: inline-block;
              font: normal 900 18px/1 'Roboto Slab';
              color: #1d1e21;
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    /* header  */
    .main-menu-wrap {
      .header-cont {
        display: block;
        width: 100%;
        .logo a {
          font-size: 45px;
        }
        .gnb {
          margin-top: 20px;
          width: 100%;
          ul {
            justify-content: space-between;
            margin-left: 0px;
            padding: 0px 4%;
            li {
              padding: 5px 0;
              a {
                font-size: 15px;
                margin-bottom: 5px;
              }
            }
          }
        }
      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className='main-menu-wrap'>
        <div className='header-cont'>
          <div className='logo'>
            <h1>
              <a href='/'>ChoSang.arts</a>
            </h1>
          </div>
          {/* //logo */}

          <div className='gnb'>
            <ul>
              <li>
                <Link to={{ pathname: `/about` }}>ABOUT</Link>
              </li>
              <li>
                <Link to={{ pathname: `/work` }}>WORKS</Link>
              </li>
              <li>
                <Link to={{ pathname: `/media` }}>MEDIA</Link>
              </li>
              <li>
                <Link to={{ pathname: `/contact` }}>CONTACT</Link>
              </li>
            </ul>
          </div>
          {/* //gnb */}
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
