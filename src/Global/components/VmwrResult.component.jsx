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

const VmwrResult = ({ resultId }) => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const [isContent, setContent] = useState();
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

  // fetch 상태 초기 값
  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : ${isError}`);
      setContent(`Error: ${isError}`);
    } else if (isData) {
      setContent(isData);
      console.log(`Success, WorkSheet-Id ${resultId} Contact: `, isData.data);
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  // * 여기서 부터 함수로 분리가 필요 논의가 필요
  // 해당 데이터를 API로 받아오기 때문에 Props로 받아올 수 있게 구조를 다시 검토하고 재구성 필요
  // 데이터 검증이 필요
  let OptionsResultData = '';
  let ResultContents = '';
  let resultState = [];
  if (isData && isData.data) {
    OptionsResultData = isData;
    ResultContents = OptionsResultData.data.content
      .trim()
      .split('니다.')
      .filter(el => el !== ''); // 빈 문자열 제거
    resultState = [
      OptionsResultData.data.extraPay,
      OptionsResultData.data.weekPay,
      OptionsResultData.data.nightPay,
      OptionsResultData.data.overtimePay,
      OptionsResultData.data.holidayPay,
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

  // 결과 상태 데이터 가공 배열

  return (
    <div className="vmwr-container">
      <div className="vmwr-contents">
        <div className="vmwr-result-title">근로 결과지</div>
        <div>
          {isData &&
            isData.data &&
            ResultContents.map(el => {
              return <div key={el}>{el}니다.</div>;
            })}
        </div>
        {/* <div>{content}</div> */}
      </div>
      <div className="vmwr-group">
        <div className="vmwr-options">발생 요건들</div>
        <div className="vmwr-list">
          {isData &&
            isData.data &&
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
  /**
   * data: 근로 결과 데이터를 담고 있는 배열
   * - 배열 안의 객체는 근로자 정보와 각 근로 수당 발생 여부 등을 포함한다.
   */
  // data: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     status: PropTypes.number.isRequired,
  //     data: PropTypes.shape({
  //       nickname: PropTypes.string.isRequired,
  //       title: PropTypes.string.isRequired,
  //       content: PropTypes.string.isRequired,
  //       extraPay: PropTypes.bool.isRequired,
  //       weekPay: PropTypes.bool.isRequired,
  //       nightPay: PropTypes.bool.isRequired,
  //       overtimePay: PropTypes.bool.isRequired,
  //       holidayPay: PropTypes.bool.isRequired,
  //     }).isRequired,
  //     message: PropTypes.string.isRequired,
  //   }),
  // ).isRequired,

  resultId: PropTypes.number.isRequired,
};

export default VmwrResult;
