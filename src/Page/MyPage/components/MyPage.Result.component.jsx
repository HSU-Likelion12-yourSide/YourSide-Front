import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/MyPage.Result.scss';
import Result from './MyPage.ResultElement';
import resultTitle from '../function/resultWorkTitle';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const MyPageResult = ({ userId }) => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const [isContent, setContent] = useState();
  // 페이지 네이션 상태 변수
  const [isCurrentPage, setCurrentPage] = useState(1);
  const resultsStandardPage = 4; // Standard

  useEffect(() => {
    setUrl(`/mypage/list/worksheet/${userId}`);
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

  // 페이지네이션 함수
  const indexOfLastResult = isCurrentPage * resultsStandardPage; // 4
  const indexOfFirstResult = indexOfLastResult - resultsStandardPage; // 0
  const currentResults = Array.isArray(isContent)
    ? isContent.slice(indexOfFirstResult, indexOfLastResult) // 0에서 4씩 slice
    : [];

  // 페이지네이션 함수
  const handlePageChange = pageNumber => setCurrentPage(pageNumber);

  // 페이지네이션 함수
  const totalPages = isContent
    ? Math.ceil(isContent.length / resultsStandardPage)
    : 1;

  return (
    <div className="MyPage-Result-container">
      {isLoading && <p>Loading...</p>}
      {!isLoading && isError && <span>저장한 결과지가 없습니다.</span>}
      {/* {!isLoading && isData && isData.data */}
      {!isLoading && isData && isData.data && currentResults.length > 0
        ? currentResults.map((item, index) => {
            const resultState = [
              item.extra_pay,
              item.week_pay,
              item.night_pay,
              item.overtime_pay,
              item.holiday_pay,
            ];
            return (
              <Result
                key={item.id}
                workSheetId={item.worksheet_id}
                title={resultTitle[indexOfFirstResult + index]}
                totalPay={item.total_pay}
                date={item.created_at}
                resultState={resultState}
              />
            );
          })
        : !isLoading && !isError && <p>No data available</p>}

      <div className="MyPage-Result-pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            id={
              isCurrentPage === index + 1
                ? 'MyPage-Result-pagination-selected'
                : 'MyPage-Result-pagination-btn'
            }
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={isCurrentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

MyPageResult.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default MyPageResult;
