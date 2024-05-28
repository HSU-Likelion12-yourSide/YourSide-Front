import React from 'react';
import SymbolRow from '../img/symbol-logo-row.png';
import '../css/signup.css';

const SignUp = () => {
  return (
    <div className="Sign-Up">
      <div className="container">
        <div className="symbol">
          <img src={SymbolRow} alt="symbol-logo-row" />
        </div>

        <div className="id">
          <p>아이디</p>
          <input placeholder="아이디를 입력해 주세요" />
        </div>

        <div className="pw">
          <p>비밀번호</p>
          <input placeholder="비밀번호를 입력해 주세요" />
        </div>

        <div className="email">
          <p>이메일</p>
          <input placeholder="아이디를 입력해 주세요" />
        </div>

        <div className="name">
          <p>이름</p>
          <input placeholder="아이디를 입력해 주세요" />
        </div>

        <div className="nickname">
          <p>닉네임</p>
          <input placeholder="아이디를 입력해 주세요" />
        </div>

        <button id="Sign-Up-button">로그인</button>
        <div className="sign-up">
          <p>이미 네편이 회원이신가요?</p>
          <p style={{ color: 'black' }}>
            <strong>로그인</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
