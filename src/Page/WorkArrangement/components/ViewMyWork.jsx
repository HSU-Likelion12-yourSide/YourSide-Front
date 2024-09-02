import React from 'react';

const ViewMyWork = () => {
  return (
    <div className="view-my-work">
      <div className="vmw-">내 근로 살펴보기</div>
      <div>
        <div className="vmw-">
          <div className="vmw-">코카콜라 님의 시급은 얼마입니까?</div>
          <div className="vmw-">
            <input type="checkbox" />
            <span>원</span>
          </div>
        </div>
      </div>
      <button className="vmw-">검사하기</button>
    </div>
  );
};

export default ViewMyWork;
