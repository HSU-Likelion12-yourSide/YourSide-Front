import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/Modal.scss';

const Modal = ({ isOpen }) => {
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
      <div className="overlay">
        <div className="default">
          <div>결과지 이름</div>
          <div>
            <input type="text" />
            <div>근로 결과지</div>
          </div>
          <div>저장하기</div>
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
