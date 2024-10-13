import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/Modal.scss';
// 해당 modal.default는 modal.default 컴포넌트 분리시 함께 분리되는 부분
// import '../css/Modal.default.scss';
import useGlobalState from '../Hooks/useGlobalState';
import modalStateController from '../function/modalStateController';
// import ModalResult from './ModalType/ModalResult.components';

const Modal = ({ isOpen, ModalType }) => {
  const { isModalState, setModalState } = useGlobalState();
  useEffect(() => {
    if (isOpen) {
      // 모달이 열리면 스크롤 비활성화
      document.body.style.overflow = 'hidden';
    } else {
      // 모달이 닫히면 스크롤 활성화
      document.body.style.overflow = 'auto';
    }
    // Cleanup 함수로 컴포넌트가 사라질 때 스크롤을 다시 활성화 -> 아직 어떻게 사용하는지 이해 못함
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="Modal">
      <div
        className="modal-overlay"
        onKeyDown={() => {
          console.log('test');
        }} // 키보드 지원
        role="button"
        tabIndex="0"
        onClick={() => {
          modalStateController(isModalState, setModalState);
        }}
      >
        <div
          onClick={e => {
            e.stopPropagation();
            // setModalType(ModalDefaultTypeState);
          }} // 내부 클릭 시 이벤트 전파 차단
          onKeyDown={() => {
            console.log('test');
          }} // 키보드 지원
          role="button"
          tabIndex="0"
        >
          {/* <ModalResult /> */}
          {ModalType && <ModalType />}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  ModalType: PropTypes.elementType.isRequired,
  // ModalDefaultTypeState: PropTypes.string.isRequired,
};

export default Modal;
