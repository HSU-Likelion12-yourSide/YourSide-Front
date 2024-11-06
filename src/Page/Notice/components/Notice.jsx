// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
// import '../css/Notice.css';
import '../css/Notice.scss';
import ArrowLeft from '../img/page-left-arrow.svg';
import ArrowRight from '../img/page-right-arrow.svg';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import NoticeElement from './NoticeElement.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const Notice = () => {
  // const [isPage, setPage] = useState(1); // 페이지 네이션 시작 기본 설정
  // const limit = 5;
  // const offset = (isPage - 1) * limit;
  const [isContent, setContent] = useState(''); // 렌더링할 content 상태 관리 content
  const { isData, isLoading, isError, setUrl } = useFetchAPI('/notation/list');
  // GET API 상태 표기
  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : `, isError);
      setContent(`Error: `, isError);
    } else if (isData && isData.data) {
      console.log(`Success Contact : `, isData);
      setContent(isData.data);
      // setContent();
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  return (
    <div>
      <Header />
      <div className="Notice">
        <div className="Notice-container">
          <div id="Notice-title">공지사항</div>
          <div className="Notice-list">
            {isData && isData.data ? (
              <NoticeElement />
            ) : (
              <div id="Notice-no-data">현재 등록된 공지사항이 없습니다.</div>
            )}
          </div>
          <div className="Notice-pagination">
            <div id="Notice-pagination-arrow">
              <img src={ArrowLeft} alt="" />
            </div>
            <div className="Notice-pagination-number">1</div>
            <div id="Notice-pagination-arrow">
              <img src={ArrowRight} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notice;
