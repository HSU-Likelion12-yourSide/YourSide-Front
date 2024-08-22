import React from 'react';
import quizImage from '../image/quiz-short-cut.png';
import arrowRight from '../image/arrow-right.png';
import '../css/WorkArrangement.css';

const WorkArrangement = () => {
  return (
    <div className="work-arrangement">
      <div className="container">
        <h1>현재 나의 근로 상황 얼마나 알고 계시나요?</h1>
        <div className="quiz">
          <img src={quizImage} alt="quiz-name" />
          <div className="short-cut">바로가기</div>
        </div>
        <div className="contents">
          <h1>다른 결과지들은 어떨까요?</h1>
          <div className="result">
            <div className="control">
              <h3>미도인 성수 근로 결과지</h3>
              <div id="short-cut">
                <a href="/#">상세보기</a>
                <img src={arrowRight} alt="short-cut" />
              </div>
            </div>
            <div className="group">
              <div className="description">
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
                <div>
                  상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이
                  없습니다.
                </div>
              </div>
              <div className="options">
                <div>발생 요건들</div>
                <div id="option">주휴수당</div>
              </div>
            </div>
          </div>
          <a id="short-cut" href="/#">
            더보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkArrangement;
