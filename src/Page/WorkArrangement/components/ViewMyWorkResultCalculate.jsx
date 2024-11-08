import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/ViewMyWorkResult.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import VmwrResult from '../../../Global/components/VmwrResult.component';
import useGlobalState from '../../../Global/Hooks/useGlobalState';
import Modal from '../../../Global/components/Modal.components';
import ModalResult from '../../../Global/components/ModalType/ModalResult.components';
import ModalResultMessage from '../../../Global/components/ModalType/ModalResultMessage.components';
import modalStateController from '../../../Global/function/modalStateController';
import ModalShareMessage from '../../../Global/components/ModalType/ModalShareMessage.components';

const Result = VmwrResult;

const ViewMyWorkResult = () => {
  const [content, setContent] = useState(''); // 렌더링할 content 상태 관리

  const { isModalState, setModalState, isModalType, setModalType } =
    useGlobalState();
  const location = useLocation();
  const { state: postData } = location || {}; // POST로 전달된 데이터

  useEffect(() => {
    if (postData) {
      console.log('POST 응답 데이터:', postData.data);
      setContent(<Result postData={postData} />);
    }
  }, [postData]);
  // 미리 ModalType 컴포넌트를 설정
  // ModalType이 변경 되어도 항상 ModalComponent는 ModalResult로 정의 된다.
  let ModalComponent = ModalResult;
  if (isModalType === 'ResultMessage') {
    ModalComponent = ModalResultMessage;
  } else if (isModalType === 'ShareMessage') {
    ModalComponent = ModalShareMessage;
  }

  return (
    <div className="ViewMyWorkResult">
      <Header />
      {isModalState && (
        <Modal
          isOpen={isModalState}
          ModalType={ModalComponent}
          // ModalDefaultTypeState={isModalType}
        />
      )}
      <div className="vmwr-title">
        {postData && postData.data && postData.data.nickname
          ? `${postData.data.nickname}님의 근로 결과지`
          : '내 근로 결과지'}
      </div>
      <div className="vmwr-result">{content}</div>
      <div id="vmwr-group">
        <div
          className="vmwr-button"
          onKeyDown={() => {
            console.log('test');
          }}
          role="button"
          tabIndex="0"
          onClick={() => {
            setModalType('Result');
            modalStateController(isModalState, setModalState);
          }}
        >
          결과지 저장하기
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewMyWorkResult;
