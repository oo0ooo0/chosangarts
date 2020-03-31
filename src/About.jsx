import React from 'react';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';

const StyledAbout = styled.main`
  .name {
    font-size: 25px;
  }
  main {
    /* background: center no-repeat url('/img/about-bg.webp'), #eee 40%; */
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    /* background: rgba(0, 0, 0, 0.1); */
    padding: 20px 0px;
  }
  .imageWrap {
    text-align: center;
    width: 40%;
    /* background: rgba(0, 0, 0, 0.1); */
    img {
      width: 100%;
    }
  }
  .textWrap {
    width: 55%;
    text-align: left;
    border-top: 1px solid lightGray;
    border-bottom: 1px solid lightGray;
    padding: 20px;
    /* background: rgba(0, 0, 0, 0.1); */
    h3 {
      font-size: 40px;
      margin-bottom: 40px;
    }
    p {
      font-size: 18px;
      margin-bottom: 20px;
    }
    ul {
      font-size: 15px;
      margin-top: 10px;
    }
    .solo {
      display: inline-block;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 1024px) {
  }

  @media (max-width: 480px) {
    main {
      display: block;
      .imageWrap {
        width: 100%;
      }
      .textWrap {
        border-top: 0px solid lightGray;
        border-bottom: 0px solid lightGray;
        width: 100%;
        h3 {
          font-size: 35px;
          word-spacing: -9px;
        }
      }
    }
  }
`;

function About() {
  // const about = useSelector(state => state.about);
  return (
    <StyledAbout>
      <h2 className='title'>About</h2>

      <main>
        <div className='imageWrap'>
          <img src='/img/about.jpg' />
        </div>

        <div className='textWrap'>
          <h3 className='name'>Cho Sang. Artist</h3>
          <p>
            홍익대학교 미술대학 동양화과 졸업 <br />
            뉴욕대학교 MFA <br /> <br />
            현, 서울예술대학교 영상학부 디지털아트과 교수
          </p>

          <p>​</p>
          <ul>
            <li className='solo'>
              Solo Exhibitions
              <ul>
                <li>2015 시간의 간극, 갤러리 1898</li>
                <li>2015 공기의 간극, 유중아트센터 1갤러리</li>
                <li>2008 증시의 생각, 금호미술관</li>
                <li>2007 존재를 깨우는 정신의 힘, 가일미술관</li>
                <li>2005 천년의 기억, Space 로마네</li>
                <li>2003 빛과 물리, 조지 빌리스 갤러리(뉴욕)</li>
                <li>2001 물리를 넘어, 금호미술관</li>
                <li>2000 명상적 논리, 조지 빌리스 갤러리(뉴욕)</li>
                <li>1999 프리뷰 쇼, J.S.Art 프로젝트 (뉴욕)</li>
                <li>1997 문화의 은유, 조지 빌리스 갤러리(뉴욕)</li>
                <li>1997 노자, 아이슈타인 그리고 나, 한국 미술관</li>
                <li>1997 아는 것과 보이는 것, KAAN 아트센터(뉴욕)</li>
                <li>1996 수묵 드로잉 쇼, 원나잇 스탠드 갤러리(뉴욕)</li>
                <li>1994 기 시리즈, 80 워싱턴 이스트 갤러리(뉴욕)</li>
              </ul>
            </li>
            <li className='group'>
              Group Exhibitions
              <ul>
                <li>2015 Korea Art JangJang Festival, 미국 뉴저지 리버사이드 갤러리</li>
                <li>2015 서산시 특별전 2015 국제현대미술전&nbsp;, 서산 문화예술센터</li>
                <li>2015 아트쇼 부산 2015 조지 빌리스 갤러리 소속 참가, 부산 BEXCO</li>
                <li>2014 브리지스 서울 2014, 국립 과천과학관</li>
                <li>2013 인천 주안 미디어 페스티벌, 월드컵 축구 경기장 영상작품</li>
                <li>2013 ‘Art &amp;Artist 전, 갤러리 라메르</li>
                <li>2013 ‘사계의 향연’ 전, 압구정 성당</li>
                <li>2013 ‘기운생동’ 서울예대 본부동 상설갤러리</li>
                <li>2012 제1회 S.C.A.T Art Fair, 문신미술관</li>
                <li>2011 Pink Art Fair Seoul 2011전, 코엑스 인터컨티넨탈 호텔</li>
                <li>2011 Korea.France- Six Histories전, 현대갤러리</li>
                <li>2011 쿤스트독 드로잉쇼, 쿤스트독 갤러리</li>
                <li>2011 공존 그리고 상생, 제주도립미술관</li>
                <li>2010 FACULTY SHOW, 서울예술대학교 ATEC</li>
                <li>2010 Art Actually 쿤스트독 갤러리</li>
                <li>2009 금호미술관 개관 20주년 기념전, 금호미술관</li>
                <li>2009 홍익대학교 동문. 전, 현직 교수작품전, 홍익대학고 현대 미술관 2관</li>
                <li>2009 And GREEN Exhibition 서울숲 커뮤니티 센터</li>
                <li>2008 과학 정신과 한국 현대미술, 국립현대미술관 &amp; KAIST</li>
                <li>2007 민화체험전, 경기도립박물관</li>
                <li>2007 미디어아트 싱글채널 페스티벌, 가일미술관</li>
                <li>2007 The Laboratory -Sound and Visual Experimentation, Space Tool</li>
                <li>2007 뉴 미디어 아트쇼, Space Tool</li>
                <li>2006 멀티미디어쇼, 조지빌리스 갤러리(뉴욕)</li>
                <li>2005 광복 60주년 기념 평화와 통일 염원전, 베를린에서 DMZ까지, 소마미술관</li>
                <li>2004 금호미술관 15주년 기념 특별전, 금호미술관</li>
                <li>2004 섬, 대지 설치 작업전, 퍼포먼스, 장흥</li>
                <li>2003 과학 + 예술 10년 후, 인사아트센터</li>
                <li>2003 알버트 녹스 미술관 기획 쇼, 알버트 녹스 미술관, (뉴욕)</li>
                <li>2001 아시안 아티스트전, 럿거스 갤러리(뉴욕)</li>
                <li>2000 3인의 회화전, 아나스 갤러리(오카와)</li>
                <li>1999 Summer Show, 조지 빌리스 갤러리(뉴욕)</li>
                <li>1997 믹스 미디어 순회전, 알버트 녹스 미술관, (뉴욕)</li>
                <li>1995 Masking the Unknown, 하트웤 뮤지움(뉴욕)</li>
                <li>1995 월드 와이드 영상 쇼, 헤이그(네덜란드)</li>
                <li>1994 ELECTRIC ART &amp; 심포지움, 헬싱키(핀란드)</li>
                <li>1995 크리쉬나 &amp; 조상, 갤러리 코리아(뉴욕)</li>
                <li>1994 비디오 페스티발, 달라스 미술관, (달라스)</li>
                <li>1994 Throw away, 로젠버그 갤러리(뉴욕)</li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </StyledAbout>
  );
}

export default About;
