import { calculateProps } from "./type.ts";
// 근로 조건에 따라 total_pay 계산
export function calculateTotalPay({
  hour_pay, // 시급
  week_work, // 주 근로 시간
  over_five, // 5인 이상 사업장 여부
  overtime_work, // 연장 근로 시간
  night_work, // 야간 근로 시간
  holiday_work, // 약정 휴일 근로 시간
  major_insurance, // 4대 보험 여부
  income_tax, // 소득세 여부
}: calculateProps) {
  // 기본 급여 계산
  const basic_pay = hour_pay * week_work * 4; // 주 근로 시간 * 4주

  // 연장 근로 수당 계산 (연장 근로는 시급의 1.5배)
  const overtime_money = overtime_work * hour_pay * 1.5 * 4; // 4주 기준

  // 야간 근로 수당 계산 (야간 근로는 시급의 1.5배)
  const night_money = night_work * hour_pay * 1.5 * 4;

  // 휴일 근로 수당 계산 (휴일 근로는 시급의 2배)
  const holiday_money = holiday_work * hour_pay * 2 * 4;

  // 주휴수당 계산 (5인 이상 사업장만 해당, 주 근로 시간이 15시간 이상일 경우)
  const week_money = over_five && week_work >= 15
    ? hour_pay * week_work / 5 // 주휴수당: 1일치 시급
    : 0;

  // 총 급여 계산
  const total_pay = basic_pay + overtime_money + night_money + holiday_money +
    week_money;

  // 4대 보험 공제 (8%로 가정: 국민연금 4.5%, 건강보험 3.5%)
  const insurance_deduction = major_insurance ? total_pay * 0.08 : 0;

  // 소득세 공제 (3.3%로 가정)
  const income_tax_deduction = income_tax ? total_pay * 0.033 : 0;

  // 최종 급여 (공제 후 금액)
  const final_pay = total_pay - insurance_deduction - income_tax_deduction;

  return {
    over_five,
    week_work,
    week_money: Math.round(week_money),
    night_work,
    night_money: Math.round(night_money),
    overtime_work,
    overtime_money: Math.round(overtime_money),
    holiday_work,
    holiday_money: Math.round(holiday_money),
    major_insurance,
    income_tax,
    total_pay: Math.round(final_pay),
    extra_pay: overtime_money > 0 || night_money > 0 || holiday_money > 0,
    week_pay: week_money > 0,
    night_pay: night_money > 0,
    overtime_pay: overtime_money > 0,
    holiday_pay: holiday_money > 0,
  };
}

// // 예시 호출
// const input = {
//   hour_pay: 10000, // 시급
//   week_work: 10, // 주 근로 시간
//   over_five: false, // 5인 이상 사업장
//   overtime_work: 5, // 연장 근로 시간
//   night_work: 2, // 야간 근로 시간
//   holiday_work: 0, // 약정 휴일 근로 시간
//   major_insurance: false, // 4대 보험
//   income_tax: false, // 소득세
// };

// const totalPay = calculateTotalPay(input);
// console.log("Total Pay:", totalPay);
