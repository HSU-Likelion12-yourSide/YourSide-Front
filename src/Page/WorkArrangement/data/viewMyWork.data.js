const data = [
  {
    option: '코카콜라님의 시급은 얼마입니까?',
    display: 'none',
    type: 'input',
    placeholder: '시급을 입력해주세요.',
    unit: '원',
  },
  {
    option: '한 주 동안 근로 시간은 몇 시간 입니까?',
    display: 'none',
    type: 'input',
    placeholder: '시간을 입력해주세요.',
    unit: '시간',
  },
  {
    option: '상시 5인 이상 사업장입니까?',
    display: 'none',
    type: 'input',
  },
  {
    option: '한 주 동안 연장 근로시간은 몇 시간  입니까?',
    display: 'flex',
    description: '주 연장 근로 시간 (1일 8시간, 1주 40시간 초과한 시간)',
    type: 'input',
    placeholder: '시간을 입력해주세요.',
    unit: '시간',
  },
  {
    option: '한 주 동안 야간 근로시간이 몇 시간 입니까?',
    display: 'flex',
    description: '야간 근로 시간 (오후 10시부터 명일 오전 6시까지 근무한 시간)',
    type: 'input',
    placeholder: '시간을 입력해주세요.',
    unit: '시간',
  },
  {
    option: '취업규칙 등에서 정한 약정휴일에 근무하는 시간은?',
    display: 'none',
    description: '야간 근로 시간 (오후 10시부터 명일 오전 6시까지 근무한 시간)',
    type: 'input',
  },
];

export default data;
