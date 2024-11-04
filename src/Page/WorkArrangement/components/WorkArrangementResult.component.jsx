import React from 'react';
import PropTypes from 'prop-types';
import '../css/WorkArrangementResult.scss';
import { useNavigate } from 'react-router-dom';
import navigateController from '../../../Global/function/navigateController';
import arrowRight from '../image/arrow-right.svg';

// key={item.id}
// id={item.id}
// title={item.title}
// content={item.content}
// extra_pay={item.extra_pay}
// week_pay={item.week_pay}
// night_pay={item.night_pay}
// overtime_pay={item.overtime_pay}
// holiday_pay={item.holiday_pay}

const WorkArrangementResult = ({ id, title, content }) => {
  const navigate = useNavigate();

  return (
    <div className="wa-result">
      <div className="wa-control">
        <div id="wa-title">{title}</div>
        <div
          id="wa-short-cut"
          onKeyDown={() => {}}
          onClick={() => {
            /* eslint-disable-next-line no-alert */
            alert(
              '해당 페이지는 workSheet와 같은 고유 아이디를 받아 특정 결과지 페이지로 넘어가야 합니다. 우선 ViewMyWorkResult로 넘거 갑니다.',
            );
            navigateController(navigate, `/ViewMyWorkResult/${id}`);
          }}
          role="button"
          tabIndex="0"
        >
          <span>상세보기</span>
          <div>
            <img src={arrowRight} alt="short-cut" />
          </div>
        </div>
      </div>
      <div className="wa-group">
        <div className="wa-description">{content}</div>
        <div className="wa-options">
          <div className="wa-contents">
            <div className="wa-title">발생 요건들</div>
            <div id="wa-option">주휴수당</div>
          </div>
        </div>
      </div>
    </div>
  );
};

WorkArrangementResult.propTypes = {
  id: PropTypes.number.isRequired, // id string
  title: PropTypes.string.isRequired, // title string
  content: PropTypes.string.isRequired, // content string
};

export default WorkArrangementResult;
