import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/Modal.scss';
// 해당 modal.default는 modal.default 컴포넌트 분리시 함께 분리되는 부분
// import '../css/Modal.default.scss';
import useGlobalState from '../Hooks/useGlobalState';
import modalStateController from '../function/modalStateController';
// import ModalResult from './ModalType/ModalResult.components';

const Modal = ({ isOpen, ModalType, postData, postContent }) => {
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
          {ModalType && (
            <ModalType postData={postData} postContent={postContent} />
          )}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  ModalType: PropTypes.elementType.isRequired,
  postData: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        holidayPayMessage: PropTypes.string,
        incomeTasMessage: PropTypes.string,
        insuranceMessage: PropTypes.string,
        nightPayMessage: PropTypes.string,
        overFiveMessage: PropTypes.string,
        overtimePayMessage: PropTypes.string,
        totalPayMessage: PropTypes.string,
        weekPayMessage: PropTypes.string,
      }),
    }),
    /* eslint-disable camelcase */
    extra_pay: PropTypes.bool,
    holiday_money: PropTypes.number,
    holiday_pay: PropTypes.bool,
    holiday_work: PropTypes.number,
    income_tax: PropTypes.bool,
    major_insurance: PropTypes.bool,
    night_money: PropTypes.number,
    night_pay: PropTypes.bool,
    night_work: PropTypes.number,
    over_five: PropTypes.bool,
    overtime_money: PropTypes.number,
    overtime_pay: PropTypes.bool,
    overtime_work: PropTypes.number,
    total_pay: PropTypes.number,
    week_money: PropTypes.number,
    week_pay: PropTypes.bool,
    week_work: PropTypes.number,
    /* eslint-able camelcase */
  }),
  postContent: PropTypes.string,
  // ModalDefaultTypeState: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  postData: null, // 기본값 설정
  postContent: null,
};

export default Modal;
