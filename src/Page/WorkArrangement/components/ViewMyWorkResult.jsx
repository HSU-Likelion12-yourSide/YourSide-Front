import React, { useEffect, useState } from 'react';
import '../css/ViewMyWorkResult.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import VmwrResult from '../../../Global/components/VmwrResult.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import useGlobalState from '../../../Global/Hooks/useGlobalState';
import Modal from '../../../Global/components/Modal.components';
import ModalResult from '../../../Global/components/ModalType/ModalResult.components';
import ModalResultMessage from '../../../Global/components/ModalType/ModalResultMessage.components';
import modalStateController from '../../../Global/function/modalStateController';

const Result = VmwrResult;

const ViewMyWorkResult = () => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI('/results', 'GET');
  const [content, setContent] = useState(''); // 렌더링할 content 상태 관리

  const { isModalState, setModalState, isModalType, setModalType } =
    useGlobalState();

  // 미리 ModalType 컴포넌트를 설정
  // ModalType이 변경 되어도 항상 ModalComponent는 ModalResult로 정의 된다.
  let ModalComponent = ModalResult;
  if (isModalType === 'ResultMessage') {
    ModalComponent = ModalResultMessage;
  }

  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : ${isError}`);
      setContent(`Error: ${isError}`);
    } else if (isData) {
      console.log(`Success Contact : ${isData}`);
      setContent(<Result data={isData} />);
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

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
      <div className="vmwr-title">내 근로 결과지</div>
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
