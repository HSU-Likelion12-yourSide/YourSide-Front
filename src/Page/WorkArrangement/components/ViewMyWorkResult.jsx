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

  return (
    <div className="ViewMyWorkResult">
      <Header />
      <div className="vmwr-title">내 근로 결과지</div>
      <div className="vmwr-result">
        <Result data={isData} />
      </div>
      <div id="vmwr-group">
        <div className="vmwr-button">결과지 저장하기</div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewMyWorkResult;
