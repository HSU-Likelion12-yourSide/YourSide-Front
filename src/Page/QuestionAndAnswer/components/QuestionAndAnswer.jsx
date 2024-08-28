import React from 'react';
import '../css/QuestionAndAnswer.scss';

const App = () => {
  return (
    <div className="question-and-answer">
      <div className="tab-container">
        <div className="tab-group active">
          <div className="tab-text">네편 답변</div>
        </div>
        <div className="tab-group">
          <div className="tab-text">네편 정보</div>
        </div>
      </div>
      <div className="popular-container">
        <div className="popular-text">인기게시글</div>
        <div className="popular-card-group">
          <div className="popular-card">
            <div className="popular-content">
              <div className="question-header">
                <div className="question-mark">Q.</div>
                <div className="question-title">
                  해당 사안에도 주휴수당이 발생하는지 궁금합니다
                </div>
              </div>
              <div className="question-detail">
                물류센터 아르바이트 하고 있는데 5월1일 근로자의날 이나 5월6일
                대체 공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다
                쉽니다. 법정공휴일도 어떻게 되는지 궁금 합니다.
              </div>
            </div>
          </div>
          <div className="popular-card">
            <div className="popular-content">
              <div className="question-header">
                <div className="question-mark">Q.</div>
                <div className="question-title">
                  해당 사안에도 주휴수당이 발생하는지 궁금합니다
                </div>
              </div>
              <div className="question-detail">
                물류센터 아르바이트 하고 있는데 5월1일 근로자의날 이나 5월6일
                대체 공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다
                쉽니다. 법정공휴일도 어떻게 되는지 궁금 합니다.
              </div>
            </div>
          </div>
          <div className="popular-card">
            <div className="popular-content">
              <div className="question-header">
                <div className="question-mark">Q.</div>
                <div className="question-title">
                  해당 사안에도 주휴수당이 발생하는지 궁금합니다
                </div>
              </div>
              <div className="question-detail">
                저는 지금 현재 1년 계약직으로 일하고 있습니다. 일한 지 몇 개월
                안 돼서 일하다가 다쳤고 산재 인정받고 한 달은 쉬고 한 달은 무급
                병가로 쉬었습니다. 근데 그 당시 관리자가 휴직계 써야 한다고
                이야기도 안 했고...두 달 쉬고 복귀하고도 관리자가 말이 없었고
                관리자가 싹 바뀌었습니다.. 이후 바뀐 관리자도 아무 말이 없었고
                제가 닥달해서 본사 담당자에게 연락이 닿았고 결론은 지금 휴직계를
                쓰기엔 늦었다고 그냥 지내라는 답변이었습니다. 휴직계를 안 쓴 거
                때문에 유후수당도 잘못 나와 뱉어야 할 돈도 있습니다...만약, 이
                상태에서 1년을 채우고 그만두면 퇴직금을 받을 수 있는지 그리고
                1년 안 채우고 그만둬도 그만두기 전까지 일하는 거에 차감되는 거
                말곤 다른 문제는 없겠죠? 본사에서도 제대로 이야기해 주지 않아서
                모르겠네요..
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post-container">
        <div className="post-header">
          <div className="post-text">게시글</div>
          <div className="write-button">
            <div className="button-text">게시글 작성</div>
          </div>
        </div>
        <div className="post-card">
          <div className="post-question-header">
            <div className="post-question-mark">Q.</div>
            <div className="post-question-title">
              계약서 쓴 날짜 보다 미리 와서 2시간 있다갔어요.
            </div>
            <div className="post-date">2024.04.11</div>
          </div>
          <div className="post-detail">
            물류센터 아르바이트 하고 있는데 5월1일 근로자의날 이나 5월6일 대체
            공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다 쉽니다
            법정공휴일도 어떻게 되는지 궁금 합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
