import React from 'react';
import '../css/ViewMyWork.scss';
import ViewMyWorkOption from './ViewMyWorkOption.component';

const Option = ViewMyWorkOption;

const ViewMyWork = () => {
  return (
    <div className="view-my-work">
      <div className="vmw-container">
        <div id="vmw-title">내 근로 살펴보기</div>
        <Option
          option="코카콜라 님의 시급은 얼마입니까?"
          display="none"
          placeholder="시급을 입력해주세요."
          unit="원"
        />
      </div>
      <button className="vmw-result">검사하기</button>
    </div>
  );
};

export default ViewMyWork;
