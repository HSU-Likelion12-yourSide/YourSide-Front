import React from 'react';
import PropTypes from 'prop-types';
import learnMoreArrow from '../image/learnMoreArrow.svg';

const Comment = ({ question, date, answer }) => {
  return (
    <div className="MyPage-comment-Content">
      <div className="MyPage-comment-Question">
        <span>{question}</span>
        <span>{date}</span>
      </div>
      <div className="MyPage-comment-Answer">
        <div className="MyPage-comment-element">
          <span>A.</span> {answer}
        </div>
        <div className="MyPage-comment-Button">
          <span>자세히 보기</span>
          <img src={learnMoreArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  question: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Comment;
