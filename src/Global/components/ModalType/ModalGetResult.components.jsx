import React from 'react';
import '../../css/ModalType/Modal.resultget.scss';
import useGlobalState from '../../Hooks/useGlobalState';
// import modalStateController from '../../function/modalStateController';
import VmwrResult from '../VmwrResult.component';

const Result = VmwrResult;

const ModalGetResult = () => {
  const { isModalState, setModalState } = useGlobalState();
  const { setModalType, isWorkSheetId } = useGlobalState();

  return (
    <div className="modal-get-result">
      <div id="modal-header">
        <div
          className="modal-back"
          onKeyDown={() => {
            console.log('test');
          }}
          role="button"
          tabIndex="0"
          onClick={() => {
            setModalType('ResultList');
          }}
        >
          &lt; 이전으로
        </div>
      </div>
      <div className="modal-result">
        <Result workSheetId={isWorkSheetId} />
      </div>
    </div>
  );
};

export default ModalGetResult;
