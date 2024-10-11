// Modal.jsx
import React from 'react';
import '../css/Modal.scss';

const Modal = () => {
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

export default Modal;
