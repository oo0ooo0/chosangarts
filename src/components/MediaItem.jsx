import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FeedText from './FeedText';

const StyledMediaItem = styled.div`
  text-align: center;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;

  .item-image-wrap {
  }

  .item-info {
    .tags {
      display: flex;
      /* justify-content: center; */
      margin-bottom: 10px;
      width: 100%;
      flex-wrap: wrap;
      h4 {
        margin: 10px 5px;
      }
    }
    ${FeedText} {
      max-height: 263px;
    }
  }

  .item-footer {
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
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
  @media (max-width: 960px) {
    /* item */

    .item-date.info .tags h4 {
      font-size: 2.4vw;
    }
  }
`;

const MemoizeMediaItem = React.memo(function Item({ id, mediaList, text, tags, createdAt }) {
  const shareUrl = encodeURIComponent(`https://icd-lovat.now.sh/feed/${id}`);
  return (
    <StyledMediaItem>
      <article className='item-info'>
        <div className='tags'>
          {tags.map((tag, index) => {
            return <h4 key={index}>{tag}</h4>;
          })}
        </div>
        <FeedText className='item-text'>{text}</FeedText>
      </article>
      <figure className='item-image-wrap'>
        <iframe
          width='500vw'
          height='300'
          src={mediaList[0].url}
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
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
    </StyledMediaItem>
  );
});

export default MemoizeMediaItem;
