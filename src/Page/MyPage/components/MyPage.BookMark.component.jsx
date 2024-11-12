import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/MyPage.BookMark.scss';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import Question from '../../QuestionAndAnswer/components/Question.component';

const MyPageBookMark = ({ userId }) => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const [isContent, setContent] = useState();

  useEffect(() => {
    setUrl(`/mypage/list/bookmarks/${userId}`);
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
    <div className="MyPage-bookmark-container">
      {isLoading && <p>Loading...</p>}
      {!isLoading && isError && <span>저장한 북마크가 없습니다.</span>}
      {!isLoading && isData && isData.data
        ? isData.data.map(item => (
            <Question
              key={item.id}
              id={item.posting_id}
              title={item.title}
              content={item.content}
              date={item.created_at}
              // bookmark_count={item.bookmark_count}
            />
          ))
        : !isLoading && !isError && <p>No data available</p>}
    </div>
  );
};

MyPageBookMark.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default MyPageBookMark;
