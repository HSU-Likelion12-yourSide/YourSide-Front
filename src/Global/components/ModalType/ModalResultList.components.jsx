import React from 'react';
import '../../css/ModalType/Modal.resultlist.scss';
import useGlobalState from '../../Hooks/useGlobalState';
import modalStateController from '../../function/modalStateController';
import closeIcon from '../../image/modal-closeIcon.svg';

const ModalResultList = () => {
  const { isModalState, setModalState } = useGlobalState();
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
          onClick={() => {
            modalStateController(isModalState, setModalState);
          }}
        >
          가져오기
        </div>
        <div
          id="modal-close"
          onKeyDown={() => {
            console.log('test');
          }} // 키보드 지원
          role="button"
          tabIndex="0"
          onClick={() => {
            modalStateController(isModalState, setModalState);
          }}
        >
          <img src={closeIcon} alt="x" id="modal-closeicon" />
        </div>
      </div>
      <div id="modal-contents">
        <div className="modal-resultbox">
          <div className="modal-resultname">미도인 성수 근로 결과지</div>
          <div
            className="modal-viewdetails"
            onKeyDown={() => {
              console.log('test');
            }} // 키보드 지원
            role="button"
            tabIndex="0"
            onClick={() => {
              setModalType('GetResult');
            }}
          >
            자세히 보기 &gt;
          </div>
        </div>
        <div className="modal-resultbox">
          <div className="modal-resultname">미도인 성수 근로 결과지</div>
          <div className="modal-viewdetails">자세히 보기 &gt;</div>
        </div>
        <div className="modal-resultbox">
          <div className="modal-resultname">미도인 성수 근로 결과지</div>
          <div className="modal-viewdetails">자세히 보기 &gt;</div>
        </div>
        <div className="modal-resultbox">
          <div className="modal-resultname">미도인 성수 근로 결과지</div>
          <div className="modal-viewdetails">자세히 보기 &gt;</div>
        </div>
        <div className="modal-resultbox">
          <div className="modal-resultname">미도인 성수 근로 결과지</div>
          <div className="modal-viewdetails">자세히 보기 &gt;</div>
        </div>
      </div>
    </div>
  );
};

export default ModalResultList;
