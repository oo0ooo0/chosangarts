import React from 'react';
import styled from 'styled-components';
import FeedText from './FeedText';

const StyledMediaItem = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  .itemWrap {
    /* border: 1px solid red; */
    width: 50%;
    text-align: center;

    figure {
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        text-align: center;
      }
    }

    .item-info {
      margin: 2vw 0;
      text-align: center;

      .tags {
        display: flex;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
        h4 {
        }
      }
      ${FeedText} {
        max-height: 263px;
      }
    }

    .item-footer {
      padding: 1vw 0vw;
      display: flex;
      justify-content: space-between;
      font-size: 1vw;
      width: 100%;
      color: #999;

      ul {
        display: flex;
        li {
          margin-left: 10px;
          i {
            margin-right: 5px;
          }
          a {
            color: #999;
          }
        }
      }
      .item-date {
        font-style: italic;
      }
    }
  }
  @media (max-width: 1024px) {
    .itemWrap {
      width: 70%;
    }
  }
  @media (max-width: 768px) {
    .itemWrap {
      width: 100%;
    }
    .item-info .tags h4 {
    }
  }
`;

const MemoizeMediaItem = React.memo(function Item({ id, mediaList, text, tags, createdAt }) {
  const shareUrl = encodeURIComponent(`https://icd-lovat.now.sh/feed/${id}`);
  return (
    <StyledMediaItem>
      <div className='itemWrap'>
        <article className='item-info'>
          <div className='tags'>
            {tags.map((tag, index) => {
              return <h4 key={index}>{tag}&ensp;</h4>;
            })}
          </div>
          <FeedText className='item-text'>{text}</FeedText>
        </article>
        <figure className='item-image-wrap'>
          <iframe
            title='작품 영상'
            src={mediaList[0].url}
            width='100%'
            height='100%'
            frameBorder='0'
            allow='accelerometer; autoplay; '
            allowFullScreen
          ></iframe>
        </figure>
        <div className='item-footer'>
          <em className='item-date'>{createdAt}</em>
          <ul>
            <li>
              <div
                data-href={`https://icd-lovat.now.sh/media/${id}`}
                data-layout='button_count'
                data-size='small'
              >
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}%2F&amp;src=sdkpreparse`}
                  className='fb-xfbml-parse-ignore'
                >
                  <i className='fab fa-facebook-square'></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </StyledMediaItem>
  );
});

export default MemoizeMediaItem;
