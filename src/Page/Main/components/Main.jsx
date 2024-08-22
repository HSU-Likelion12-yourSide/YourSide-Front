import React from 'react';
import slidShow from '../image/slide-show.png';
// import contractReviewIntro from '../image/contract-review-intro.png';
// import workArrangementIntro from '../image/work-arrangement-intro.png';
// import questionAndAnswerIntro from '../image/question-and-answer-intro.png';
import '../css/Main.css';

const Main = () => {
  return (
    <div className="main">
      <div className="slide-show">
        <div id="left">좌</div>
        <img src={slidShow} alt="imageName" />
        <div id="right">우</div>
      </div>
      <div className="container">
        <div className="intro">
          <h1>이렇게 이용해보세요</h1>
        </div>

        <div className="contents">
          <div className="contract-review-intro">
            <div className="group">
              <div id="number">1</div>
              <div>내 계약서 검토</div>
              <div>지피지기 백전백승!</div>
              <div>근로 계약서에 유의깊게 봐야할 항목을 확인해봐요</div>
              <div id="short-cut">바로가기</div>
            </div>
            <div id="image">
              <img src="" alt="imageName" />
            </div>
          </div>

          <div className="work-arrangement-intro">
            <div id="image">
              <img src="" alt="imageName" />
            </div>
            <div className="group">
              <div id="number">2</div>
              <div>내 근로 정리</div>
              <div>나의 근로 현황을 한 눈에!</div>
              <div>
                혹시 놓치고 있는 급여가 얼마를 받을 수 있는 지 확인해 봐요.
              </div>
              <div id="short-cut">바로가기</div>
            </div>
          </div>

          <div className="question-and-answer-intro">
            <div className="group">
              <div id="number">3</div>
              <div>네편 현답</div>
              <div>도와줘요 네편!</div>
              <div>
                결과지를 토대로 나의 상황을 간단히 보여주고 궁금점에 대한 답을
                알아가요!
              </div>
              <div id="short-cut">바로가기</div>
            </div>
            <div id="image">
              <img src="" alt="imageName" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
