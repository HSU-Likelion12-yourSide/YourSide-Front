import React from 'react';
import '../../css/ModalType/Modal.notifi.scss';
import checkImage from '../../image/modal-check.svg';

const ModalNotifi = () => {
  return (
    <div className="modal-notifi">
      <img id="modal-check" src={checkImage} alt="img" />
      <div id="modal-title">안녕하세요!</div>
      <div id="modal-sub">
        <div>네편입니다.</div>
        <div>24년 12월 13일부터 무기한까지 서버이전 있을 예정입니다.</div>
        <div>이용에 불편을 드려 죄송합니다.</div>
        <div>기다려주시면 더 좋은 모습으로 보답해 드리겠습니다.</div>
      </div>
    </div>
  );
};

export default ModalNotifi;
