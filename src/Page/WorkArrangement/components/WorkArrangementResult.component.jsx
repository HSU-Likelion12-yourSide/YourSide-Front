import React from 'react';
import '../css/WorkArrangementResult.scss';
import { useNavigate } from 'react-router-dom';
import navigateController from '../../../Global/function/navigateController';
import arrowRight from '../image/arrow-right.svg';

const WorkArrangementResult = () => {
  const navigate = useNavigate();

  return (
    <div className="wa-result">
      <div className="wa-control">
        <div id="wa-title">미도인 성수 근로 결과지</div>
        <div
          id="wa-short-cut"
          onKeyDown={() => {}}
          onClick={() => {
            /* eslint-disable-next-line no-alert */
            alert(
              '해당 페이지는 workSheet와 같은 고유 아이디를 받아 특정 결과지 페이지로 넘어가야 합니다. 우선 ViewMyWorkResult로 넘거 갑니다.',
            );
            navigateController(navigate, '/ViewMyWorkResult');
          }}
          role="button"
          tabIndex="0"
        >
          <span>상세보기</span>
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
