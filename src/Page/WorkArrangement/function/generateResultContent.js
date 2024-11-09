const user = '코카콜라';
const generateResultContent = isData => {
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

      totalPayMessage: `따라서, ${user}님의 월급은 ${isData.total_pay}원 입니다.`,
    },
  };

  return {
    ...isData,
    data,
  };
};

export default generateResultContent;
