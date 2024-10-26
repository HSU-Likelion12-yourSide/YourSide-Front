import React from 'react';
import '../css/QuestionAndAnswer.scss';
import { useNavigate } from 'react-router-dom';
import navigateController from '../../../Global/function/navigateController';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import RankQuestion from './RankQuestion.component';
import Question from './Question.component';

const QuestionAndAnswer = () => {
  const navigate = useNavigate();
  return (
    <div className="question-and-answer">
      <Header />
      <div className="qa-group">
        <div id="qa-box-selected" className="selected">
          네편 답변
        </div>
        <div id="qa-box">네편 정보</div>
      </div>
      <div className="qa-popular-container">
        <div id="qa-popular-intro">인기게시글</div>
        <div className="qa-popular-group">
          <RankQuestion />
          <RankQuestion />
          <RankQuestion />
        </div>
      </div>
      <div className="qa-post-container">
        <div className="qa-post-intro">
          <div id="qa-post-word">게시글</div>
          <div
            id="qa-write"
            onKeyDown={() => {}}
            onClick={() => {
              /* eslint-disable-next-line no-alert */
              alert('게시글 작성 페이지는 준비 중입니다.');
              navigateController(navigate, '/PostingQnA');
            }}
            role="button"
            tabIndex="0"
          >
            게시글 작성
          </div>
        </div>
        <div className="qa-post-group">
          <Question />
          <Question />
          <Question />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuestionAndAnswer;
