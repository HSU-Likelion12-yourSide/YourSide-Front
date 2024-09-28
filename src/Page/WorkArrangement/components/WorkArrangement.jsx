import React from 'react';
import quizImage from '../image/quiz-short-cut.svg';
import arrowRight from '../image/arrow-right.svg';
import '../css/WorkArrangement.scss';

const WorkArrangement = () => {
  return (
    <div className="work-arrangement">
      <div className="wa-container">
        <div id="wa-title">
          <div>
            현재 <span>나의 근로 상황</span>
          </div>
          <div>알고 계시나요?</div>
        </div>
        <div className="wa-quiz">
          <img src={quizImage} alt="quiz-name" />
          <div id="wa-short-cut">바로가기</div>
        </div>
        <div className="wa-contents">
          <div className="wa-title">다른 결과지들은 어떨까요?</div>
          <div className="wa-result">
            <div className="wa-control">
              <div className="wa-title">미도인 성수 근로 결과지</div>
              <div id="wa-short-cut">
                <a href="/#">상세보기</a>
                <div>
                  <img src={arrowRight} alt="short-cut" />
                </div>
              </div>
            </div>
            <div className="wa-group">
              <div className="wa-description">
                <div>
                  상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이
                  없습니다.
                </div>
                <div>
                  상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이
                  없습니다.
                </div>
                <div>
                  상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이
                  없습니다.
                </div>
                <div>
                  상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이
                  없습니다.
                </div>
              </div>
              <div className="wa-options">
                <div className="wa-contents">
                  <div className="wa-title">발생 요건들</div>
                  <div id="wa-option">주휴수당</div>
                </div>
              </div>
            </div>
          </div>
          <div className="wa-group">
            <div className="wa-short-cut" href="/#">
              더보기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkArrangement;
