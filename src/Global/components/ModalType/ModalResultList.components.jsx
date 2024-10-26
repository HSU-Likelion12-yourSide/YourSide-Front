import React from 'react';
import '../../css/ModalType/Modal.resultlist.scss';
import useGlobalState from '../../Hooks/useGlobalState';
import closeIcon from './closeIcon.svg';

const ModalResult = () => {
  const { setModalType } = useGlobalState();

  return (
    <div className="modal-default">
      <div id="modal-header">
        <div id="modal-title">나의 결과지</div>
        <div
          id="modal-get"
          onKeyDown={() => {
            console.log('test');
          }}
          role="button"
          tabIndex="0"
        >
          가져오기
        </div>
        <div id="modal-close">
          <img src={closeIcon} alt="x" id="modal-closeicon" />
        </div>
      </div>
      <div id="modal-contents">
        {[...Array(5)].map((_, index) => (
          <div key={index} id="modal-resultbox">
            <div id="modal-resultname">미도인 성수 근로 결과지</div>
            <div id="modal-viewdetails">자세히 보기 &gt;</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalResult;
