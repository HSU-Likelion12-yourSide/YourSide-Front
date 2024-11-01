import React, { useEffect, useState } from 'react';
// import likeButton from '../image/like-btn.svg';
// import badButton from '../image/bad-btn.svg';
import '../css/VQnAComment.scss';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const VQnAComment = () => {
  const [isLiked, setLiked] = useState(false);
  const [isBad, setBad] = useState(false);
  const [isLikedCount, setLikedCount] = useState(0);
  const [isBadCount, setBadCount] = useState(0);
  const [isContent, setContent] = useState(''); // 렌더링할 content 상태 관리 content

  const requestLike = {
    // eslint-disable-next-line camelcase
    user_id: 2,
    // eslint-disable-next-line camelcase
    comment_id: 1,
    // eslint-disable-next-line camelcase
    is_liked: isLiked,
  };

  const requestBad = {
    // eslint-disable-next-line camelcase
    user_id: 2,
    // eslint-disable-next-line camelcase
    comment_id: 1,
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
    setLiked(!isLiked);
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
          <span id="qav-writer">사장나와</span>
          {/* 등급 부분 */}
          <div id="user-rank">네편 노무사</div>
        </div>
        <div className="qav-users-group">
          <div id="qav-users-comment">
            기간제 근로자의 경우, 약정한 근로계약 기간이 만료됨에 따라
            근로관계가 자동으로 종료되는 것이 원칙입니다. 즉, 기간만료에 따라
            근로관계가 종료되는 것은 해고가 아니므로, 사용자가 기간제 근로자에게
            계약기간 만료 여부를 미리 통지할 의무는 해당 사업장의 해당 사업장의
            취업규칙이나 근로계약서에 계약기간 만료 전에 별도의 의사를 표시하지
            않으면 자동으로 근로계약이 연장된다와 같은 근로계약 자동연장에 관한
            조항이 있거나, 계약기간 만료 oo일 전에 계약연장 여부를 통지한다와
            같은 규정이 명시되어 있다면, 해당 내용을 준수하여 사전에 계약만료
            또는 계약연장에 관한 통지를 하여야 합니다.
          </div>
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
                <div id="qav-comment-like-count">{isLikedCount}</div>
              </div>
            </div>
            <div id="qav-button-bad-group">
              <div
                id={isBad ? 'qav-clicked-bad' : 'qav-bad-button'}
                onKeyDown={() => {}}
                onClick={() => {
                  badButtonController();
                }}
                role="button"
                tabIndex="0"
                aria-label="bad-btn"
              />
              <div className="qav-comment-bad">
                <div id="qav-comment-bad-count">{isBadCount}</div>
              </div>
            </div>
          </div>
        </div>
        <div id="qav-comment-date">2024.04.11</div>
      </div>
    </div>
  );
};

export default VQnAComment;
