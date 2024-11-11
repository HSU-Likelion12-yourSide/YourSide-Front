import React, { useEffect, useState } from 'react';
import '../css/ViewQuestionAndAnswer.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import CommentList from './VQnACommentList.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import VmwrResult from '../../../Global/components/VmwrResult.component';
import navigateController from '../../../Global/function/navigateController';

const ViewQuestionAndAnswer = () => {
  const navigate = useNavigate();
  // 북마크 비구조 할당 으로 선언 필요
  const [isBookMark, setBookMark] = useState();
  const [isReqBookMark, setReqBookMark] = useState();
  const [isContent, setContent] = useState(''); // 렌더링할 content 상태 관리 content
  // isContent를 잘 활용하면 번거로운 데이터 검증이 해소되지 않는지 고민

  // useFetchAPI
  // GET
  const { isData, isLoading, isError, setUrl } = useFetchAPI();

  // POST -> useEffect로 상태 표기 하지 않음
  const {
    isData: isBookMarkData,
    isLoading: isBookMarkLoading,
    isError: isBookMarkError,
    setUrl: setBookMarkUrl,
  } = useFetchAPI('', 'POST', isReqBookMark);

  // 객체로 들어가서 생기는 문제
  const { id } = useParams();
  // 동적 URI 검증 useEffect
  useEffect(() => {
    // id 값 거증
    if (id) {
      //   const numericId = parseInt(id, 10);
      if (!Number.isNaN(id) && id > 0) {
        // NaN인지 확인하고 유효한 id인지 확인
        setUrl(`/posting/${id}`);
      } else {
        console.error(`Invalid id: ${id}`);
        // 여기서 경고 표시 창
      }
    }
  }, [id, setUrl]); // [id, setUrl]

  // GET API 상태 표기
  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : `, isError);
      setContent(`Error: `, isError);
    } else if (isData && isData.data) {
      console.log(`Success Contact : `, isData);
      setContent(isData.data);
      setBookMark(isData.data.is_bookmarked);
      // setContent();
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  // bookmark controller
  const bookmarkStateController = () => {
    const bookmarkData = {
      /* eslint-disable camelcase */
      user_id: 2, // 임시 아이디
      post_id: id,
      is_bookmarked: isBookMark,
      /* eslint-enable camelcase */
    };
    setReqBookMark(bookmarkData);
    setBookMarkUrl('/posting/bookmarks');
    setBookMark(!isBookMark);
  };

  return (
    <div className="question-and-answer-view">
      <Header />
      <div className="qav-container">
        <div className="qav-post">
          <div className="qav-group">
            <div className="qav-title">
              <div id="qav-question-mark">Q.</div>
              <div id="qav-title-text">
                {isData && isData.data ? isData.data.title : '제목 없음'}
              </div>
            </div>
            <div className="qav-write-info">
              <div id="qav-writer">
                {isData && isData.data ? isData.data.nickname : '작성자 없음'}
              </div>
              <div id="qav-date">
                {isData && isData.data ? isData.data.created_at : '날짜 없음'}
              </div>
            </div>
            <div className="qav-content">
              {isData && isData.data ? isData.data.content : '내용 없음'}
            </div>

            <div className="qav-work-arrangement">
              {isData && isData.data && isData.data.worksheet_id ? (
                <VmwrResult workSheetId={isData.data.worksheet_id} />
              ) : null}
            </div>
          </div>
        </div>
        <div className="qav-middle">
          {/* BookMark Post */}
          <div className="qav-group">
            <div id="qav-blank" />
            <div
              id={isBookMark ? 'bookmark-selected' : 'bookmark-logo'}
              onKeyDown={() => {}}
              onClick={() => {
                bookmarkStateController();
              }}
              role="button"
              tabIndex="0"
              aria-label="Bookmark"
            />
            <div
              id="qav-middle-list"
              onKeyDown={() => {}}
              onClick={() => {
                navigateController(navigate, `/QuestionAndAnswer`);
              }}
              role="button"
              tabIndex="0"
            >
              목록
            </div>
          </div>
        </div>
        <CommentList workSheetId={id} />
      </div>
      <Footer />
    </div>
  );
};

export default ViewQuestionAndAnswer;
