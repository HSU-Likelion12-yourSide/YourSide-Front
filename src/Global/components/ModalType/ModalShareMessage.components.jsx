import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/ModalType/Modal.shareMessage.scss';
import checkImage from '../../image/modal-check.svg';
import useGlobalState from '../../Hooks/useGlobalState';
import modalStateController from '../../function/modalStateController';
import navigateController from '../../function/navigateController';

const ModalResult = () => {
  const { isModalState, setModalState } = useGlobalState();
  const navigate = useNavigate();

  return (
    <div className="modal-share">
      <img id="modal-check" src={checkImage} alt="img" />
      <div id="modal-title">공유 완료했습니다!</div>
      <div className="button-group">
        <div
          id="modal-share"
          onKeyDown={() => {}}
          onClick={() => {
            /* eslint-disable-next-line no-alert */
            alert('다른 결과지 페이지는 준비 중입니다.');
            navigateController(navigate, '/ViewUsersWorkResult');
          }}
          role="button"
          tabIndex="0"
        >
          다른 사람 결과지 보기
        </div>
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
