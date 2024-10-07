import React from 'react';
import '../css/ViewMyWorkResult.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import VmwrResult from '../../../Global/components/VmwrResult.component';

const Result = VmwrResult;

const ViewMyWorkResult = () => {
  return (
    <div className="ViewMyWorkResult">
      <Header />
      <div className="vmwr-title">내 근로 결과지</div>
      <Result />
      <div id="vmwr-group">
        <div className="vmwr-button">결과지 저장하기</div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewMyWorkResult;
