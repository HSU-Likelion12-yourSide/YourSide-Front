import React from 'react';
import '../css/Findpw.component.scss';

const FindpwComponent = () => {
  return (
    <div className="Findpw-container">
      <div className="Findpw-group">
        <div className="Findpw-email">
          <span>이메일</span>
          <input type="text" id="Findpw-input-email" />
        </div>
        <div className="Findpw-name">
          <span>이름</span>
          <input type="text" id="Findpw-input-name" />
        </div>
        <div className="Findpw-id">
          <span>아이디</span>
          <input type="text" id="Findpw-input-id" />
        </div>
      </div>

      <div className="Findpw-submit">
        <button id="Findpw-button">비밀번호 찾기</button>
        <div className="Findpw-link">
          <div id="Findpw-Findpw">회원가입</div>
        </div>
      </div>
    </div>
  );
};

export default FindpwComponent;
