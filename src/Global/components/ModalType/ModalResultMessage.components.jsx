import React, { useEffect, useState } from 'react';
import '../../css/ModalType/Modal.resultMessage.scss';
import checkImage from '../../image/modal-check.svg';
import useGlobalState from '../../Hooks/useGlobalState';
import modalStateController from '../../function/modalStateController';
import useFetchAPI from '../../API/Hooks/useFetchAPI';

const ModalResult = () => {
  const { isModalState, setModalState, setModalType, isWorkSheetId } =
    useGlobalState();
  const { isData, isLoading, isError, setUrl } = useFetchAPI('', 'PUT');
  const [isContent, setContent] = useState();

  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : `, isError);
      setContent(`Error: `, isError);
    } else if (isData) {
      console.log(`Success Contact : `, isData);
      setContent(isData);
      setModalType('ShareMessage'); // 모달 타입 변경
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  const handleShare = () => {
    // 공유하기를 누르면 서버에 PUT 요청을 보냄
    console.log('WorksheetId: ', isWorkSheetId);
    setUrl(`worksheet/${isWorkSheetId}`);
  };

  return (
    <div className="modal-result">
      <img id="modal-check" src={checkImage} alt="img" />
      <div id="modal-message">저장 완료했습니다.</div>
      <div id="modal-title">좋은 정보를 함께 공유해보세요!</div>
      <div className="button-group">
        <div
          id="modal-share"
          onKeyDown={() => {
            console.log('test');
          }} // 키보드 지원
          role="button"
          tabIndex="0"
          onClick={handleShare}
        >
          공유하기
        </div>
        <div
          id="modal-cancel"
          onKeyDown={() => {
            console.log('test');
          }} // 키보드 지원
          role="button"
          tabIndex="0"
          onClick={() => {
            modalStateController(isModalState, setModalState);
          }}
        >
          닫기
        </div>
      </div>
    </div>
  );
};

export default ModalResult;
