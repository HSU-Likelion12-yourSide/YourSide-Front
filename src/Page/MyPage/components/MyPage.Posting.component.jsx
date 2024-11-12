import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Question from '../../QuestionAndAnswer/components/Question.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const MyPagePosting = ({ userId }) => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const [isContent, setContent] = useState();

  useEffect(() => {
    setUrl(`/mypage/list/posting/${userId}`);
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
    <div>
      {isData && isData.data ? (
        <Question />
      ) : (
        <div>작성한 질문이 없습니다.</div>
      )}
    </div>
  );
};

MyPagePosting.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default MyPagePosting;
