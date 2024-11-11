import React from 'react';
import '../css/QnAPosting.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import Modal from '../../../Global/components/Modal.components';
import ModalResultList from '../../../Global/components/ModalType/ModalResultList.components';
import ModalGetResult from '../../../Global/components/ModalType/ModalGetResult.components';
import modalStateController from '../../../Global/function/modalStateController';
import useGlobalState from '../../../Global/Hooks/useGlobalState';
import plusIcon from '../image/plusIcon.svg';
import VmwrResult from '../../../Global/components/VmwrResult.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const Result = VmwrResult;

const QnAPosing = () => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI('/results', 'GET');

  const {
    isModalState,
    setModalState,
    isModalType,
    setModalType,
    isSelectedId,
  } = useGlobalState();

  let ModalComponent = ModalResultList;
  if (isModalType === 'GetResult') {
    ModalComponent = ModalGetResult;
  }

  console.log(isSelectedId);

  return (
    <div className="postingqna">
      <Header />
      {isModalState && (
        <Modal
          isOpen={isModalState}
          ModalType={ModalComponent}
          // ModalDefaultTypeState={isModalType}
        />
      )}
      <div className="postingqna-container">
        <div className="postingqna-title-container">
          <div id="postingqna-title">게시글 제목</div>
          <input
            className="postingqna-title-input"
            type="text"
            placeholder="질문 제목을 입력해주세요"
          />
        </div>
        <div className="postingqna-category-container">
          <div id="postingqna-title">게시판 선택</div>
          <div className="postingqna-category-option">
            <div className="postingqna-input-group">
              <input id="input-styled" type="checkbox" />
              <span>네편 답변</span>
              <input id="input-styled" type="checkbox" />
              <span>네편 정보</span>
            </div>
          </div>
        </div>
        <div className="postingqna-content-container">
          <div id="postingqna-title">게시글 내용</div>
          <textarea
            className="postingqna-content-textarea"
            type="text"
            placeholder="질문 내용을 입력해주세요"
          />
        </div>
        <div className="postingqna-myresult-container">
          <div id="postingqna-title">내 결과지 가져오기(선택)</div>
          {isSelectedId ? (
            <div className="postingqna-vmwr-result">
              <Result workSheetId={isSelectedId} />
            </div>
          ) : (
            <div
              className="postingqna-myresult-none"
              onKeyDown={() => {
                console.log('test');
              }}
              role="button"
              tabIndex="0"
              onClick={() => {
                setModalType('ResultList');
                modalStateController(isModalState, setModalState);
              }}
            >
              <img src={plusIcon} alt="+" id="postingqna-plusIcon" />
            </div>
          )}
        </div>
      </div>
      <div id="postingqna-group">
        <div className="postingqna-button">등록하기</div>
      </div>
      <Footer />
    </div>
  );
};

export default QnAPosing;
