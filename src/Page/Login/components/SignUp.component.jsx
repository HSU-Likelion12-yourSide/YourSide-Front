import React from 'react';
import '../css/SignUp.component.scss';
import SymbolLogo from '../img/symbol-logo-row.png';

const SignUpComponent = () => {
  return (
    <div className="SignUp-container">
      <div id="SignUp-Logo">
        <div>
          <img src={SymbolLogo} alt="" />
        </div>
      </div>

      <div className="SignUp-group">
        <div className="SignUp-id">
          <span>아이디</span>
          <input type="text" id="SignUp-input-id" />
        </div>
        <div className="SignUp-password">
          <span>비밀번호</span>
          <input type="text" id="SignUp-input-password" />
        </div>
        <div className="SignUp-email">
          <span>이메일</span>
          <input type="text" id="SignUp-input-email" />
        </div>
        <div className="SignUp-name">
          <span>이름</span>
          <input type="text" id="SignUp-input-name" />
        </div>
        <div className="SignUp-nickname">
          <span>이름</span>
          <input type="text" id="SignUp-input-nickname" />
        </div>
      </div>

      <div className="SignUp-submit">
        <button id="SignUp-button">로그인</button>
        <div className="SignUp-link">
          <div id="SignUp-find">이미 네편이 회원이신가요?</div>
          <div id="SignUp-SignUp">로그인</div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
