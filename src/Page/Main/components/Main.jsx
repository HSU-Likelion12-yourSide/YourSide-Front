import React from 'react';
// import { useParams } from 'react-router-dom';
import slidShow from '../image/slide-show.png';
import contractReviewIntro from '../image/contract-review-intro.png';
import workArrangementIntro from '../image/work-arrangement-intro.png';
import questionAndAnswerIntro from '../image/question-and-answer-intro.png';
import arrowL from '../image/arrowL.svg';
import arrowR from '../image/arrowR.svg';
import arrowB from '../image/arrowB.svg';
import '../css/Main.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
// import useGlobalState from '../../../Global/Hooks/useGlobalState';

const Main = () => {
  // const { isUser } = useGlobalState();

  return (
    <div className="main">
      <Header />
      <Modal />
      <div className="slide-show">
        <div id="left">
          <img id="arrowL" src={arrowL} alt="arrowL" />
        </div>
        <img src={slidShow} alt="imageName" />
        <div id="right">
          <img id="arrowR" src={arrowR} alt="arrowR" />
        </div>
      </div>
      <div className="container">
        <div className="intro">
          <div>이렇게</div> <div>이용해보세요</div>
        </div>

        <div className="contents">
          <div className="contract-review-intro">
            <div className="group">
              <div className="member">
                <div id="number">1</div>
                <div id="group-title">내 계약서 검토</div>
                <div id="sub-title">지피지기 백전백승!</div>
                <div id="sub-title">
                  근로 계약서에 유의깊게 봐야할 항목을 확인해봐요
                </div>
                <div id="short-cut">
                  바로가기{' '}
                  <div>
                    <img src={arrowB} alt="short-cut" />
                  </div>{' '}
                </div>
              </div>
              <div id="image">
                <img src={contractReviewIntro} alt="imageName" />
              </div>
            </div>
          </div>

          <div className="work-arrangement-intro">
            <div className="group">
              <div id="image">
                <img src={workArrangementIntro} alt="imageName" />
              </div>
              <div className="member">
                <div id="number">2</div>
                <div id="group-title">내 근로 정리</div>
                <div id="sub-title">나의 근로 현황을 한 눈에!</div>
                <div id="sub-title">
                  혹시 놓치고 있는 급여가 얼마를 받을 수 있는 지 확인해 봐요.
                </div>
                <div id="short-cut">
                  바로가기{' '}
                  <div>
                    <img src={arrowB} alt="short-cut" />
                  </div>{' '}
                </div>
              </div>
            </div>
          </div>

          <div className="question-and-answer-intro">
            <div className="group">
              <div className="member">
                <div id="number">3</div>
                <div id="group-title">네편 현답</div>
                <div id="sub-title">도와줘요 네편!</div>
                <div id="sub-title">
                  결과지를 토대로 나의 상황을 간단히 보여주고
                </div>
                <div id="sub-title">궁금점에 대한 답을 알아가요!</div>
                <div id="short-cut">
                  바로가기{' '}
                  <div>
                    <img src={arrowB} alt="short-cut" />
                  </div>{' '}
                </div>
              </div>
              <div id="image">
                <img src={questionAndAnswerIntro} alt="imageName" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
