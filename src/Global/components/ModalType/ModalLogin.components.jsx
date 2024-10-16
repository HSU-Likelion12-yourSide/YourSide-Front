import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ModalType/Modal.login.scss';
import modalLogo from '../../image/modal-logo.svg';
import useGlobalState from '../../Hooks/useGlobalState';
import modalStateController from '../../function/modalStateController';

const ModalLogin = () => {
  const { isModalState, setModalState } = useGlobalState();

  return (
    <div className="modal-login">
      <img id="modal-logo" src={modalLogo} alt="img" />
      <div id="modal-title">로그인이 필요합니다!</div>
      <div id="modal-sub">더 이상 혼자가 아닌 너를 위해, 네편</div>
      <div className="button-group">
        <Link id="link-underline" to="/Login">
          <div id="modal-login-in">로그인</div>
        </Link>
        <div
          id="modal-cancel"
          onKeyDown={() => {
            console.log('test');
          }} // 키보드 지원
          role="button"
          tabIndex="0"
          onClick={() => {
            modalStateController(isModalState, setModalState);
          }}
        >
          닫기
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
