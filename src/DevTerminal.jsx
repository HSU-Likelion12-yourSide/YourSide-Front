import React from 'react';
import { Link } from 'react-router-dom';

const Terminal = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30vh',
      }}
    >
      <h1>네편 프로젝트 with 멋사</h1>
      <h3 style={{ color: 'tomato' }}>
        현재 페이지는 개발을 위한 DevTerminal.jsx 입니다.
      </h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50vh',
          alignItems: 'flex-start', // 왼쪽 정렬로 변경
          backgroundColor: '#3313',
          border: '1px solid black',
        }}
      >
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/ContractReview">Contract Review</Link>
          </li>
          <li>
            <Link to="/QuestionAndAnswer">Question and Answer</Link>
          </li>
          <li>
            <Link to="/WorkArrangement">Work Arrangement</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/MyPage">My Page</Link>
          </li>
          <li>
            <Link to="/Notation">Notation</Link>
          </li>
          <li>
            <Link
              to="/DevTerminal"
              onClick={() => {
                alert("현재 페이지가 'DevTerminal' 입니다.");
              }}
            >
              Dev Terminal
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Terminal;
