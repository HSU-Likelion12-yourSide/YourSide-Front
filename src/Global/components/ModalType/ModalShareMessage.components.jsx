import React from 'react';
import '../../css/ModalType/Modal.shareMessage.scss';
import checkImage from '../../image/modal-check.svg';
import useGlobalState from '../../Hooks/useGlobalState';
import modalStateController from '../../function/modalStateController';

const ModalResult = () => {
  const { isModalState, setModalState } = useGlobalState();

  return (
    <div className="modal-share">
      <img id="modal-check" src={checkImage} alt="img" />
      <div id="modal-title">공유 완료했습니다!</div>
      <div className="button-group">
        <div id="modal-share">다른 사람 결과지 보기</div>
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

export default ModalResult;
