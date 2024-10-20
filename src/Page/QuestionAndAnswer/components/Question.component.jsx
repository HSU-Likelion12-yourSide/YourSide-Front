import React from 'react';
import '../css/Question.scss';
import { useNavigate } from 'react-router-dom';
import learnMoreArrow from '../image/learnMoreArrow.svg';
import navigateController from '../../../Global/function/navigateController';

const Question = () => {
  const navigate = useNavigate();
  return (
    <div className="qa-post-card">
      <div className="qa-left-group">
        <div className="qa-post-title">
          <div id="qa-post-mark">Q.</div>
          <div id="qa-post-question">
            계약서 쓴 날짜 보다 미리 와서 2시간 있다갔어요.
          </div>
        </div>
        <div className="qa-post-text">
          물류센터 아르바이트 하고 있는데 5월1일 근로자의날 이나 5월6일 대체
          공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다 쉽니다
          법정공휴일도 어떻게 되는지 궁금 합니다.
        </div>
      </div>
      <div className="qa-right-group">
        <div id="qa-post-date">2024.04.11</div>
        <div
          className="qa-learn-more"
          onKeyDown={() => {}}
          onClick={() => {
            /* eslint-disable-next-line no-alert */
            alert(
              '해당 페이지는 workSheet와 같은 고유 아이디를 받아 특정 결과지 페이지로 넘어가야 합니다. 우선 ViewQuestionAndAnswer로 넘거 갑니다.',
            );
            navigateController(navigate, '/ViewQuestionAndAnswer');
          }}
          role="button"
          tabIndex="0"
        >
          <div id="qa-learn-more-text">자세히 보기</div>
          <div>
            <img src={learnMoreArrow} alt="qa-learn-more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
