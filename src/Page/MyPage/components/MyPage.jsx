import React from 'react';
import '../css/MyPage.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';

const MyPage = () => {
  return (
    <div className="MyPage">
      <Header />
      <div className="MyPage-container">
        <div className="MyPage-profile">
          <div id="MyPage-nickname">사용자 닉네임</div>
          <div className="MyPage-current">
            <div id="MyPage-posting">
              <span>내 개시글</span>
              <span>999개</span>
            </div>
            <div id="MyPage-question">
              <span>내 질문</span>
              <span>999개</span>
            </div>
            <div id="MyPage-comment">
              <span>내 답변</span>
              <span>999개</span>
            </div>
          </div>
        </div>
        <div className="MyPage-switch">
          <div id="">내 결과지</div>
          <div id="">내 게시글</div>
          <div id="">내 답변</div>
          <div id="">책갈피</div>
        </div>
        <div className="MyPage-contents">contents 변경 컴포넌트</div>
        <div className="MyPage-pagenation">페이지 네이션</div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
