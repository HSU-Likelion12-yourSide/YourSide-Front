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
  const [isType, setType] = useState(1);
  const { isData, isLoading, isError, setUrl } = useFetchAPI();

  useEffect(() => {
    if (isType) {
      console.log(`Page-Type is ${isType}`);
      // if (isType === 1) {
      //   setUrl(`api/posting/list/${isType}`);
      // } else if (isType === 2) {
      //   setUrl(`api/posting/list/${isType}`);
      // }
      setUrl(`posting/list/${isType}`);
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
      console.log(`Success, Page-Type${isType} Contact: `, isData);
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
          네편 답변
        </div>
        <div
          id="qa-box"
          onKeyDown={() => {}}
          onClick={() => {
            /* eslint-disable-next-line no-alert */
            alert('SPA로 type 2입니다.');
            if (isType !== 2) {
              setType(2);
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
          <Question />
          <Question />
          <Question />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuestionAndAnswer;
