import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/Modal.scss';
// 해당 modal.default는 modal.default 컴포넌트 분리시 함께 분리되는 부분
import '../css/Modal.default.scss';

const Modal = ({ isOpen = true }) => {
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
      <div className="modal-overlay">
        <div className="modal-default">
          <div id="modal-title">결과지 이름</div>
          <div className="modal-content">
            <input type="text" />
            <div id="modal-input-sub">근로 결과지</div>
          </div>
          <div id="modal-save">저장하기</div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  // onClose: PropTypes.bool.isRequired,
};

export default Modal;
