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
  const [isType, setType] = useState(0);
  const { isData, isLoading, isError, setUrl } = useFetchAPI();

  useEffect(() => {
    if (isType !== null && isType !== undefined) {
      console.log(`Page-Type is ${isType}`);
      setUrl(`posting/list/${isType}`);
      // setUrl(`posting/list/popular/${isType}`);
    } else if (!isType) {
      console.error(`!Error: lost Page-Type. Check Page-Type`);
    }
  }, [isType]);

  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : ${isError}`);
      setContent(`Error: ${isError}`);
    } else if (isData) {
      console.log(`Success, Page-Type${isType} Contact: `, isData.data);
      setContent(isData);
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  return (
    <div className="question-and-answer">
      <Header />
      <div className="qa-group">
        <div
          id="qa-box-selected"
          className="selected"
          onKeyDown={() => {}}
          onClick={() => {
            /* eslint-disable-next-line no-alert */
            alert('SPA로 type 0입니다.');
            if (isType !== 0) {
              setType(0);
              // setUrl로 다시 Fetch
              // console.log(`Page-Type is ${isType}`);
            }
          }}
          role="button"
          tabIndex="0"
        >
          네편 답변
        </div>
        <div
          id="qa-box"
          onKeyDown={() => {}}
          onClick={() => {
            /* eslint-disable-next-line no-alert */
            alert('SPA로 type 1입니다.');
            if (isType !== 1) {
              setType(1);
              // setUrl로 다시 Fetch
              // console.log(`Page-Type is ${isType}`);
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
          <RankQuestion />
          <RankQuestion />
          <RankQuestion />
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
          {isError && <p>Error: {isError.message}</p>}
          {isData && isData.data && isData.data.length > 0
            ? isData.data.map(item => (
                <Question
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  created_at={item.date}
                  // bookmark_count={item.bookmark_count}
                />
              ))
            : !isLoading && !isError && <p>No data available</p>}
          {/* <Question />
          <Question />
          <Question /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuestionAndAnswer;
