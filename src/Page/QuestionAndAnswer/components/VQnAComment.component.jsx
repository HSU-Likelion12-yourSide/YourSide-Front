import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/VQnAComment.scss';
// import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

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
  // triggerReload,
}) => {
  // 나의 버튼 상태 값
  const [isLike, setLiked] = useState(isLiked);
  const [isBad, setBad] = useState(isDisLiked);
  const [isCurrentLiked, setCurrentLiked] = useState(false);
  const [isCurrentBad, setCurrentBad] = useState(false);
  const [isLikedCount, setLikedCount] = useState(likeCount);
  const [isBadCount, setBadCount] = useState(dislikeCount);
  const [isContent, setContent] = useState(''); // 렌더링할 content 상태 관리 content
  // lint 문법을 피하기 위한 log
  // eslint-disable-next-line camelcase
  if (comment_id === null) {
    console.log(userId);
    console.log(isDisLiked);
  }

  /**
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
 */
  const likeButtonController = () => {
    if (isCurrentLiked) {
      // eslint-disable-next-line no-alert
      alert('방금 클릭하셨습니다.');
      window.location.reload(); // alert 확인 후 페이지 새로고침
      return null;
    }
    setCurrentLiked(true);
    setCurrentBad(false);

    // 좋아요 카운트 증가
    setLikedCount(prev => prev + 1);

    // 싫어요가 활성화된 상태였다면 싫어요 카운트 감소
    if (isCurrentBad) {
      setBadCount(prev => prev - 1);
    }

    return null;
  };

  const badButtonController = () => {
    if (isCurrentBad) {
      // eslint-disable-next-line no-alert
      alert('방금 클릭하셨습니다.');
      window.location.reload(); // alert 확인 후 페이지 새로고침
      return null;
    }
    setCurrentLiked(false);
    setCurrentBad(true);

    // 싫어요 카운트 증가
    setBadCount(prev => prev + 1);

    // 좋아요가 활성화된 상태였다면 좋아요 카운트 감소
    if (isCurrentLiked) {
      setLikedCount(prev => prev - 1);
    }

    return null;
  };

  useEffect(() => {
    console.log(`like ${isCurrentLiked}`);
    console.log(`bad ${isCurrentBad}`);
  }, [
    setCurrentLiked,
    setCurrentBad,
    likeButtonController,
    badButtonController,
  ]);

  /**
  // API useEffect
  useEffect(() => {
    console.log(`API Like: ${isLiked} Bad: ${isDisLiked}`);
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
 */
  return (
    <div className="qav-comment">
      <div className="qav-group">
        <div className="qav-comment-writer">
          <span id="qav-writer">
            {nickName === 'null' ? nickName : '코카콜라'}
          </span>
          {/* 등급 부분 미제작 */}
          {/* <div id="user-rank">네편 노무사</div> */}
        </div>
        <div className="qav-users-group">
          <div id="qav-users-comment">{content}</div>
          <div className="qav-users-button">
            <div id="qav-button-like-group">
              <div
                id={
                  isCurrentLiked || isLiked
                    ? 'qav-clicked-like'
                    : 'qav-like-button'
                }
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
                <div id="qav-comment-like-count">{isLikedCount}</div>
              </div>
            </div>
            <div id="qav-button-bad-group">
              <div
                // API 점검 필요로 API에 따른 boolean 값으로 확인하지 않고 로컬 boolean 값으로 지정
                // id={isDisLiked ? 'qav-clicked-bad' : 'qav-bad-button'}
                id={
                  isCurrentBad || isDisLiked
                    ? 'qav-clicked-bad'
                    : 'qav-bad-button'
                }
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
                <div id="qav-comment-bad-count">{isBadCount}</div>
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
  // triggerReload: PropTypes.func.isRequired,
};

export default VQnAComment;
