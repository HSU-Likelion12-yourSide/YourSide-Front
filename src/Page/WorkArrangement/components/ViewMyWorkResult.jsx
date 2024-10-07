import React, { useEffect } from 'react';
import '../css/ViewMyWorkResult.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import VmwrResult from '../../../Global/components/VmwrResult.component';
// import data from '../../../Global/temp/data/vmwrResult.data';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const Result = VmwrResult;

const ViewMyWorkResult = () => {
  const { isData, isLoading, isError, setUrl } = useFetchAPI('/results', 'GET');

  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
    } else if (isError) {
      console.log(`is Error : ${isError}`);
    } else {
      console.log(`Success Contact : ${isData}`);
    }
  });

  // 렌더링할 내용을 if 문으로 처리
  // 이 부분을 함수로 분리 및 관리 해야할지 고민
  let content;
  if (isLoading) {
    content = 'Loading...';
  } else if (isError) {
    content = `Error: ${isError}`;
  } else if (isData) {
    content = <Result data={isData} />;
  } else {
    content = null; // 모든 조건에 해당하지 않을 때
  }

  return (
    <div className="ViewMyWorkResult">
      <Header />
      <div className="vmwr-title">내 근로 결과지</div>
      <div className="vmwr-result">{content}</div>
      <div id="vmwr-group">
        <div className="vmwr-button">결과지 저장하기</div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewMyWorkResult;
