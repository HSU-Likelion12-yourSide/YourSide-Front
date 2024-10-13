import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ModalType/Modal.signup.scss';
import checkImage from '../../image/modal-check.svg';

const ModalSignUp = () => {
  return (
    <div className="modal-login">
      <img id="modal-check" src={checkImage} alt="img" />
      <div id="modal-title">회원가입 완료</div>
      <div id="modal-sub">다양한 네편을 만나보세요!</div>
      <div className="button-group">
        <Link id="link-underline" to="/Login">
          <div id="modal-login-in">로그인 하러 가기</div>
        </Link>
      </div>
    </div>
  );
};

export default ModalSignUp;
