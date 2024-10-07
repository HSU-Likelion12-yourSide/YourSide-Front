import React, { useEffect, useState } from 'react';
import '../css/Post.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
// import plusIcon from '../image/plusIcon.svg';
import VmwrResult from '../../../Global/components/VmwrResult.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const Result = VmwrResult;

const Post = () => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI('/results', 'GET');
  const [content, setContent] = useState(''); // 렌더링할 content 상태 관리

  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : ${isError}`);
      setContent(`Error: ${isError}`);
    } else if (isData) {
      console.log(`Success Contact : ${isData}`);
      setContent(<Result data={isData} />);
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  return (
    <div className="Post">
      <Header />
      <div className="post-container">
        <div className="post-title-container">
          <div id="post-title">게시글 제목</div>
          <input
            className="post-title-input"
            type="text"
            placeholder="질문 제목을 입력해주세요"
          />
        </div>
        <div className="post-category-container">
          <div id="post-title">게시판 선택</div>
          <div className="post-category-option">
            <div className="post-input-group">
              <input id="input-styled" type="checkbox" />
              <span>네편 답변</span>
              <input id="input-styled" type="checkbox" />
              <span>네편 정보</span>
            </div>
          </div>
        </div>
        <div className="post-content-container">
          <div id="post-title">게시글 내용</div>
          <textarea
            className="post-content-textarea"
            type="text"
            placeholder="질문 내용을 입력해주세요"
          />
        </div>
        <div className="post-myresult-container">
          <div id="post-title">내 결과지 가져오기(선택)</div>
          {/* <div className="post-myresult-none">
            <img src={plusIcon} alt="+" id="post-plusIcon" />
          </div> */}
          <div className="post-vmwr-result">{content}</div>
        </div>
      </div>
      <div id="post-group">
        <div className="post-button">등록하기</div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
