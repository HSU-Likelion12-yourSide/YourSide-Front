import React, { useEffect, useState } from 'react';
import '../css/QnAPosting.scss';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [isContent, setContent] = useState();
  const [title, setTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [type, setType] = useState(null); // 게시판 타입 (0: 답변, 1: 정보)
  const [postData, setPostData] = useState(null);

  const {
    isModalState,
    setModalState,
    isModalType,
    setModalType,
    isSelectedId,
    setSelectedId,
  } = useGlobalState();

  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    '',
    'POST',
    postData,
  );

  let ModalComponent = ModalResultList;
  if (isModalType === 'GetResult') {
    ModalComponent = ModalGetResult;
  }

  const handlePostSubmit = () => {
    if (!title.trim()) {
      // eslint-disable-next-line no-alert
      alert('제목을 입력해주세요.');
      return;
    }

    if (!postContent.trim()) {
      // eslint-disable-next-line no-alert
      alert('내용을 입력해주세요.');
      return;
    }

    if (type === null) {
      // eslint-disable-next-line no-alert
      alert('게시판 타입을 선택해주세요.');
      return;
    }

    const updatedPostData = {
      /* eslint-disable camelcase */
      user_id: 2, // 임시로 2번
      worksheet_id: isSelectedId || null,
      /* eslint-enable camelcase */
      title,
      content: postContent,
      type,
    };

    setPostData(updatedPostData); // requestData 변경
    setSelectedId(null);
    setUrl('/posting'); // POST URL 설정
  };

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
      navigate('/QuestionAndAnswer');
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData, navigate]);

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
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="질문 제목을 입력해주세요"
          />
        </div>
        <div className="postingqna-category-container">
          <div id="postingqna-title">게시판 선택</div>
          <div className="postingqna-category-option">
            <div className="postingqna-input-group">
              <input
                id="input-styled"
                type="checkbox"
                checked={type === 0}
                onChange={() => setType(0)}
              />
              <span>네편 답변</span>
              <input
                id="input-styled"
                type="checkbox"
                checked={type === 1}
                onChange={() => setType(1)}
              />
              <span>네편 정보</span>
            </div>
          </div>
        </div>
        <div className="postingqna-content-container">
          <div id="postingqna-title">게시글 내용</div>
          <textarea
            className="postingqna-content-textarea"
            value={postContent}
            type="text"
            onChange={e => setPostContent(e.target.value)}
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
        <div
          className="postingqna-button"
          onClick={handlePostSubmit}
          tabIndex="0"
          role="button"
          onKeyDown={() => {
            console.log('test');
          }}
        >
          등록하기
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QnAPosing;
