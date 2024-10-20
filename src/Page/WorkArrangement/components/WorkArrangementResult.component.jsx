import React from 'react';
import '../css/WorkArrangementResult.scss';
import arrowRight from '../image/arrow-right.svg';

const WorkArrangementResult = () => {
  return (
    <div className="wa-result">
      <div className="wa-control">
        <div id="wa-title">미도인 성수 근로 결과지</div>
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
            상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이 없습니다.
          </div>
          <div>
            상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이 없습니다.
          </div>
          <div>
            상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이 없습니다.
          </div>
          <div>
            상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이 없습니다.
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
  );
};

export default WorkArrangementResult;
