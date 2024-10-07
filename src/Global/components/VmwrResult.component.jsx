import React from 'react';
import PropTypes from 'prop-types';
import VmwrOptionButton from '../../Page/WorkArrangement/components/VmwrButton.component';
import '../css/VmwrResult.component.scss';
// * data를 해당 컴포넌트를 사용하는 최상위 컴포넌트로 부터 props를 받아오게 코드 리팩토링
// import data from '../temp/data/vmwrResult.data';

const VmwrResult = ({ data }) => {
  // * 여기서 부터 함수로 분리가 필요 논의가 필요
  // 해당 데이터를 API로 받아오기 때문에 Props로 받아올 수 있게 구조를 다시 검토하고 재구성 필요
  const OptionsResultData = data;
  const ResultContents = OptionsResultData[0].data.content
    .trim()
    .split('니다.')
    .filter(el => el !== ''); // 빈 문자열 제거

  const OptionsList = [
    '가산수당',
    '주휴수당',
    '야간근로수당',
    '연장근로수당',
    '휴일근로수당',
  ];

  // 결과 상태 데이터 가공 배열
  const resultState = [
    OptionsResultData[0].data.extraPay,
    OptionsResultData[0].data.weekPay,
    OptionsResultData[0].data.nightPay,
    OptionsResultData[0].data.overtimePay,
    OptionsResultData[0].data.holidayPay,
  ];

  return (
    <div className="vmwr-container">
      <div className="vmwr-contents">
        <div className="vmwr-result-title">근로 결과지</div>
        <div>
          {ResultContents.map(el => {
            return <div key={el}>{el}니다.</div>;
          })}
        </div>
      </div>
      <div className="vmwr-group">
        <div className="vmwr-options">발생 요건들</div>
        <div className="vmwr-list">
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
  );
};

VmwrResult.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.number.isRequired,
      data: PropTypes.shape({
        nickname: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        extraPay: PropTypes.bool.isRequired,
        weekPay: PropTypes.bool.isRequired,
        nightPay: PropTypes.bool.isRequired,
        overtimePay: PropTypes.bool.isRequired,
        holidayPay: PropTypes.bool.isRequired,
      }).isRequired,
      message: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default VmwrResult;
