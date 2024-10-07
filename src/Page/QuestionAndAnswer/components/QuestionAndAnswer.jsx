import React from 'react';
import '../css/QuestionAndAnswer.scss';
import learnMoreArrow from '../image/learnMoreArrow.svg';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import MainShortCut from '../../Main/components/MainShortCut.component';

const App = () => {
  return (
    <div className="question-and-answer">
      <Header />
      <div className="qa-group">
        <div id="qa-box" className="selected">
          네편 답변
        </div>
        <div id="qa-box">네편 정보</div>
      </div>
      <div className="qa-popular-container">
        <div id="qa-popular-intro">인기게시글</div>
        <div className="qa-popular-group">
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
        </div>
      </div>
      <div className="qa-post-container">
        <div className="qa-post-intro">
          <div id="qa-post-word">게시글</div>
          <div id="qa-write">게시글 작성</div>
        </div>
        <div className="qa-post-group">
          <div className="qa-post-card">
            <div className="qa-left-group">
              <div className="qa-post-title">
                <div id="qa-post-mark">Q.</div>
                <div id="qa-post-question">
                  계약서 쓴 날짜 보다 미리 와서 2시간 있다갔어요.
                </div>
              </div>
              <div className="qa-post-text">
                물류센터 아르바이트 하고 있는데 5월1일 근로자의날 이나 5월6일
                대체 공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다
                쉽니다 법정공휴일도 어떻게 되는지 궁금 합니다.
              </div>
            </div>
            <div className="qa-right-group">
              <div id="qa-post-date">2024.04.11</div>
              <MainShortCut
                id="qa-learn-more"
                text="자세히 보기"
                img={learnMoreArrow}
                alt="Learn more arrow"
              />
            </div>
          </div>
          <div className="qa-post-card">
            <div className="qa-left-group">
              <div className="qa-post-title">
                <div id="qa-post-mark">Q.</div>
                <div id="qa-post-question">
                  계약서 쓴 날짜 보다 미리 와서 2시간 있다갔어요.
                </div>
              </div>
              <div className="qa-post-text">
                물류센터 아르바이트 하고 있는데 5월1일 근로자의날 이나 5월6일
                대체 공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다
                쉽니다 법정공휴일도 어떻게 되는지 궁금 합니다.
              </div>
            </div>
            <div className="qa-right-group">
              <div id="qa-post-date">2024.04.11</div>
              <MainShortCut
                id="qa-learn-more"
                text="자세히 보기"
                img={learnMoreArrow}
                alt="Learn more arrow"
              />
            </div>
          </div>
          <div className="qa-post-card">
            <div className="qa-left-group">
              <div className="qa-post-title">
                <div id="qa-post-mark">Q.</div>
                <div id="qa-post-question">
                  계약서 쓴 날짜 보다 미리 와서 2시간 있다갔어요.
                </div>
              </div>
              <div className="qa-post-text">
                물류센터 아르바이트 하고 있는데 5월1일 근로자의날 이나 5월6일
                대체 공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다
                쉽니다 법정공휴일도 어떻게 되는지 궁금 합니다.
              </div>
            </div>
            <div className="qa-right-group">
              <div id="qa-post-date">2024.04.11</div>
              <MainShortCut
                id="qa-learn-more"
                text="자세히 보기"
                img={learnMoreArrow}
                alt="Learn more arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
