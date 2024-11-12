import React, { useEffect, useState } from 'react';
import '../css/MyPage.ViewResult.scss';
// import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import learnMoreArrow from '../image/learnMoreArrow.svg';
import Modal from '../../../Global/components/Modal.components';
import ModalShareMessage from '../../../Global/components/ModalType/ModalShareMessage.components';
import modalStateController from '../../../Global/function/modalStateController';
import VmwrResult from '../../../Global/components/VmwrResult.component';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import useGlobalState from '../../../Global/Hooks/useGlobalState';

const MyPageViewResult = () => {
  const { workSheetId } = useParams();
  const { isUser } = useGlobalState();
  const basePath = isUser ? `/${isUser}` : '';
  const navigate = useNavigate();
  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    `/worksheet/${workSheetId}`,
    'GET',
  );
  const { isModalState, setModalState, setSelectedId } = useGlobalState();
  const [content, setContent] = useState(''); // 렌더링할 content 상태 관리

  const {
    isData: isPutData,
    isLoading: isPutLoading,
    isError: isPutError,
    setUrl: setPutUrl,
  } = useFetchAPI('', 'PUT');

  useEffect(() => {
    // GET 요청 확인
    if (isLoading) {
      console.log('..GET is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`GET Error : ${isError}`);
      setContent(`Error: ${isError}`);
    } else if (isData) {
      console.log(`GET Success : ${isData.data}`);
      setSelectedId(workSheetId);
      setContent(<VmwrResult workSheetId={workSheetId} />);
    }

    // PUT 요청 확인
    if (isPutLoading) {
      console.log('..PUT is Loading');
    } else if (isPutError) {
      console.log(`PUT Error : ${isPutError}`);
    } else if (isPutData) {
      console.log(`PUT Success : ${isPutData.message}`);
    }
  }, [isLoading, isError, isData, isPutLoading, isPutError, isPutData]);

  return (
    <div className="MyPage-ViewResult">
      <Header />
      {isModalState && (
        <Modal isOpen={isModalState} ModalType={ModalShareMessage} />
      )}
      <div className="MyPage-ViewResult-container">
        <div className="MyPage-ViewResult-title">
          <span id="MyPage-ViewResult-title">내 근로 결과지</span>
          <div
            id="MyPage-ViewResult-button"
            onKeyDown={() => {}}
            onClick={() => {
              navigate(`${basePath}/QnAPosting`);
            }}
            role="button"
            tabIndex="0"
          >
            <span>게시글 작성</span>
            <img src={learnMoreArrow} alt="" />
          </div>
        </div>
        <div className="MyPage-ViewResult-content">
          <div className="qav-group">
            <div className="qav-work-arrangement">{content}</div>
          </div>
        </div>
        <div className="MyPage-ViewResult-button-content">
          <div className="MyPage-ViewResult-button-group">
            <div
              id="MyPage-ViewResult-share"
              onKeyDown={() => {}}
              onClick={() => {
                setPutUrl(`/worksheet/${workSheetId}`);
                modalStateController(isModalState, setModalState);
              }}
              role="button"
              tabIndex="0"
            >
              공유하기
            </div>
            <div
              id="MyPage-ViewResult-list"
              onKeyDown={() => {}}
              onClick={() => {
                navigate(`${basePath}/MyPage`);
              }}
              role="button"
              tabIndex="0"
            >
              내 결과지 목록
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
// MyPageViewResult.propTypes = {
//   workSheetId: PropTypes.number.isRequired,
// };
export default MyPageViewResult;
