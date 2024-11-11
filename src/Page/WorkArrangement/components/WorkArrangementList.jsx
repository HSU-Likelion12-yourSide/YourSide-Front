import React, { useState, useEffect } from 'react';
import '../css/WorkArrangement.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import WorkArrangementResult from './WorkArrangementResult.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const WorkArrangementList = () => {
  // useNavigate 사용하기 위한 변수 정의
  const [isContent, setContent] = useState('');
  const { isData, isLoading, isError, setUrl } = useFetchAPI();

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
        <div className="wa-contents">
          <div id="wa-title">다른 근로 결과지들은 어떨까요?</div>
          {isLoading && <p>Loading...</p>}
          {!isLoading && isError && <p>Error: {isError.message}</p>}
          {!isLoading && isData && isData.data
            ? isData.data.map(item => (
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkArrangementList;
