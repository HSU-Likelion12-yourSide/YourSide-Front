export interface Bookmark {
  id?: number;
  posting_id: number;
  user_id: string;
  created_at?: string;
}

export interface calculateProps {
  hour_pay: number; // 시급
  week_work: number; // 주 근로 시간
  over_five: boolean; // 5인 이상 사업장 여부
  overtime_work: number; // 연장 근로 시간
  night_work: number; // 야간 근로 시간
  holiday_work: number; // 약정 휴일 근로 시간
  major_insurance: boolean; // 4대 보험 여부
  income_tax: boolean; // 소득세 여부
}

export interface workSheetProps {
  user_id: string;
  title: string;
  content: string;
  total_pay: number;
  extra_pay: boolean;
  week_pay: boolean;
  night_pay: boolean;
  overtime_pay: boolean;
  holiday_pay: boolean;
  is_open: boolean;
  // Optional fields for row data
  id?: number; // 자동 생성되는 필드
  created_at?: string; // 자동 생성되는 타임스탬프
}

export type workSheetInsert = Omit<workSheetProps, "id" | "created_at">;
