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
      <Modal isOpen />
      <div className="slide-show">
        <div id="left">
          <img id="arrowL" src={arrowL} alt="arrowL" />
        </div>
        <div className="section-title">
          <div>이렇게</div>
          <div>이용해보세요</div>
        </div>

        <div className="card-list">
          <div className="card">
            <div className="card-header">
              <div className="card-number">1</div>
              <div className="card-title">내 계약서 검토</div>
            </div>
            <p>
              우리 회사의 근로계약서를 쉽게 리뷰하고 궁금한 점을 남겨주세요.
            </p>
            <Link to="/ContractReview" className="link">
              <div className="card-link">바로가기</div>
            </Link>
          </div>
        </div>
        <div className="card-list">
          <div className="card">
            <div className="card-header">
              <div className="card-number">2</div>
              <div className="card-title">내 근로 정리</div>
            </div>
            <p>정리된 정보를 바탕으로 내 근로상황을 파악해보세요.</p>
            <Link to="/workArrangement" className="link">
              <div className="card-link">바로가기</div>
            </Link>
          </div>
        </div>
        <div className="card-list">
          <div className="card">
            <div className="card-header">
              <div className="card-number">3</div>
              <div className="card-title">네편 현답</div>
            </div>
            <p>우리의 현답을 통해 실시간 피드백을 확인하세요.</p>
            <Link to="/QuestionAndAnswer" className="link">
              <div className="card-link">바로가기</div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
