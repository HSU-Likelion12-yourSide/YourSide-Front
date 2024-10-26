import React, { useEffect, useState } from 'react';
import '../../css/ModalType/Modal.resultlist.scss';
import useGlobalState from '../../Hooks/useGlobalState';
import modalStateController from '../../function/modalStateController';
import closeIcon from '../../image/modal-closeIcon.svg';
import VmwrResult from '../VmwrResult.component';
import useFetchAPI from '../../API/Hooks/useFetchAPI';

const Result = VmwrResult;

const ModalResult = () => {
  const { isModalState, setModalState } = useGlobalState();
  const { setModalType } = useGlobalState();
  const { isData, isLoading, isError, setUrl } = useFetchAPI('/results', 'GET');
  const [content, setContent] = useState(''); // 렌더링할 content 상태 관리

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
    <div className="modal-default">
      <div id="modal-header">
        <div id="modal-title">나의 결과지</div>
        <div
          id="modal-get"
          onKeyDown={() => {
            console.log('test');
          }}
          role="button"
          tabIndex="0"
        >
          가져오기
        </div>
        <div
          id="modal-close"
          onKeyDown={() => {
            console.log('test');
          }} // 키보드 지원
          role="button"
          tabIndex="0"
          onClick={() => {
            modalStateController(isModalState, setModalState);
          }}
        >
          <img src={closeIcon} alt="x" id="modal-closeicon" />
        </div>
      </div>
      <div id="modal-contents">{content}</div>
    </div>
  );
};

export default ModalResult;
