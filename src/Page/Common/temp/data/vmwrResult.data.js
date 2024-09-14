const data = [
  {
    status: 200,
    data: {
      nickname: '코카콜라',
      title: '미도인 성수',
      content:
        '상시 5인 이상 사업장에서 근무하시므로 추가적인 가산 수당이 발생합니다. 주 근로 시간이 14시간이므로 주휴수당이 발생하지 않습니다. 한 주 동안 야간 근로시간이 0시간이므로 야간근로수당 0원이 발생합니다. 한 주 동안 연장 근로시간이 0시간이므로 연장근로수당 0원이 발생합니다. 취업 규칙 에서 정한 약정 휴일에 0시간 근무하므로 휴일근로수당 0원이 발생합니다. 4대보험 9.32% 가 적용됩니다.',
      extraPay: true, // 가산 수당 발생 여부
      weekPay: true, // 주휴 수당 발생 여부
      nightPay: false, // 야간 수당 발생 여부
      overtimePay: true, // 연장 근로 수당 발생 여부
      holidayPay: false, // 휴일 근로 수당 발생 여부
    },
    message: '근로 결과지 세부 조회 완료되었습니다.',
  },
];

export default data;
