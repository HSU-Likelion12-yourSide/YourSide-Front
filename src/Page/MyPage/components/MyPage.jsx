import React, { useState } from 'react';
import '../css/MyPage.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';

const MyPage = () => {
  const [isContentState, setContentState] = useState(false);
  const [isContent, setContent] = useState({
    myResult: true,
    myPosting: false,
    myComment: false,
    myBookMark: false,
  });

  const handleContent = contentType => {
    setContent(prev => ({
      ...prev,
      myResult: contentType === 'myResult',
      myPosting: contentType === 'myPosting',
      myComment: contentType === 'myComment',
      myBookMark: contentType === 'myBookMark',
    }));
  };

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
          <div
            id={isContent.myResult ? 'MyPage-switched' : ''}
            onKeyDown={() => {}}
            onClick={() => {
              handleContent('myResult');
            }}
            tabIndex="0"
            role="button"
          >
            내 결과지
          </div>
          <div
            id={isContent.myPosting ? 'MyPage-switched' : ''}
            onKeyDown={() => {}}
            onClick={() => {
              handleContent('myPosting');
            }}
            tabIndex="0"
            role="button"
          >
            내 게시글
          </div>
          <div
            id={isContent.myComment ? 'MyPage-switched' : ''}
            onKeyDown={() => {}}
            onClick={() => {
              handleContent('myComment');
            }}
            tabIndex="0"
            role="button"
          >
            내 답변
          </div>
          <div
            id={isContent.myBookMark ? 'MyPage-switched' : ''}
            onKeyDown={() => {}}
            onClick={() => {
              handleContent('myBookMark');
            }}
            tabIndex="0"
            role="button"
          >
            책갈피
          </div>
        </div>
        {isContentState ? (
          <div className="MyPage-contents">contents 변경 컴포넌트</div>
        ) : (
          // 해당 부분 질문 부분에 동적으로 변경이 가능하도록 구현해야한다.
          <div className="MyPage-none-contents">
            작성한 질문(글)이 없습니다.
          </div>
        )}
        {/* 페이지 네이션은 각 컴폰넌트 내부로 들어갈 예정이다. */}
        <div className="MyPage-pagenation">
          {isContentState ? '페이지 네이션' : ''}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
