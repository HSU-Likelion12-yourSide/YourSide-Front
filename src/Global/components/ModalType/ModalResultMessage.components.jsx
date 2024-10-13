import React from 'react';
import '../../css/ModalType/Modal.resultMessage.scss';
import checkImage from '../../image/modal-check.svg';

const ModalResult = () => {
  return (
    <div className="modal-result">
      <img id="modal-check" src={checkImage} alt="img" />
      <div id="modal-message">저장 완료했습니다.</div>
      <div id="modal-title">좋은 정보를 함께 공유해보세요!</div>
      <div className="button-group">
        <div id="modal-share">공유하기</div>
        <div id="modal-cancel">닫기</div>
      </div>
    </div>
  );
};

export default ModalResult;
