import React, { useEffect, useState } from 'react';
// import useGlobalState from '../../../Global/Hooks/useGlobalState';
import '../css/MyPage.scss';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import MyPageBookMark from './MyPage.BookMark.component';
import MyPagePosting from './MyPage.Posting.component';
import MyPageComment from './MyPage.Comment.component';
import MyPageResult from './MyPage.Result.component';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import useGlobalState from '../../../Global/Hooks/useGlobalState';

const MyPage = () => {
  const userId = 2;
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const [isUser, setUser] = useState();
  const [isContentState, setContentState] = useState(false);
  const [isContent, setContent] = useState({
    myResult: true,
    myPosting: false,
    myComment: false,
    myBookMark: false,
  });
  const { isUserName } = useGlobalState();

  const handleContent = contentType => {
    setContent(prev => ({
      ...prev,
      myResult: contentType === 'myResult',
      myPosting: contentType === 'myPosting',
      myComment: contentType === 'myComment',
      myBookMark: contentType === 'myBookMark',
    }));
  };

  const renderContent = () => {
    if (isContent.myResult) return <MyPageResult userId={userId} />;
    if (isContent.myPosting) return <MyPagePosting userId={userId} />;
    if (isContent.myComment) return <MyPageComment userId={userId} />;
    if (isContent.myBookMark) return <MyPageBookMark userId={userId} />;
    return <div>선택한 항목이 없습니다.</div>;
  };

  useEffect(() => {
    setUrl(`/mypage/${userId}`);
    if (isLoading) {
      console.log('..is Loading');
      setUser('Loading...');
    } else if (isError) {
      console.log(`is Error : `, isError);
      setUser(`Error: `, isError);
    } else if (isData && isData.data) {
      console.log(`Success Contact : `, isData);
      setUser(isData.data);
      // if (isData.status === 200 || isData.status === 201) {
      // }
    } else {
      setUser(null);
    }
  }, [isLoading, isError, isData]);

  return (
    <div className="MyPage">
      <Header />
      <div className="MyPage-container">
        <div className="MyPage-profile">
          <div id="MyPage-nickname">{isUserName || '코카콜라'}</div>
          <div className="MyPage-current">
            <div id="MyPage-posting">
              <span>내 게시글</span>
              <span>
                {isData && isData.data ? isUser.posting_count : '0'}개
              </span>
            </div>
            <div id="MyPage-question">
              <span>내 질문</span>
              {/* API 수정 필요 */}
              <span>{isData && isData.data ? isUser.like_count : '0'}개</span>
            </div>
            <div id="MyPage-comment">
              <span>내 답변</span>
              <span>
                {isData && isData.data ? isUser.comment_count : '0'}개
              </span>
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
        <div className="MyPage-contents">{renderContent()}</div>
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
