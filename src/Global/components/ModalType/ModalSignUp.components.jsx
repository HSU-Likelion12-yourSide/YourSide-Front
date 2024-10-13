import React from 'react';
import '../../css/ModalType/Modal.signup.scss';
import checkImage from '../../image/modal-check.svg';
import useGlobalState from '../../Hooks/useGlobalState';
import modalStateController from '../../function/modalStateController';

const ModalSignUp = () => {
  const { isModalState, setModalState } = useGlobalState();
  return (
    <div className="modal-login">
      <img id="modal-check" src={checkImage} alt="img" />
      <div id="modal-title">회원가입 완료</div>
      <div id="modal-sub">다양한 네편을 만나보세요!</div>
      <div className="button-group">
        <div
          id="modal-login-in"
          onKeyDown={() => {
            console.log('test');
          }} // 키보드 지원
          role="button"
          tabIndex="0"
          onClick={() => {
            modalStateController(isModalState, setModalState);
          }}
        >
          로그인 하러 가기
        </div>
      </div>
    </div>
  );
};

export default ModalSignUp;
