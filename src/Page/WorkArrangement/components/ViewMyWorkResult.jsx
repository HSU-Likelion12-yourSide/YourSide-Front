import React from 'react';
import '../css/ViewMyWorkResult.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';

const ViewMyWorkResult = () => {
  return (
    <div className="ViewMyWorkResult">
      <Header />
      <div className="vmwr-title">내 근로 결과지</div>
      <div className="vmwr-container">
        <div className="vmwr-contents">
          <div className="vmwr-result-title">근로 결과지</div>
          <div>
            상시 5인 이상 사업장에서 근무하시므로 추가적인 가산 수당이
            발생합니다.
          </div>
          <div>주 근로 시간이 14 시간이므로 주휴수당이 발생하지 않습니다.</div>
          <div>
            한 주 동안 야간 근로시간이 0 시간이므로 야간근로수당 0 원이
            발생합니다.
          </div>
          <div>
            한 주 동안 연장 근로시간이 0 시간이므로 연장근로수당 0 원이
            발생합니다.
          </div>
          <div>
            취업 규칙 등에서 정한 약정 휴일에 0 시간 근무하므로 휴일근로수당 0
            원이 발생합니다.
          </div>
          <div>4대보험 9.32 %가 적용됩니다.</div>
          <div>따라서, 코카콜라 님의 월급은 800,000 원 입니다.</div>
        </div>
        <div className="vmwr-group">
          <div className="vmwr-options">발생 요건들</div>
          <div className="vmwr-list">
            <div>가산수당</div>
            <div>주휴수당</div>
            <div>야간근로수당</div>
            <div>연장근로수당</div>
            <div>휴일근로수당</div>
          </div>
        </div>
      </div>
      <div className="vmwr-button">결과지 저장하기</div>
      <Footer />
    </div>
  );
};

export default ViewMyWorkResult;
