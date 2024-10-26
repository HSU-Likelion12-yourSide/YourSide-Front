import React from 'react';
import '../../css/ModalType/Modal.resultlist.scss';
import useGlobalState from '../../Hooks/useGlobalState';
import closeIcon from './image.png';

const ModalResult = () => {
  const { setModalType } = useGlobalState();

  return (
    <div className="modal-default">
      <div id="modal-header">
        <div id="modal-title">나의 결과지</div>
        <div id="modal-get">가져오기</div>
        <div id="modal-close">
          <img src={closeIcon} alt="x" id="modal-closeicon" />
        </div>
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
