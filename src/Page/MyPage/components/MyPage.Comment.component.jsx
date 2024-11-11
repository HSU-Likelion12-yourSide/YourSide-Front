import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/MyPage.Comment.scss';
import Comment from './MyPage.CommentElement';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const MyPageComment = ({ userId }) => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const [isContent, setContent] = useState();

  useEffect(() => {
    setUrl(`/mypage/list/comment/${userId}`);
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : `, isError);
      setContent(`Error: `, isError);
    } else if (isData && isData.data) {
      console.log(`Success Contact : `, isData);
      setContent(isData.data);
      // if (isData.status === 200 || isData.status === 201) {
      // }
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);
  return (
    <div className="MyPage-comment-container">
      {isLoading && <p>Loading...</p>}
      {!isLoading && isError && <span>저장한 북마크가 없습니다.</span>}
      {!isLoading && isData && isData.data
        ? isData.data.map(item => (
            <Comment
              key={item.id}
              question={item.posting_title}
              date={item.created_at}
              answer={item.content}
            />
          ))
        : !isLoading && !isError && <p>No data available</p>}
    </div>
  );
};

MyPageComment.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default MyPageComment;
