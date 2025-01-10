// const user = '코카콜라';

/**
 * @description
 * 이 함수는 근로 결과지에 대한 api 데이터를 받아 근로 결과지 화면의 글씨 데이터를 생성합니다.
 * <br>
 * 근로 결과지에 대한 데이터는 사용자 이름, 가산 수당 발생 여부, 주휴 수당 발생 여부, 야간 수당 발생 여부, 연장 근로 수당 발생 여부, 휴일 근로 수당 발생 여부, 4대보험 및 소득세 적용 여부, 총 급여입니다.
 * 각 데이터의 true or false/시간/금액에 따라 해당하는 문구를 생성합니다. 
 * <br>
 * 자세한 예시는 아래를 참고해주세요.
 * @version 1.0.0
 * @author 윤예진 | nyun-nye <2001_11_7@naver.com>
 * @see {@link https://github.com/HSU-Likelion12-yourSide/YourSide-Front/pull/84}
 * 
 * @param {Object} isData - api 데이터로 받아온 결과 데이터 객체입니다. 객체 내부에는 가산 수당 발생 여부, 주휴 수당 발생 여부, 야간 수당 발생 여부, 연장 근로 수당 발생 여부, 휴일 근로 수당 발생 여부, 4대보험 및 소득세 적용 여부, 총 급여가 있습니다.
 * @param {string} isUserName - 근로 결과지 생성에 필요한 사용자 이름을 문자열로 받아옵니다.
 * 
 * @returns {Object} 결과 화면의 글씨 데이터를 반환합니다.
 * @example
 * // 이 부분은 원래 받아온 api 데이터를 사용하는 부분이지만, 테스트를 위해 데이터를 직접 입력하였습니다.
 * const data = {
 *  over_five: true,
 *  week_pay: false,
 *  week_work: 14,
 *  night_pay: false,
 *  night_work: 0,
 *  overtime_pay: false,
 *  overtime_work: 0,
 *  holiday_pay: false,
 *  holiday_work: 0,
 *  major_insurance: true,
 *  income_tax: true,
 *  total_pay: 800000,
 * };
 * const userName = '코카콜라';
 * const result = generateResultContent(data, userName);
 * console.log(result);
 * 
 * // 위 데이터에 대한 반환값(result 값)은 다음과 같습니다.
 * // '상시 5인 이상 사업장에서 근무하시므로 추가적인 가산 수당이 발생합니다.'
 * // '주 근로 시간이 14시간으로 주휴수당이 발생하지 않습니다.'
 * // '한 주 동안 야간 근로시간이 0시간이므로 야간근로수당 0원이 발생합니다.'
 * // '한 주 동안 연장 근로시간이 0시간이므로 연장근로수당 0원이 발생합니다.'
 * // '취업 규칙 에서 정한 약정 휴일에 0시간 근무하므로 휴일근로수당 0원이 발생합니다.'
 * // '4대보험 9.32% 가 적용됩니다.'
 * // '소득세 3.3%가 적용됩니다.'
 * // '따라서, 코카콜라 님의 월급은 800,000 원 입니다.'
 */

const generateResultContent = (isData, isUserName) => {
  const data = {
    content: {
      overFiveMessage: isData.over_five
        ? '상시 5인 이상 사업장에서 근무하시므로 추가적인 가산 수당이 발생합니다.'
        : '상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이 발생하지 않습니다.',

      weekPayMessage: isData.week_pay
        ? `주 근로 시간이 ${isData.week_work}시간으로 주휴수당이 발생합니다.`
        : `주 근로 시간이 ${isData.week_work}시간으로 주휴수당이 발생하지 않습니다.`,

      nightPayMessage: isData.night_pay
        ? `한 주 동안 야간 근로시간이 ${isData.night_work} 시간이므로 야간근로수당 ${isData.night_money}원이 발생합니다.`
        : `5인 미만 사업장에서 근무하시기에 야간근로수당은 발생하지 않습니다.`,

      overtimePayMessage: isData.overtime_pay
        ? `한 주 동안 연장 근로시간이 ${isData.overtime_work} 시간이므로 연장근로수당 ${isData.overtime_money}원이 발생합니다.`
        : `5인 미만 사업장에서 근무하시기에 연장근로수당은 발생하지 않습니다.`,

      holidayPayMessage: isData.holiday_pay
        ? `취업 규칙 등에서 정한 약정 휴일에 ${isData.holiday_work} 시간 근무하므로 휴일근로수당 ${isData.holiday_money}원이 발생합니다.`
        : '5인 미만 사업장에서 근무하시기에 휴일근로수당은 발생하지 않습니다.',

      insuranceMessage: isData.major_insurance
        ? '4대보험 9.32%가 적용됩니다.'
        : '',

      incomeTaxMessage: isData.income_tax ? '소득세 3.3%가 적용됩니다.' : '',

      totalPayMessage: `따라서, ${isUserName}님의 월급은 ${isData.total_pay}원 입니다.`,
    },
  };

  return {
    ...isData,
    data,
  };
};

export default generateResultContent;
