import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/Modal.scss';
// 해당 modal.default는 modal.default 컴포넌트 분리시 함께 분리되는 부분
// import '../css/Modal.default.scss';
import useGlobalState from '../Hooks/useGlobalState';
import modalStateController from '../function/modalStateController';
// import ModalResult from './ModalType/ModalResult.components';

/**
 * Modal 컴포넌트
 *
 * @param {Object} props - Modal 컴포넌트의 Props, <span style="color:tomato;">Modal의 Components는 Global/Components/ModalType에서 확인 가능하다.</span>
 * @param {boolean} props.isOpen - 모달이 열렸는지 여부를 나타내는 상태.
 * @param {React.ElementType} props.ModalType - 렌더링할 모달의 타입(컴포넌트).
 * @param {Object} [props.postData] - 모달 내부에서 사용될 데이터.
 * @param {string} [props.postContent] - 모달의 텍스트 콘텐츠.
 *
 * @description 이 컴포넌트는 전역 상태를 관리하며 모달 창을 열고 닫는 기능을 제공한다.
 * 사용자가 클릭하여 모달을 닫거나 특정 `ModalType`을 렌더링할 수 있다.
 * `isOpen` 상태를 기반으로 모달을 렌더링하며, 모달이 열릴 때 스크롤 비활성화 기능을 제공한다.
 *
 * @version 1.0.0
 * @author 김동우 | 4BEE <4bee.code@gmail.com>
 * @see {@link https://github.com/HSU-Likelion12-yourSide/YourSide-Front/pull/56}
 *
 * @returns {JSX.Element|null} - 모달 컴포넌트를 반환하며, `isOpen`이 `false`인 경우 `null`을 반환.
 *
 * @example
 * // 기본 사용법
 * import Modal from './Modal';
 *
 * const App = () => {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   const toggleModal = () => setIsOpen(!isOpen);
 *
 *   return (
 *     <div>
 *       <button onClick={toggleModal}>Open Modal</button>
 *       <Modal
 *         isOpen={isOpen}
 *         ModalType={MyModalComponent}
 *         postData={{ data: { content: { holidayPayMessage: '내용' } } }}  // post 되는 데이터가 있을 경우 사용
 *         postContent="모달 내용"  // ModalType 중에 postContent가 필요한 경우 상요 `ModalResult.components.tsx`가 대표적이다.
 *       />
 *     </div>
 *   );
 * };
 */

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
