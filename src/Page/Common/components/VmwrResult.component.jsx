import React from 'react';
import VmwrOptionButton from '../../WorkArrangement/components/VmwrButton.component';
import '../css/VmwrResult.component.scss';
import data from '../temp/data/vmwrResult.data';

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

const VmwrResult = () => {
  return (
    <div className="vmwr-container">
      <div className="vmwr-contents">
        <div className="vmwr-result-title">근로 결과지</div>
        <div>
          {ResultContents.map(el => {
            return <div key={el}>{el}니다.</div>;
          })}
        </div>
        {/* <div>
          상시 5인 이상 사업장에서 근무하시므로 추가적인 가산 수당이 발생합니다.
        </div>
        <div>주 근로 시간이 14 시간이므로 주휴수당이 발생하지 않습니다.</div>
        <div>
          한 주 동안 야간 근로시간이 0 시간이므로 야간근로수당 0 원이
          발생합니다.
        </div>
        <div>
          한 주 동안 연장 근로시간이 0 시간이므로 연장근로수당 0 원이
          발생합니다.
        </div>
        <div>
          취업 규칙 등에서 정한 약정 휴일에 0 시간 근무하므로 휴일근로수당 0
          원이 발생합니다.
        </div>
        <div>4대보험 9.32 %가 적용됩니다.</div>
        <div>따라서, 코카콜라 님의 월급은 800,000 원 입니다.</div> */}
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
          {/* 
          <div className="check">가산수당</div>
          <div className="check">주휴수당</div>
          <div className="uncheck">야간근로수당</div>
          <div className="check">연장근로수당</div>
          <div className="uncheck">휴일근로수당</div> */}
        </div>
      </div>
    </div>
  );
};

// VmwrResult.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       status: PropTypes.number.isRequired,
//       data: PropTypes.shape({
//         nickname: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         content: PropTypes.string.isRequired,
//         extraPay: PropTypes.bool.isRequired,
//         weekPay: PropTypes.bool.isRequired,
//         nightPay: PropTypes.bool.isRequired,
//         overtimePay: PropTypes.bool.isRequired,
//         holidayPay: PropTypes.bool.isRequired,
//       }).isRequired,
//       message: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default VmwrResult;
