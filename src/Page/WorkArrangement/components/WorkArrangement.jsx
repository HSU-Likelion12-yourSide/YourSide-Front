import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import quizImage from '../image/quiz-short-cut.svg';
import '../css/WorkArrangement.scss';
import navigateController from '../../../Global/function/navigateController';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import WorkArrangementResult from './WorkArrangementResult.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import useGlobalState from '../../../Global/Hooks/useGlobalState';
import Modal from '../../../Global/components/Modal.components';
import modalStateController from '../../../Global/function/modalStateController';
import ModalLogin from '../../../Global/components/ModalType/ModalLogin.components';

const WorkArrangement = () => {
  // useNavigate 사용하기 위한 변수 정의
  const navigate = useNavigate();
  const [isContent, setContent] = useState('');
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const { isUser } = useGlobalState();
  const basePath = isUser ? `/${isUser}` : '';
  console.log(isUser);
  const { isModalState, setModalState } = useGlobalState();

  // API 요청을 위한 URL 설정
  useEffect(() => {
    setUrl('/worksheet/list');
  }, [setUrl]);

  useEffect(() => {
    if (isLoading) {
      setContent('Loading...');
    } else if (isError) {
      setContent(`Error: ${isError}`);
    } else if (isData) {
      setContent(isData);
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  return (
    <div className="work-arrangement">
      <Header />
      <div className="wa-container">
        <div id="wa-title">
          <div>
            현재 <span>나의 근로 상황</span>
          </div>
          <div>알고 계시나요?</div>
        </div>
        <div className="wa-quiz">
          <img src={quizImage} alt="quiz-name" />
          {isModalState && (
            <Modal isOpen={isModalState} ModalType={ModalLogin} />
          )}
          <div
            id="wa-short-cut"
            onKeyDown={() => {}}
            onClick={() => {
              // eslint-disable-next-line no-unused-expressions
              isUser
                ? navigateController(navigate, `${basePath}/ViewMyWork`)
                : modalStateController(isModalState, setModalState);
            }}
            role="button"
            tabIndex="0"
          >
            바로가기
          </div>
        </div>
        <div className="wa-contents">
          <div className="wa-title">다른 결과지들은 어떨까요?</div>
          {isLoading && <p>Loading...</p>}
          {!isLoading && isError && <p>Error: {isError.message}</p>}
          {!isLoading && isData && isData.data
            ? isData.data
                .slice(0, 3)
                .map(item => (
                  <WorkArrangementResult
                    key={item.id}
                    id={item.worksheet_id}
                    title={item.title}
                    content={item.content}
                    extraPay={item.extra_pay}
                    weekPay={item.week_pay}
                    nightPay={item.night_pay}
                    overtimePay={item.overtime_pay}
                    holidayPay={item.holiday_pay}
                  />
                ))
            : !isLoading && !isError && <p>No data available</p>}
          <div className="wa-short-cut-button">
            <div
              className="wa-short-cut"
              onKeyDown={() => {}}
              onClick={() => {
                navigateController(navigate, './List');
              }}
              role="button"
              tabIndex="0"
            >
              더보기
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkArrangement;
