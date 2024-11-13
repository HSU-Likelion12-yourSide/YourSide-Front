import React from 'react';
import PropTypes from 'prop-types';
import '../css/Question.scss';
import { useNavigate } from 'react-router-dom';
import learnMoreArrow from '../image/learnMoreArrow.svg';
import navigateController from '../../../Global/function/navigateController';
import useGlobalState from '../../../Global/Hooks/useGlobalState';

const Question = ({ id, title, content, date }) => {
  const navigate = useNavigate();
  const { isWorkSheetId, setWorkSheetId } = useGlobalState();
  const { isUser } = useGlobalState();
  const basePath = isUser ? `/${isUser}` : '';

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
            setWorkSheetId(id);
            navigateController(
              navigate,
              `${basePath}/ViewQuestionAndAnswer/${id}`,
            );
          }}
          role="button"
          tabIndex="0"
        >
          {/* 여기서 QuestionAndAnswer에서 받아온 GlobalState를 set하고 return할 수 있도록 해야함 */}
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
