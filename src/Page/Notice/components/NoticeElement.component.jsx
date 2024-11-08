import React from 'react';
import '../css/NoticeElement.scss';

const NoticeElement = () => {
  return (
    <div className="Notice-element">
      <div id="Notice-number">주요</div>
      <div id="Notice-content">
        열심히 일하는 당신을 위한 ‘네편’이 되겠습니다.
      </div>
      <div id="Notice-date">2024.05.01</div>
    </div>
  );
};

export default NoticeElement;
