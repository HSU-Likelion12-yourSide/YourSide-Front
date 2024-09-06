import React from 'react';

const vmwOption = () => {
  return (
    <div className="vmw-group">
      <div className="vmw-question">
        <span>코카콜라 님의 시급은 얼마입니까?</span>
        <span id="description" style={{ display: 'none' }}>
          주 연장 근로 시간 (1일 8시간, 1주 40시간 초과한 시간)
        </span>
      </div>

      <div className="vmw-answer">
        <input type="input" placeholder="입력해주세요." />
        <span>원</span>
      </div>
    </div>
  );
};

export default vmwOption();
