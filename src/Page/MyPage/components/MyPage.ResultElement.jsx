import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import VmwrOptionButton from '../../WorkArrangement/components/VmwrButton.component';
import learnMoreArrow from '../image/learnMoreArrow.svg';
import useGlobalState from '../../../Global/Hooks/useGlobalState';

const Result = ({ workSheetId, title, totalPay, date, resultState }) => {
  const navigate = useNavigate();
  const { isUser } = useGlobalState();
  const basePath = isUser ? `/${isUser}` : '';
  console.log(workSheetId);
  const OptionsList = [
    '가산수당',
    '주휴수당',
    '야간근로수당',
    '연장근로수당',
    '휴일근로수당',
  ];

  return (
    <div className="MyPage-Result-Content">
      <div className="MyPage-Result-Title">
        <div className="MyPage-Result-Title-group">
          {title ? <span>{title}</span> : <span>메가커피 근로 결과지</span>}
          <span>{date}</span>
        </div>
        <div className="MyPage-Result-Button">
          <span
            onKeyDown={() => {}}
            onClick={() => {
              navigate(`${basePath}/MyPageViewResult/${workSheetId}`);
            }}
            role="button"
            tabIndex="0"
          >
            자세히 보기
          </span>
          <img src={learnMoreArrow} alt="" />
        </div>
      </div>
      <div className="MyPage-Result-group">
        <div id="MyPage-Result-total">
          <span>월급</span>
          <span>{totalPay}</span>
        </div>
        <div className="MyPage-Result-Options">
          <span>발생요건</span>
          <div className="MyPage-Result-list">
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

Result.propTypes = {
  workSheetId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  totalPay: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  // 구체적으로 각 배열 값들의 타입을 정의해야 한다.
  resultState: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default Result;
