import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/VQnAComment.scss';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const VQnAComment = ({
  userId,
  // eslint-disable-next-line camelcase
  comment_id,
  nickName,
  content,
  createdAt,
  isDisLiked,
  isLiked,
  likeCount,
  dislikeCount,
  triggerReload,
}) => {
  // 나의 버튼 상태 값
  const [isLike, setLiked] = useState(isLiked);
  const [isBad, setBad] = useState(isDisLiked);
  const [isLikedCount, setLikedCount] = useState(likeCount);
  const [isBadCount, setBadCount] = useState(dislikeCount);
  const [isContent, setContent] = useState(''); // 렌더링할 content 상태 관리 content
  // lint 문법을 피하기 위한 log
  // eslint-disable-next-line camelcase
  if (comment_id === null) {
    console.log(userId);
    console.log(isDisLiked);
  }

  const requestLike = {
    // eslint-disable-next-line camelcase
    user_id: 2,
    // eslint-disable-next-line camelcase
    comment_id,
    // eslint-disable-next-line camelcase
    is_liked: isLike,
  };

  const requestBad = {
    // eslint-disable-next-line camelcase
    user_id: 2,
    // eslint-disable-next-line camelcase
    comment_id,
    // eslint-disable-next-line camelcase
    is_disliked: isBad,
  };

  // 좋아요 FetchAPI 훅
  const {
    isData: isLikeData,
    isLoading: isLikeLoading,
    isError: isLikeError,
    setUrl: setLikeUrl,
  } = useFetchAPI('', 'POST', requestLike);

  // 싫어요 FetchAPI 훅
  const {
    isData: isBadData,
    isLoading: isBadLoading,
    isError: isBadError,
    setUrl: setBadUrl,
  } = useFetchAPI('', 'POST', requestBad);

  const likeButtonController = () => {
    setLiked(prev => !prev); // 상태 반전
    // setLiked(isLike);
    setLikeUrl('/comment/likes');
    triggerReload();
    console.log(`현재 좋아요는 ${isLike}`);
  };

  const badButtonController = () => {
    setBad(prev => !prev); // 상태 반전
    // setBad(isBad);
    // setBadCount(isBadCount + 1);
    setBadUrl('/comment/dislikes');
    triggerReload();
    console.log(`현재 싫어요는 ${isBad}`);
  };

  // useEffect(() => {
  //   // isLike 상태 변경 시 트리거
  //   if (isLike) {
  //     triggerReload();
  //   }
  // }, [isLike]);

  // useEffect(() => {
  //   // isBad 상태 변경 시 트리거
  //   if (isBad) {
  //     triggerReload();
  //   }
  // }, [isBad]);

  useEffect(() => {
    triggerReload();
    if (isLikeLoading || isBadLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isLikeError || isBadError) {
      console.log(`Error: `, isLikeError || isBadError);
      setContent(`Error: ${isLikeError || isBadError}`);
    } else if (isLikeData && isLikeData.data) {
      console.log(`Success Like Contact: `, isLikeData);
      setContent(isLikeData.data);
    } else if (isBadData && isBadData.data) {
      console.log(`Success Bad Contact: `, isBadData);
      setContent(isBadData.data);
    }
  }, [
    isLikeLoading,
    isBadLoading,
    isLikeError,
    isBadError,
    isLikeData,
    isBadData,
  ]);

  return (
    <div className="qav-comment">
      <div className="qav-group">
        <div className="qav-comment-writer">
          <span id="qav-writer">
            {nickName === 'null' ? nickName : 'TestName'}
          </span>
          {/* 등급 부분 미제작 */}
          {/* <div id="user-rank">네편 노무사</div> */}
        </div>
        <div className="qav-users-group">
          <div id="qav-users-comment">{content}</div>
          <div className="qav-users-button">
            <div id="qav-button-like-group">
              <div
                id={isLiked ? 'qav-clicked-like' : 'qav-like-button'}
                onKeyDown={() => {}}
                onClick={() => {
                  likeButtonController();
                }}
                role="button"
                tabIndex="0"
                aria-label="like-btn"
              />
              <div className="qav-comment-like">
                {/* <div id="qav-comment-like-count">{likeCount}</div> */}
                <div id="qav-comment-like-count">{likeCount}</div>
              </div>
            </div>
            <div id="qav-button-bad-group">
              <div
                // API 점검 필요로 API에 따른 boolean 값으로 확인하지 않고 로컬 boolean 값으로 지정
                // id={isDisLiked ? 'qav-clicked-bad' : 'qav-bad-button'}
                id={isDisLiked ? 'qav-clicked-bad' : 'qav-bad-button'}
                onKeyDown={() => {}}
                onClick={() => {
                  badButtonController();
                }}
                role="button"
                tabIndex="0"
                aria-label="bad-btn"
              />
              <div className="qav-comment-bad">
                {/* <div id="qav-comment-bad-count">{dislikeCount}</div> */}
                <div id="qav-comment-bad-count">{dislikeCount}</div>
              </div>
            </div>
          </div>
        </div>
        <div id="qav-comment-date">{createdAt}</div>
      </div>
    </div>
  );
};

VQnAComment.propTypes = {
  userId: PropTypes.number.isRequired,
  // eslint-disable-next-line camelcase
  comment_id: PropTypes.number.isRequired,
  nickName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isDisLiked: PropTypes.bool.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  dislikeCount: PropTypes.number.isRequired,
  triggerReload: PropTypes.func.isRequired,
};

export default VQnAComment;
