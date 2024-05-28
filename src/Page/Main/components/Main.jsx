import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import '../css/Main.css';

const Main = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="banner">
          <button className="banner-button left">{'<'}</button>
          <button className="banner-button right">{'>'}</button>
          <div className="banner-dots">...</div>
        </div>
        <div className="section-title">
          <div>이렇게</div>
          <div>이용해보세요</div>
        </div>

        <div className="card-grid">
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
          <div className="card empty" />
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
