const generateResultContent = data => {
  const content = [];

  // 1. 추가 수당 여부 메시지
  content.push(
    data.over_five
      ? '상시 5인 이상 사업장에서 근무하시므로 추가적인 가산 수당이 발생합니다.'
      : '상시 5인 미만 사업장에서 근무하셨으므로 추가적인 가산 수당이 발생하지 않습니다.',
  );

  // 2. 주휴수당 메시지
  content.push(
    data.week_pay
      ? `주 근로 시간이 ${data.week_work}시간으로 주휴수당이 발생합니다.`
      : `주 근로 시간이 ${data.week_work}시간으로 주휴수당이 발생하지 않습니다.`,
  );

  // 3. 야간 근로 수당 메시지
  content.push(
    data.night_pay
      ? `한 주 동안 야간 근로시간이 ${data.night_work} 시간이므로 야간근로수당 ${data.night_money}원이 발생합니다.`
      : `5인 미만 사업장에서 근무하시기에 야간 근로수당은 발생하지 않습니다.`,
  );

  // 4. 연장 근로 수당 메시지
  content.push(
    data.overtime_pay
      ? `한 주 동안 연장 근로시간이 ${data.overtime_work} 시간이므로 야간근로수당 ${data.overtime_money}원이 발생합니다.`
      : `5인 미만 사업장에서 근무하시기에 야간 근로수당은 발생하지 않습니다.`,
  );

  // 5. 휴일 근로 수당 메시지
  content.push(
    data.holiday_pay
      ? `취업 규칙 등에서 정한 약정 휴일에 ${data.overtime_work} 시간 근무하므로 휴일근로수당 ${data.overtime_money}원이 발생합니다.`
      : '5인 미만 사업장에서 근무하시기에 휴일근로수당은 발생하지 않습니다.',
  );

  // 6. 4대보험 메시지
  content.push(
    data.major_insurance ? '4대보험 9.32%가 적용됩니다.' : '',
    data.income_tax ? '소득세 3.3%가 적용됩니다.' : '',
  );

  // 7. 총 급여 메시지
  content.push(
    `따라서, ${data.nickname || ''}님의 월급은 ${data.total_pay.toLocaleString()}원 입니다.`,
  );

  return content;
};

// Export the function for use in other files
export default generateResultContent;
