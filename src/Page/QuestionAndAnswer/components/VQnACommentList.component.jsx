import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VQnAComment from './VQnAComment.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import '../css/VQnACommentList.scss';

// props로 외부 컴포넌트에 params 가져올 것
const VQnACommentList = ({ workSheetId }) => {
  const [isReloadState, setReloadState] = useState(false); // 리로드 트리거용 상태
  const [isComment, setComment] = useState();
  const [isContent, setContent] = useState('');

  // eslint-disable-next-line camelcase
  const posting_id = workSheetId;

  // 해당 user_id, posting_id 다시 설정 필요
  const requestCommentData = {
    // eslint-disable-next-line camelcase
    user_id: 2,
    // eslint-disable-next-line camelcase
    posting_id,
    content: isComment,
  };

  // GET API 수정 예정
  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    `/comment/list?user_id=${'2'}&posting_id=${workSheetId}`,
    'GET',
  );

  // Post Comment
  const {
    isData: isCommentData,
    isLoading: isCommentLoading,
    isError: isCommentError,
    setUrl: setCommentUrl,
  } = useFetchAPI('', 'POST', requestCommentData);

  const postComment = () => {
    if (isComment.trim()) {
      setCommentUrl('/comment'); // 답변이 있을 때만 URL을 설정하여 POST 요청 발생
    } else {
      // alert('댓글 내용을 입력해주세요.');
    }
  };

  // reload를 위한 함수
  const triggerReload = () => {
    console.log('isReloadState or workSheetId changed, setting URL');
    setReloadState(prev => !prev); // 상태를 토글하여 재조회 트리거
    setUrl(''); // URL을 비워서 상태 초기화
    setTimeout(() => {
      setUrl(`/comment/list?user_id=${'2'}&posting_id=${workSheetId}`);
      console.log('변경');
    }, 0); // 비동기적으로 URL 설정하여 재요청 유도
  };

  useEffect(() => {
    // triggerReload();
    if (isLoading || isCommentLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError || isCommentError) {
      console.log(`Error: `, isError || isCommentError);
      setContent(`Error: ${isError || isCommentError}`);
    } else if (isData && isData.data) {
      console.log(`Success GET Contact: `, isData);
      setContent(isData.data);
    } else if (isCommentData && isCommentData.data) {
      console.log(`Success POST Comment: `, isCommentData);
      setContent(isCommentData.data);
    }
  }, [
    isLoading,
    isCommentLoading,
    isError,
    isCommentError,
    isData,
    isCommentData,
    isReloadState,
  ]);

  useEffect(() => {
    // !!필 요청이 완료된 후 commentUrl 초기화
    if (isCommentData) {
      console.log(`Success POST Comment: `, isCommentData);
      setContent(isCommentData.data);
      setCommentUrl(null); // 초기화하여 재요청 방지
      setReloadState(prev => !prev); // GET 요청 새로 고침
      setComment(''); // 요청 후 입력란 비우기
    }
  }, [isCommentData]);

  return (
    <div className="qav-comment-group">
      <div className="qav-write-comment">
        <div className="qav-group">
          <div id="qav-comment-writer">코카콜라</div>
          <textarea
            cols="80"
            id="qav-comment-textfield"
            type="text"
            placeholder="답변을 남겨주세요"
            value={isComment}
            onChange={e => setComment(e.target.value)}
          />
          <div className="qav-button-group">
            <div
              id="qav-comment-button"
              onKeyDown={() => {}}
              onClick={() => {
                console.log('click');
                postComment();
              }}
              role="button"
              tabIndex="0"
              aria-label="comment-btn"
            >
              답변 달기
            </div>
          </div>
        </div>
      </div>
      <div className="qav-comment-array">
        <div className="qav-comment-array-group">
          <div id="qav-comment-array-method">좋아요순</div>
          <div id="qav-comment-array-method">최신순</div>
        </div>
        {/* props필요 */}
        {/* <VQnAComment workSheetId={workSheetId} /> */}
        {isData?.data?.comments?.length > 0 ? (
          isData.data.comments.map(comment => (
            <VQnAComment
              key={comment.id}
              comment_id={comment.id}
              nickName={comment.nickname}
              content={comment.content}
              createdAt={comment.created_at}
              isDisLiked={comment.is_disliked}
              isLiked={comment.is_liked}
              likeCount={comment.like_count}
              dislikeCount={comment.dislike_count}
              triggerReload={triggerReload}
            />
          ))
        ) : (
          <p>No comments available</p>
        )}
      </div>
    </div>
  );
};

VQnACommentList.propTypes = {
  workSheetId: PropTypes.number.isRequired,
};

export default VQnACommentList;
