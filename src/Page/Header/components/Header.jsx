import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../img/logo.svg';
import login from '../img/login.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <div className="logo">
          <Link to="/" className="logo">
            <img src={logo} alt="" className="logo" />
            <span />
          </Link>
        </div>

        <div className="nav">
          <Link to="/" className="link">
            <div className="button">홈</div>
          </Link>
          <Link to="/Notation" className="link">
            <div className="button">공지사항</div>
          </Link>
          <Link to="/ContractReview" className="link">
            <div className="button">내 계약서 검토</div>
          </Link>
          <Link to="/WorkArrangement" className="link">
            <div className="button">내 근로 정리</div>
          </Link>
          <Link to="/QuestionAndAnswer" className="link">
            <div className="button">네편 현답</div>
          </Link>
        </div>

        <div className="user-icons">
          <Link to="/Login" className="link">
            <img src={login} alt="" className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
