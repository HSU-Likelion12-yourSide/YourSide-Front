import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40vh',
        border: '1px solid black',
      }}
    >
      <h1>네편 프로젝트 with 멋사</h1>
      <h3>현재 페이지 파일 이름은 Login.jsx 입니다.</h3>
      <Link to="/DevTerminal">
        <button>개발 터미널로 이동</button>
      </Link>
    </div>
  );
};

export default MyPage;
