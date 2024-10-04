import React from 'react';
import '../css/notation.css';
import Header from '../../Header/components/Header';

const Notation = () => {
  return (
    <div className="Notation">
      <Header />
      <div className="temp">
        <h1 id="title">공지사항</h1>
        <div className="container">
          <div className="id-container">
            <div id="notation">주요</div>
            <div id="notation">주요</div>
            <div>01</div>
            <div>01</div>
            <div>01</div>
            <div>01</div>
            <div>01</div>
          </div>
          <div className="content-container">
            <div>네편 설명서</div>
            <div>열심히 일하는 당신을 위한 ‘네편’이 되겠습니다.</div>
            <div>공지사항 1</div>
            <div>공지사항 2</div>
            <div>공지사항 3</div>
            <div>공지사항 4</div>
            <div>공지사항 5</div>
          </div>
          <div className="date-container">
            <div>2024.05.13</div>
            <div>2024.05.13</div>
            <div>2024.05.13</div>
            <div>2024.05.13</div>
            <div>2024.05.13</div>
            <div>2024.05.13</div>
            <div>2024.05.13</div>
          </div>
        </div>
        <div className="pagination">
          <div>이전</div>
          <div>1</div>
          <div>이후</div>
        </div>
      </div>
    </div>
  );
};

export default Notation;
