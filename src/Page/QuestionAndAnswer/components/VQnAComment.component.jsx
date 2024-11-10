import React, { useEffect, useState } from 'react';
// import likeButton from '../image/like-btn.svg';
// import badButton from '../image/bad-btn.svg';
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
}) => {
  const [isLike, setLiked] = useState(false);
  const [isBad, setBad] = useState(false);
  const [isLikedCount, setLikedCount] = useState(likeCount);
  const [isBadCount, setBadCount] = useState(dislikeCount);
  const [isContent, setContent] = useState(''); // 렌더링할 content 상태 관리 content
  console.log(userId);
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

  const {
    isData: isLikeData,
    isLoading: isLikeLoading,
    isError: isLikeError,
    setUrl: setLikeUrl,
  } = useFetchAPI('', 'POST', requestLike);

  const {
    isData: isBadData,
    isLoading: isBadLoading,
    isError: isBadError,
    setUrl: setBadUrl,
  } = useFetchAPI('', 'POST', requestBad);

  const likeButtonController = () => {
    setLiked(!isLike);
    setLikedCount(isLikedCount + 1);
    setLikeUrl('/comment/likes');
  };

  const badButtonController = () => {
    setBad(!isBad);
    setBadCount(isBadCount + 1);
    setBadUrl('/comment/dislikes');
  };

  // GET API 상태 표기
  useEffect(() => {
    if (isLikeLoading || isBadLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isLikeError || isBadError) {
      console.log(`Error: `, isLikeError || isBadError);
      setContent(`Error: ${isLikeError || isBadError}`);
    } else {
      if (isLikeData && isLikeData.data) {
        console.log(`Success Like Contact: `, isLikeData);
        setContent(isLikeData.data);
      }
      if (isBadData && isBadData.data) {
        console.log(`Success Bad Contact: `, isBadData);
        setContent(isBadData.data);
      }
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
                <div id="qav-comment-like-count">{likeCount}</div>
              </div>
            </div>
            <div id="qav-button-bad-group">
              <div
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
};

export default VQnAComment;
