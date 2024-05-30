import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/WorkArrangement.css';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';

const data = {
  results: [
    {
      id: 1,
      title: '미도인 성수 근로 결과지',
      detail: '상세보기',
      description:
        '상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이 없습니다. 주 근로 시간이 40시간이므로 주휴수당이 발생합니다. 5인 미만 사업장에서 근무하시기에 연장근로수당이 발생하지 않습니다. 5인 미만 사업장에서 근무하시기에 휴일근로수당이 발생하지 않습니다...',
      conditions: [
        { id: 1, text: '주휴수당', received: true },
        { id: 2, text: '기본요건', received: false },
        { id: 3, text: '야간근로수당', received: true },
        { id: 4, text: '연장근로수당', received: false },
      ],
    },
    {
      id: 2,
      title: '메가커피 근로 결과지',
      detail: '상세보기',
      description:
        '상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이 없습니다. 주 근로 시간이 40시간이므로 주휴수당이 발생합니다.',
      conditions: [
        { id: 5, text: '주휴수당', received: true },
        { id: 6, text: '기본요건', received: true },
        { id: 7, text: '직장적합성', received: false },
        { id: 8, text: '인간관계', received: true },
      ],
    },
    {
      id: 3,
      title: '아웃백 근로 결과지',
      detail: '상세보기',
      description:
        '상시 5인 미만 사업장에서 근무하시므로 추가적인 가산 수당이 없습니다.',
      conditions: [
        { id: 9, text: '기본요건', received: true },
        { id: 10, text: '추진적합성', received: false },
        { id: 11, text: '주요관계', received: true },
      ],
    },
  ],
};

const QuestionAndAnswer = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="header-section">
        <h2>
          현재 <span className="highlight">나의 근로 상황</span>
          <br />
          얼마나 알고 계신가요?
        </h2>
        <div className="banner-container">
          <div className="banner-photo">배너 사진</div>
          <div className="banner-button">바로가기</div>
        </div>
      </div>
      <div className="results-section">
        <h3>다른 결과지들은 어떨까?</h3>
        {data.results.map(result => (
          <ResultCard
            key={result.id}
            title={result.title}
            detail={result.detail}
            description={result.description}
            conditions={result.conditions}
          />
        ))}
      </div>

      <button className="load-more-button">더보기</button>
      <Footer />
    </div>
  );
};

const ResultCard = ({ title, detail, description, conditions }) => {
  return (
    <div className="result-card">
      <div className="result-title">{title}</div>
      <div className="result-content">{description}</div>
      <div className="condition-list">
        {conditions.map(condition => (
          <div
            className={`condition ${condition.received ? 'true' : 'false'}`}
            key={condition.id}
          >
            {condition.text}
          </div>
        ))}
      </div>
      <Link to="/MyPage" className="detail-link">
        {detail}
      </Link>
    </div>
  );
};

ResultCard.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  conditions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      received: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default QuestionAndAnswer;
