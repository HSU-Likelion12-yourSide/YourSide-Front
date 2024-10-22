import React, { useState, useEffect } from 'react';
import '../css/QuestionAndAnswer.scss';
import { useNavigate } from 'react-router-dom';
import navigateController from '../../../Global/function/navigateController';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import RankQuestion from './RankQuestion.component';
import Question from './Question.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const QuestionAndAnswer = () => {
  const navigate = useNavigate();
  const [isContent, setContent] = useState('');
  const [isPopularContent, setPopularContent] = useState('');
  const [isType, setType] = useState(0);
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const {
    isData: isPopularData,
    isLoading: isPopularLoading,
    isError: isPopularError,
    setUrl: setPopularUrl,
  } = useFetchAPI();

  // Page-state 상태 초기 값
  useEffect(() => {
    if (isType !== null && isType !== undefined) {
      console.log(`Page-Type is ${isType}`);
      setUrl(`posting/list/${isType}`);
      setPopularUrl(`posting/list/popular/${isType}`);
    } else if (!isType) {
      console.error(`!Error: lost Page-Type. Check Page-Type`);
    }
  }, [isType]);

  // fetch 상태 초기 값
  useEffect(() => {
    if (isLoading || isPopularLoading) {
      console.log('..is Loading');
      if (isLoading) {
        setContent('Loading...');
      }
      if (isPopularLoading) {
        setPopularContent('Loading...');
      }
    } else if (isError || isPopularError) {
      console.log(`is Error : ${isError}`);
      if (isLoading) {
        setContent(`Error: ${isError}`);
      }
      if (isPopularLoading) {
        setPopularContent(`Error: ${isPopularError}`);
      }
    } else if (isData || isPopularData) {
      if (isData) {
        setContent(isData);
        console.log(`Success, Page-Type${isType} Contact: `, isData.data);
      }
      if (isPopularData) {
        setPopularContent(isPopularData);
        console.log(
          `Success, Page-Type${isType} Contact: `,
          isPopularData.data,
        );
      }
    } else {
      setContent(null);
    }
  }, [
    isLoading,
    isError,
    isData,
    isPopularData,
    isPopularLoading,
    isPopularError,
  ]);

  return (
    <div className="question-and-answer">
      <Header />
      <div className="qa-group">
        <div
          id={isType === 0 ? 'qa-box-selected' : 'qa-box'}
          onKeyDown={() => {}}
          onClick={() => {
            if (isType !== 0) {
              setType(0);
            }
          }}
          role="button"
          tabIndex="0"
        >
          네편 답변
        </div>
        <div
          id={isType === 1 ? 'qa-box-selected' : 'qa-box'}
          onKeyDown={() => {}}
          onClick={() => {
            if (isType !== 1) {
              setType(1);
            }
          }}
          role="button"
          tabIndex="0"
        >
          네편 정보
        </div>
      </div>
      <div className="qa-popular-container">
        <div id="qa-popular-intro">인기게시글</div>
        <div className="qa-popular-group">
          {isPopularLoading && <p>Loading...</p>}
          {!isLoading && isPopularError && <p>Error: {isError.message}</p>}
          {!isLoading && isPopularData && isPopularData.data
            ? isPopularData.data.map((item, index) => (
                <RankQuestion
                  key={index}
                  title={item.title}
                  content={item.content}
                  // bookmark_count={item.bookmark_count}
                />
              ))
            : !isLoading && !isError && <p>No data available</p>}
        </div>
      </div>
      <div className="qa-post-container">
        <div className="qa-post-intro">
          <div id="qa-post-word">게시글</div>
          <div
            id="qa-write"
            onKeyDown={() => {}}
            onClick={() => {
              /* eslint-disable-next-line no-alert */
              alert('게시글 작성 페이지는 준비 중입니다.');
              navigateController(navigate, '/QnAPosing');
            }}
            role="button"
            tabIndex="0"
          >
            게시글 작성
          </div>
        </div>
        <div className="qa-post-group">
          {/* 일반적으로 컴포넌트를 불러오면 안된다. 각 useFetchAPI의 상태에 따른 컴포넌트가 있어야 한다. */}
          {isLoading && <p>Loading...</p>}
          {!isLoading && isError && <p>Error: {isError.message}</p>}
          {!isLoading && isData && isData.data
            ? isData.data.map(item => (
                <Question
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  date={item.created_at}
                  // bookmark_count={item.bookmark_count}
                />
              ))
            : !isLoading && !isError && <p>No data available</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuestionAndAnswer;
