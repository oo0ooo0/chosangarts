import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.main`
  .contactImg {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    margin-bottom: 10px;
    img {
      width: 50%;
    }
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 450px;

    .myform {
      display: flex;
      flex-direction: column;
      width: 70%;
      padding: 14px;
      label {
        display: block;
        font-weight: bold;
      }

      input,
      textarea {
        border: solid 1px lightGray;
        width: 100%;
        margin: 2px 0 20px 0px;
        font-size: 14px;
      }

      input {
        height: 25px;
        padding: 4px 10px;
      }
      textarea {
        padding: 10px 10px;
        overflow: auto;
      }
      button {
        background: #333;
        width: 100%;
        padding: 5px 10px;
        border-radius: 15px;
        color: white;
        font-size: 20px;
        transition: all 0.5s ease;
      }
      button:hover {
        background: #eee;
        color: black;
      }
    }
  }
  @media (max-width: 768px) {
    h2 {
      border-bottom: 1px solid lightgray;
    }
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
      <div className='contactImg'>
        <img src='img/1006.jpeg'></img>
      </div>
      <div className='container'>
        <div className='myform'>
          <form id='form' name='form' method='post' action='index.html'>
            <label>Name</label>
            <input type='text' name='name' placeholder='Name' id='name' />

            <label>Email</label>
            <input type='text' name='email' placeholder='Email' id='email' />

            <label>Phone</label>
            <input type='text' name='phone' placeholder='Phone' id='phone' />

            <label>Web-site</label>
            <input id='web' type='text' placeholder='Web-site' name='web' id='web' />

            <label>Message</label>
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
      </div>
    </StyledContact>
  );
}

export default Contact;
