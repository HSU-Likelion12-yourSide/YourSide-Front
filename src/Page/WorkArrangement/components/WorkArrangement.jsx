import React from 'react';
import { useNavigate } from 'react-router-dom';
import quizImage from '../image/quiz-short-cut.svg';
import '../css/WorkArrangement.scss';
import navigateController from '../../../Global/function/navigateController';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import WorkArrangementResult from './WorkArrangementResult.component';

const WorkArrangement = () => {
  // useNavigate 사용하기 위한 변수 정의
  const navigate = useNavigate();

  return (
    <div className="work-arrangement">
      <Header />
      <div className="wa-container">
        <div id="wa-title">
          <div>
            현재 <span>나의 근로 상황</span>
          </div>
          <div>알고 계시나요?</div>
        </div>
        <div className="wa-quiz">
          <img src={quizImage} alt="quiz-name" />
          <div
            id="wa-short-cut"
            onKeyDown={() => {}}
            onClick={() => {
              navigateController(navigate, '/ViewMyWork');
            }}
            role="button"
            tabIndex="0"
          >
            바로가기
          </div>
        </div>
        <div className="wa-contents">
          <div className="wa-title">다른 결과지들은 어떨까요?</div>
          <WorkArrangementResult />
          <div className="wa-short-cut-button">
            <div
              className="wa-short-cut"
              onKeyDown={() => {}}
              onClick={() => {
                /* eslint-disable-next-line no-alert */
                alert('다른 결과지 페이지는 준비 중입니다.');
                navigateController(navigate, '/ViewUsersWorkResult');
              }}
              role="button"
              tabIndex="0"
            >
              더보기
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkArrangement;
