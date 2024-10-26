import React, { useEffect, useState } from 'react';
import '../../css/ModalType/Modal.resultget.scss';
import useGlobalState from '../../Hooks/useGlobalState';
// import modalStateController from '../../function/modalStateController';
import VmwrResult from '../VmwrResult.component';
import useFetchAPI from '../../API/Hooks/useFetchAPI';

const Result = VmwrResult;

const ModalGetResult = () => {
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
        <div
          className="modal-back"
          onKeyDown={() => {
            console.log('test');
          }}
          role="button"
          tabIndex="0"
          onClick={() => {
            setModalType('ResultList');
          }}
        >
          &lt; 이전으로
        </div>
      </div>
      <div className="modal-result">{content}</div>
    </div>
  );
};

export default ModalGetResult;
