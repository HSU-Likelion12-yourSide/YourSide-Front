import React, { useEffect, useState } from 'react';
import '../css/PostingQnA.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
// import plusIcon from '../image/plusIcon.svg';
// 이 외에 아래 코드에서 주석처리 된 부분은 내 결과지를 가져오지 않을 때의 기본 화면
import VmwrResult from '../../../Global/components/VmwrResult.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const Result = VmwrResult;

const QnAPosting = () => {
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
    <div className="qnaposting">
      <Header />
      <div className="qnaposting-container">
        <div className="qnaposting-title-container">
          <div id="qnaposting-title">게시글 제목</div>
          <input
            className="qnaposting-title-input"
            type="text"
            placeholder="질문 제목을 입력해주세요"
          />
        </div>
        <div className="qnaposting-category-container">
          <div id="qnaposting-title">게시판 선택</div>
          <div className="qnaposting-category-option">
            <div className="qnaposting-input-group">
              <input id="input-styled" type="checkbox" />
              <span>네편 답변</span>
              <input id="input-styled" type="checkbox" />
              <span>네편 정보</span>
            </div>
          </div>
        </div>
        <div className="qnaposting-content-container">
          <div id="qnaposting-title">게시글 내용</div>
          <textarea
            className="qnaposting-content-textarea"
            type="text"
            placeholder="질문 내용을 입력해주세요"
          />
        </div>
        <div className="qnaposting-myresult-container">
          <div id="qnaposting-title">내 결과지 가져오기(선택)</div>
          {/* <div className="qnaposting-myresult-none">
            <img src={plusIcon} alt="+" id="qnaposting-plusIcon" />
          </div> */}
          <div className="qnaposting-vmwr-result">{content}</div>
        </div>
      </div>
      <div id="qnaposting-group">
        <div className="qnaposting-button">등록하기</div>
      </div>
      <Footer />
    </div>
  );
};

export default QnAPosting;
