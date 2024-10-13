import React from 'react';
import '../../css/ModalType/Modal.result.scss';
import useGlobalState from '../../Hooks/useGlobalState';

const ModalResult = () => {
  const { isModalType, setModalType } = useGlobalState();

  return (
    <div className="modal-default">
      <div id="modal-title">결과지 이름</div>
      <div className="modal-content">
        <input type="text" />
        <div id="modal-input-sub">근로 결과지</div>
      </div>
      <div
        id="modal-save"
        onKeyDown={() => {
          console.log('test');
        }} // 키보드 지원
        role="button"
        tabIndex="0"
        onClick={() => {
          setModalType('ResultMessage');
        }}
      >
        저장하기
      </div>
    </div>
  );
};

export default ModalResult;
