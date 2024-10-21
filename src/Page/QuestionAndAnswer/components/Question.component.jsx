import React from 'react';
import PropTypes from 'prop-types';
import '../css/Question.scss';
import { useNavigate } from 'react-router-dom';
import learnMoreArrow from '../image/learnMoreArrow.svg';
import navigateController from '../../../Global/function/navigateController';

const Question = ({ id, title, content, date }) => {
  const navigate = useNavigate();
  return (
    <div id={id} className="qa-post-card">
      <div className="qa-left-group">
        <div className="qa-post-title">
          <div id="qa-post-mark">Q.</div>
          <div id="qa-post-question">{title}</div>
        </div>
        <div className="qa-post-text">{content}</div>
      </div>
      <div className="qa-right-group">
        <div id="qa-post-date">{date}</div>
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

Question.propTypes = {
  id: PropTypes.number.isRequired, // id string
  title: PropTypes.string.isRequired, // title string
  content: PropTypes.string.isRequired, // content string
  date: PropTypes.string.isRequired, // date string
};

export default Question;
