import React from 'react';
import '../css/Findid.component.scss';

const FindidComponent = () => {
  return (
    <div className="Findid-container">
      <div className="Findid-group">
        <div className="Findid-email">
          <span>이메일</span>
          <input type="text" id="Findid-input-email" />
        </div>
        <div className="Findid-name">
          <span>이름</span>
          <input type="text" id="Findid-input-name" />
        </div>
      </div>

      <div className="Findid-submit">
        <button id="Findid-button">아이디 찾기</button>
        <div className="Findid-link">
          <div id="Findid-Findid">회원가입</div>
        </div>
      </div>
    </div>
  );
};

export default FindidComponent;
