import React from 'react';
import VmwrOptionButton from '../../WorkArrangement/components/VmwrButton.component';
import '../css/VmwrResult.component.scss';
import data from '../temp/data/vmwrResult.data';

const OptionsResultData = data;

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

const options = [];

// map으로 변환할 방법과 방식 필요
for (let i = 0; i < 5; i += 1) {
  options.push(
    <VmwrOptionButton
      key={i}
      resultState={resultState[i] ? 'check' : 'uncheck'}
      option={OptionsList[i]}
    />,
    //
  );
}

const VmwrResult = () => {
  return (
    <div className="vmwr-container">
      <div className="vmwr-contents">
        <div className="vmwr-result-title">근로 결과지</div>
        <div>{OptionsResultData[0].data.content}</div>
        <div>
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
        <div>따라서, 코카콜라 님의 월급은 800,000 원 입니다.</div>
      </div>
      <div className="vmwr-group">
        <div className="vmwr-options">발생 요건들</div>
        <div className="vmwr-list">
          {options.map(el => {
            return el;
          })}
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

export default VmwrResult;
