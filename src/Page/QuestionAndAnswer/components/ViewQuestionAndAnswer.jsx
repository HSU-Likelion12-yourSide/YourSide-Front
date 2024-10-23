import React, { useEffect, useState } from 'react';
import '../css/ViewQuestionAndAnswer.scss';
import { useParams } from 'react-router-dom';
import likeButton from '../image/like-btn.svg';
import badButton from '../image/bad-btn.svg';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import VmwrResult from '../../../Global/components/VmwrResult.component';

const ViewQuestionAndAnswer = () => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  // 북마크 비구조 할당 으로 선언 필요
  const [isContent, setContent] = useState(''); // 렌더링할 content 상태 관리 content
  // isContent를 잘 활용하면 번거로운 데이터 검증이 해소되지 않는지 고민
  // 객체로 들어가서 생기는 문제
  const { id } = useParams();
  // GlobalState 확인
  useEffect(() => {
    console.log(id);
    setUrl(`/posting/${id}`);
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
      // setContent();
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

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
                <VmwrResult resultId={isData.data.worksheet_id} />
              ) : null}
            </div>
          </div>
        </div>
        <div className="qav-middle">
          {/* 북마크 post 관련 API 연결 필요 */}
          <div className="qav-group">
            <div id="qav-blank" />
            <div id="bookmark-logo" />
            <div id="qav-middle-list">목록</div>
          </div>
        </div>
        <div className="qav-write-comment">
          <div className="qav-group">
            <div id="qav-comment-writer">코카콜라</div>
            <textarea
              cols="80"
              id="qav-comment-textfield"
              type="text"
              placeholder="답변을 남겨주세요"
            />
            <div className="qav-button-group">
              <div id="qav-comment-button">답변 달기</div>
            </div>
          </div>
        </div>
        <div className="qav-comment-array">
          <div className="qav-comment-array-group">
            <div id="qav-comment-array-method">좋아요순</div>
            <div id="qav-comment-array-method">최신순</div>
          </div>
          <div className="qav-comment">
            <div className="qav-group">
              <div className="qav-comment-writer">
                <span id="qav-writer">사장나와</span>
                {/* 등급 부분 */}
                <div id="user-rank">네편 노무사</div>
              </div>
              <div className="qav-users-group">
                <div id="qav-users-comment">
                  기간제 근로자의 경우, 약정한 근로계약 기간이 만료됨에 따라
                  근로관계가 자동으로 종료되는 것이 원칙입니다. 즉, 기간만료에
                  따라 근로관계가 종료되는 것은 해고가 아니므로, 사용자가 기간제
                  근로자에게 계약기간 만료 여부를 미리 통지할 의무는 해당
                  사업장의 해당 사업장의 취업규칙이나 근로계약서에 계약기간 만료
                  전에 별도의 의사를 표시하지 않으면 자동으로 근로계약이
                  연장된다와 같은 근로계약 자동연장에 관한 조항이 있거나,
                  계약기간 만료 oo일 전에 계약연장 여부를 통지한다와 같은 규정이
                  명시되어 있다면, 해당 내용을 준수하여 사전에 계약만료 또는
                  계약연장에 관한 통지를 하여야 합니다.
                </div>
                <div className="qav-users-button">
                  <div id="qav-button-like-group">
                    <img src={likeButton} alt="좋아요" />
                    <div className="qav-comment-like">
                      <div id="qav-comment-like-count">999</div>
                    </div>
                  </div>
                  <div id="qav-button-bad-group">
                    <img src={badButton} alt="나빠요" />{' '}
                    <div className="qav-comment-bad">
                      <div id="qav-comment-bad-count">999</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="qav-comment-date">2024.04.11</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewQuestionAndAnswer;
