import React from 'react';
import '../../css/ModalType/Modal.result.scss';

const ModalResult = () => {
  return (
    <div>
      <div id="modal-title">결과지 이름</div>
      <div className="modal-content">
        <input type="text" />
        <div id="modal-input-sub">근로 결과지</div>
      </div>
      <div id="modal-save">저장하기</div>
    </div>
  );
};

export default ModalResult;
