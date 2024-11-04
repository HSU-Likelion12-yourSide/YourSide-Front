// import React, { useState } from 'react';
import React from 'react';
// import '../css/Notice.css';
import '../css/Notice.scss';
import ArrowLeft from '../img/page-left-arrow.svg';
import ArrowRight from '../img/page-right-arrow.svg';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import NoticeElement from './NoticeElement.component';

const Notice = () => {
  // const [isPage, setPage] = useState(1); // 페이지 네이션 시작 기본 설정
  // const limit = 5;
  // const offset = (isPage - 1) * limit;

  return (
    <div>
      <Header />
      <div className="Notice">
        <div className="Notice-container">
          <div id="Notice-title">공지사항</div>
          <div className="Notice-list">
            <NoticeElement />
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
