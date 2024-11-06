import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../css/WorkArrangementResult.scss';
import VmwrOptionButton from './VmwrButton.component';
import navigateController from '../../../Global/function/navigateController';
import arrowRight from '../image/arrow-right.svg';

const WorkArrangementResult = ({
  id,
  title,
  content,
  extraPay,
  weekPay,
  nightPay,
  overtimePay,
  holidayPay,
}) => {
  const navigate = useNavigate();

  const resultState = [extraPay, weekPay, nightPay, overtimePay, holidayPay];

  const OptionsList = [
    '가산수당',
    '주휴수당',
    '야간근로수당',
    '연장근로수당',
    '휴일근로수당',
  ];

  return (
    <div className="wa-result">
      <div className="wa-control">
        <div id="wa-title">{title} 근로 결과지</div>
        <div
          id="wa-short-cut"
          onKeyDown={() => {}}
          onClick={() => {
            /* eslint-disable-next-line no-alert */
            alert(
              '해당 페이지는 workSheet와 같은 고유 아이디를 받아 특정 결과지 페이지로 넘어가야 합니다. 우선 ViewMyWorkResult로 넘거 갑니다.',
            );
            navigateController(navigate, `/ViewMyWorkResult/${id}`);
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
        <div className="wa-description">{content}</div>
        <div className="wa-options">
          <div className="wa-contents">
            <div className="wa-title">발생 요건들</div>
            {OptionsList.map((option, index) => (
              <VmwrOptionButton
                key={option}
                resultState={resultState[index] ? 'check' : 'uncheck'}
                option={option}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

WorkArrangementResult.propTypes = {
  id: PropTypes.number.isRequired, // id string
  title: PropTypes.string.isRequired, // title string
  content: PropTypes.string.isRequired, // content string
  extraPay: PropTypes.bool.isRequired, // extraPay bool
  weekPay: PropTypes.bool.isRequired, // weekPay bool
  nightPay: PropTypes.bool.isRequired, // nightPay bool
  overtimePay: PropTypes.bool.isRequired, // overtimePay bool
  holidayPay: PropTypes.bool.isRequired, // holidayPay bool
};

export default WorkArrangementResult;
