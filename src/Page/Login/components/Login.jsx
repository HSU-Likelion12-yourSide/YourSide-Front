import React from 'react';
import '../css/login.css';
import SymbolLogo from '../img/symbol-logo.png';
import SymbolLogoText from '../img/symbol-logo-text.png';

const MyPage = () => {
  return (
    <div className="Login">
      <div className="container">
        <div className="symbol">
          <img src={SymbolLogo} alt="symbol-logo" />
          <p>더 이상, 혼자가 아닌 너를 위해</p>
          <img src={SymbolLogoText} alt="symbol-logo-text" />
        </div>

        <div className="id">
          <p>아이디</p>
          <input placeholder="아이디를 입력해 주세요" />
        </div>

        <div className="pw">
          <p>비밀번호</p>
          <input placeholder="비밀번호를 입력해 주세요" />
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '14px',
              fontSize: '13px',
              color: '#DC0000',
            }}
          >
            아이디 혹은 비밀번호가 옳지 않습니다.
          </p>
        </div>

        <button id="login-button">로그인</button>
        <div className="sign-up">
          <p>아이디/비밀번호 찾기</p>
          <p style={{ color: 'black' }}>
            <strong>회원가입</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
