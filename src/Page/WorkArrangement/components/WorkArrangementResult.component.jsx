import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../css/WorkArrangementResult.scss';
import VmwrOptionButton from './VmwrButton.component';
import navigateController from '../../../Global/function/navigateController';
import arrowRight from '../image/arrow-right.svg';
import useGlobalState from '../../../Global/Hooks/useGlobalState';

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

  // 배열을 두 줄로 나눔
  const firstRowOptions = OptionsList.slice(0, 3);
  const secondRowOptions = OptionsList.slice(3);

  // content를 split
  const splitContent = content
    .trim()
    .split('니다.')
    .filter(el => el !== '')
    .map(el => `${el}니다.`);
  const { isUser } = useGlobalState();
  const basePath = isUser ? `/${isUser}` : '';
  console.log(isUser);

  return (
    <div className="wa-result">
      <div className="wa-control">
        <div id="wa-title">{title} 근로 결과지</div>
        <div
          id="wa-short-cut"
          onKeyDown={() => {}}
          onClick={() => {
            /* eslint-disable-next-line no-alert */
            // alert( // 경고문 불필요해서 주석처리
            //   '해당 페이지는 workSheet와 같은 고유 아이디를 받아 특정 결과지 페이지로 넘어가야 합니다. 우선 ViewMyWorkResult로 넘거 갑니다.',
            // );
            navigateController(navigate, `${basePath}/ViewMyWorkResult/${id}`);
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
          {splitContent.slice(0, 4).map((line, index) => (
            <div key={index}>{index === 3 ? `${line}..` : line}</div>
          ))}
        </div>
        <div className="wa-options">
          <div className="wa-contents">
            <div className="wa-title">발생 요건들</div>
            <div className="wa-list">
              <div className="wa-row">
                {firstRowOptions.map((option, index) => (
                  <VmwrOptionButton
                    key={option}
                    resultState={resultState[index] ? 'check' : 'uncheck'}
                    option={option}
                  />
                ))}
              </div>
              <div className="wa-row">
                {secondRowOptions.map((option, index) => (
                  <VmwrOptionButton
                    key={option}
                    resultState={resultState[index + 3] ? 'check' : 'uncheck'}
                    option={option}
                  />
                ))}
              </div>
            </div>
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
