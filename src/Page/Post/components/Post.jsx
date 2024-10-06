import React from 'react';
import '../css/Post.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import VmwrResult from '../../../Global/components/VmwrResult.component';

const Result = VmwrResult;

const Post = () => {
  return (
    <div className="Post">
      <Header />
      <div className="post-title">게시글 제목</div>
      <div>해당 사안에도 주휴수당이 발생하는지 궁금합니다.</div>
      <div>게시판 선택</div>
      <div>
        <div>네편 답변</div>
        <div>네편 정보</div>
      </div>
      <div>게시글 내용</div>
      <div>
        ooooo물류센터 아르바이트 하고 있는데 5월 1일 근로자의날 이나 5월6일 대체
        공휴일 같은 날은 주휴수당이 해당 되나요? <br />
        참고로 저날은 다 쉽니다 법정공휴일도 어떻게 되는지 궁금 합니다. <br />
        동해물과 백두산이 마르고 닳도록 <br />
        동해물과 백두산이 마르고 닳도록
      </div>
      <div>내 결과지 가져오기(선택)</div>
      <Result />
      <div id="post-group">
        <div className="post-button">등록하기</div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
