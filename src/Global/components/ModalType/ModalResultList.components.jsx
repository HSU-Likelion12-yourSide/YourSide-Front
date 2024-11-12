import React, { useState, useEffect } from 'react';
import '../../css/ModalType/Modal.resultlist.scss';
import useGlobalState from '../../Hooks/useGlobalState';
import modalStateController from '../../function/modalStateController';
import closeIcon from '../../image/modal-closeIcon.svg';
import useFetchAPI from '../../API/Hooks/useFetchAPI';

const ModalResultList = () => {
  const {
    isModalState,
    setModalState,
    setModalType,
    setWorkSheetId,
    isSelectedId,
    setSelectedId,
  } = useGlobalState();
  const [isContent, setContent] = useState('');
  const { isData, isLoading, isError, setUrl } = useFetchAPI();

  // API 요청을 위한 URL 설정
  useEffect(() => {
    setUrl('/mypage/list/worksheet/2'); // 임시로 2로 설정
  }, [setUrl]);

  useEffect(() => {
    if (isLoading) {
      setContent('Loading...');
    } else if (isError) {
      setContent(`Error: ${isError}`);
    } else if (isData) {
      setContent(isData);
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  return (
    <div className="modal-result-list">
      <div id="modal-header">
        <div id="modal-title">나의 결과지</div>
        <div id="modal-header-close">
          <div
            id="modal-get"
            onKeyDown={() => {
              console.log('test');
            }}
            role="button"
            tabIndex="0"
            onClick={() => {
              modalStateController(isModalState, setModalState);
              setSelectedId(isSelectedId);
            }}
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
              setSelectedId(null);
              modalStateController(isModalState, setModalState);
            }}
          >
            <img src={closeIcon} alt="x" id="modal-closeicon" />
          </div>
        </div>
      </div>
      <div id="modal-contents">
        {isLoading && <p>Loading...</p>}
        {!isLoading && isError && <p>Error: {isError.message}</p>}
        {!isLoading && isData && isData.data
          ? isData.data.slice(26, 31).map(item => (
              <div
                className={`modal-resultbox ${
                  isSelectedId === item.worksheet_id ? 'selected' : ''
                }`}
                onKeyDown={() => {
                  console.log('test');
                }}
                key={item.worksheet_id}
                role="button"
                tabIndex="0"
                onClick={() => {
                  setSelectedId(item.worksheet_id);
                }}
              >
                <div className="modal-resultname" id={item.worksheet_id}>
                  임시 제목
                </div>
                <div
                  className="modal-viewdetails"
                  onKeyDown={() => {
                    console.log('test');
                  }}
                  role="button"
                  tabIndex="0"
                  onClick={() => {
                    setWorkSheetId(item.worksheet_id);
                    setModalType('GetResult');
                  }}
                >
                  자세히 보기 &gt;
                </div>
              </div>
            ))
          : !isLoading && !isError && <p>No data available</p>}
      </div>
    </div>
  );
};

export default ModalResultList;
