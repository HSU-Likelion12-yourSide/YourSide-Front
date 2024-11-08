import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VmwrOptionButton from '../../Page/WorkArrangement/components/VmwrButton.component';
import '../css/VmwrResult.component.scss';
// * data를 해당 컴포넌트를 사용하는 최상위 컴포넌트로 부터 props를 받아오게 코드 리팩토링
// import data from '../temp/data/vmwrResult.data';
import useFetchAPI from '../API/Hooks/useFetchAPI';
/**
 * VmwrResult 컴포넌트
 * API로부터 받은 근로 결과 데이터를 렌더링하는 컴포넌트입니다.
 *
 * @component
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {Array} props.data - 근로 결과 데이터 배열
 * @param {Object} props.data[].data - 근로 결과 데이터 객체
 * @param {number} props.data[].status - HTTP 상태 코드 (예: 200, 404)
 * @param {string} props.data[].data.nickname - 근로자 닉네임
 * @param {string} props.data[].data.title - 근로지 이름
 * @param {string} props.data[].data.content - 결과지 설명
 * @param {boolean} props.data[].data.extraPay - 가산수당 여부
 * @param {boolean} props.data[].data.weekPay - 주휴수당 여부
 * @param {boolean} props.data[].data.nightPay - 야간 근로 수당 여부
 * @param {boolean} props.data[].data.overtimePay - 연장 근로 수당 여부
 * @param {boolean} props.data[].data.holidayPay - 휴일 근로 수당 여부
 * @param {string} props.data[].message - 결과 메시지
 * @returns {JSX.Element} VmwrResult 컴포넌트
 */

const VmwrResult = ({ resultId, postData }) => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const [isContent, setContent] = useState();
  const [stringifiedValues, setStringifiedValues] = useState('');

  // fetch 상태 초기 값
  useEffect(() => {
    if (postData && postData.data && postData.data.content) {
      const values = Object.values(postData.data.content).join('');
      console.log('Stringified Values:', values);
      setStringifiedValues(values);
    }
  }, [postData]);
  // WorkSheet 상태 초기 값
  useEffect(() => {
    console.log(resultId);
    if (resultId !== null && resultId !== undefined) {
      console.log(`WorkSheet-Id is ${resultId}`);
      setUrl(`worksheet/${resultId}`);
    } else if (!resultId) {
      console.error(`!Error: lost WorkSheet-Id. Check WorkSheet-Id`);
    }
  }, [resultId]);

  useEffect(() => {
    if (postData && postData.data && postData.data.content) {
      const values = Object.values(postData.data.content).join('');
      console.log('Stringified Values:', values);
      setStringifiedValues(values);
    }
  }, [postData]);

  // fetch 상태 초기 값
  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : ${isError}`);
      setContent(`Error: ${isError}`);
    } else if (isData && isData.data) {
      setContent(isData);
      console.log(`Success, WorkSheet-Id ${resultId} Contact: `, isData.data);
    } else if (postData && postData.data) {
      setContent(postData);
      console.log(`Success, content is : `, postData);
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData, postData]);

  // 데이터 검증이 필요
  let ResultContents = '';
  let resultState = [];
  if (isData && isData.data) {
    ResultContents = isData.data.content
      .trim()
      .split('니다.')
      .filter(el => el !== ''); // 빈 문자열 제거
    resultState = [
      isData.data.extra_pay,
      isData.data.week_pay,
      isData.data.night_pay,
      isData.data.overtime_pay,
      isData.data.holiday_pay,
    ];
  } else if (postData && postData.data) {
    ResultContents = stringifiedValues
      .trim()
      .split('니다.')
      .filter(el => el !== ''); // 빈 문자열 제거
    console.log('ResultContents:', ResultContents);
    resultState = [
      postData.extra_pay,
      postData.week_pay,
      postData.night_pay,
      postData.overtime_pay,
      postData.holiday_pay,
    ];
  } else {
    // 데이터가 없을 경우 기본값 설정
    resultState = [false, false, false, false, false];
  }

  const OptionsList = [
    '가산수당',
    '주휴수당',
    '야간근로수당',
    '연장근로수당',
    '휴일근로수당',
  ];

  return (
    <div className="vmwr-container">
      <div className="vmwr-contents">
        <div className="vmwr-result-title">
          {isData && isData.data
            ? `${isData.data.title} 근로 결과지`
            : '근로 결과지'}
        </div>
        <div>
          {((isData && isData.data) || (postData && postData.data)) &&
            ResultContents.map((el, index) => {
              const isOverFive =
                ['야간근로수당', '연장근로수당', '휴일근로수당'].some(keyword =>
                  el.includes(keyword),
                ) && postData?.over_five === false;
              return (
                <div
                  key={index}
                  className={isOverFive ? 'vmwr-result-overFive' : ''}
                >
                  {el}니다.
                </div>
              );
            })}
        </div>
        {/* <div>{content}</div> */}
      </div>
      <div className="vmwr-group">
        <div className="vmwr-options">발생 요건들</div>
        <div className="vmwr-list">
          {((isData && isData.data) || (postData && postData.data)) &&
            OptionsList.map((option, index) => (
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
  resultId: PropTypes.number.isRequired,
  postData: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        holidayPayMessage: PropTypes.string,
        incomeTasMessage: PropTypes.string,
        insuranceMessage: PropTypes.string,
        nightPayMessage: PropTypes.string,
        overFiveMessage: PropTypes.string,
        overtimePayMessage: PropTypes.string,
        totalPayMessage: PropTypes.string,
        weekPayMessage: PropTypes.string,
      }),
    }),
    /* eslint-disable camelcase */
    extra_pay: PropTypes.bool,
    holiday_money: PropTypes.number,
    holiday_pay: PropTypes.bool,
    holiday_work: PropTypes.number,
    income_tax: PropTypes.bool,
    major_insurance: PropTypes.bool,
    night_money: PropTypes.number,
    night_pay: PropTypes.bool,
    night_work: PropTypes.number,
    over_five: PropTypes.bool,
    overtime_money: PropTypes.number,
    overtime_pay: PropTypes.bool,
    overtime_work: PropTypes.number,
    total_pay: PropTypes.number,
    week_money: PropTypes.number,
    week_pay: PropTypes.bool,
    week_work: PropTypes.number,
    /* eslint-able camelcase */
  }),
};

VmwrResult.defaultProps = {
  postData: null, // 기본값 설정
};

export default VmwrResult;
