import React from 'react';
import '../css/RankQuestion.scss';

const RankQuestion = () => {
  return (
    <div className="qa-popular-box">
      <div className="qa-popular-question">
        <div id="qa-popular-mark">Q.</div>
        <div id="qa-popular-title">
          해당 사안에도 주휴수당이 발생하는지 궁금합니다
        </div>
      </div>
      <div id="qa-popular-text">
        물류센터 아르바이트 하고 있는데 5월1일 근로자의날 이나 5월6일 대체
        공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다 쉽니다
        법정공휴일도 어떻게 되는지 궁금 합니다.
      </div>
    </div>
  );
};

export default RankQuestion;
