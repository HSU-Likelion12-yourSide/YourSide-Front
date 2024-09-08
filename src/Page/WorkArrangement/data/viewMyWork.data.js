const user = '코카콜라';
const data = [
  {
    option: `${user}님의 시급은 얼마입니까?`,
    display: 'none',
    type: 'input',
    placeholder: '시급을 입력해주세요.',
    unit: '원',
    warning: '숫자를 입력해 주세요',
  },
  {
    option: '한 주 동안 근로 시간은 몇 시간 입니까?',
    display: 'none',
    type: 'input',
    placeholder: '시간을 입력해주세요.',
    unit: '시간',
    warning: '숫자를 입력해 주세요',
  },
  {
    option: '상시 5인 이상 사업장입니까?',
    display: 'none',
    type: 'binary',
    warning: '두 체크 박스 중 하나를 선택해 주세요',
  },
  {
    option: '한 주 동안 연장 근로시간은 몇 시간  입니까?',
    display: 'flex',
    description: '주 연장 근로 시간 (1일 8시간, 1주 40시간 초과한 시간)',
    type: 'input',
    placeholder: '시간을 입력해주세요.',
    unit: '시간',
    warning: '숫자를 입력해 주세요',
  },
  {
    option: '한 주 동안 야간 근로시간이 몇 시간 입니까?',
    display: 'flex',
    description: '야간 근로 시간 (오후 10시부터 명일 오전 6시까지 근무한 시간)',
    type: 'input',
    placeholder: '시간을 입력해주세요.',
    unit: '시간',
    warning: '숫자를 입력해 주세요',
  },
  {
    option: '취업규칙 등에서 정한 약정휴일에 근무하는 시간은?',
    display: 'none',
    type: 'input',
    warning: '숫자를 입력해 주세요',
  },
  {
    option: '어떤 세금이 적용되나요?',
    display: 'none',
    type: 'multi',
    warning: '세 체크 박스 중 하나를 선택해 주세요',
  },
];

// // 데이터를 비동기적으로 반환하는 함수
// const fetchData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data); // 데이터를 1초 후에 반환 (예시)
//     }, 1000);
//   });
// };

export default data;
