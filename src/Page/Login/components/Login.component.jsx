import React from 'react';
import SymbolLogo from '../img/symbol-logo.png';
import SymbolLogoText from '../img/symbol-logo-text.png';
import '../css/Login.component.scss';

const LoginComponent = () => {
  return (
    <div className="Login-container">
      <div id="Login-Logo">
        <div>
          <img src={SymbolLogo} alt="" />
        </div>
        <div id="Login-mention">더 이상, 혼자가 아닌 너를 위해</div>
        <div>
          <img src={SymbolLogoText} alt="" />
        </div>
      </div>

      <div className="Login-group">
        <div className="Login-id">
          <span>아이디</span>
          <input type="text" id="Login-input-id" />
        </div>
        <div className="Login-password">
          <span>비밀번호</span>
          <input type="text" id="Login-input-password" />
        </div>
      </div>

      <div className="Login-submit">
        <button id="Login-button">로그인</button>
        <div className="Login-link">
          <div id="Login-find">아이디/비밀번호 찾기</div>
          <div id="Login-SignUp">회원가입</div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
