import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/MyPage.Result.scss';
import Result from './MyPage.ResultElement';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const MyPageResult = ({ userId }) => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const [isContent, setContent] = useState();

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
  return (
    <div className="MyPage-Result-container">
      {isLoading && <p>Loading...</p>}
      {!isLoading && isError && <span>저장한 결과지가 없습니다.</span>}
      {!isLoading && isData && isData.data
        ? isData.data.map(item => {
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
                totalPay={item.total_pay}
                date={item.created_at}
                resultState={resultState}
              />
            );
          })
        : !isLoading && !isError && <p>No data available</p>}
    </div>
  );
};

MyPageResult.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default MyPageResult;
