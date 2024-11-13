import React from 'react';
import PropTypes from 'prop-types';
import '../css/RankQuestion.scss';
import { useNavigate } from 'react-router-dom';
import navigateController from '../../../Global/function/navigateController';
import useGlobalState from '../../../Global/Hooks/useGlobalState';

const RankQuestion = ({ title, content }) => {
  const { isUser } = useGlobalState();
  const basePath = isUser ? `/${isUser}` : '';

  const navigate = useNavigate();
  return (
    <div
      // id={id}
      className="qa-popular-box"
      onKeyDown={() => {}}
      onClick={() => {
        /* eslint-disable-next-line no-alert */
        alert(
          '해당 페이지는 workSheet와 같은 고유 아이디를 받아 특정 결과지 페이지로 넘어가야 합니다. 우선 Main으로 넘겨 갑니다.',
        );
        navigateController(navigate, `${basePath}/`);
      }}
      role="button"
      tabIndex="0"
    >
      <div className="qa-popular-question">
        <div id="qa-popular-mark">Q.</div>
        <div id="qa-popular-title">
          {/* 해당 사안에도 주휴수당이 발생하는지 궁금합니다 */}
          {title}
        </div>
      </div>
      <div id="qa-popular-text">
        {/* 물류센터 아르바이트 하고 있는데 5월1일 근로자의날 이나 5월6일 대체
        공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다 쉽니다
        법정공휴일도 어떻게 되는지 궁금 합니다. */}
        {content}
      </div>
    </div>
  );
};

RankQuestion.propTypes = {
  // id: PropTypes.number.isRequired, // id string
  title: PropTypes.string.isRequired, // title string
  content: PropTypes.string.isRequired, // content string
};

export default RankQuestion;
