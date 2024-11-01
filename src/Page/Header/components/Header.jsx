import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';
import logo from '../img/logo.svg';
import login from '../img/login.svg';
import myPage from '../img/my-page.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="h-container">
        <div className="h-logo">
          <Link id="h-link" to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="h-hyper-group">
          <div className="h-hyper-link">
            <Link id="h-link" to="/">
              홈
            </Link>
          </div>
          <div className="h-hyper-link">
            <Link id="h-link" to="/Notice">
              공지사항
            </Link>
          </div>
          <div className="h-hyper-link">
            <Link id="h-link" to="/ContractReview">
              내 계약서 검토
            </Link>
          </div>
          <div className="h-hyper-link">
            <Link id="h-link" to="/WorkArrangement">
              내 근로 정리
            </Link>
          </div>
          <div className="h-hyper-link">
            <Link id="h-link" to="/QuestionAndAnswer">
              네편 현답
            </Link>
          </div>
        </div>

        <div className="h-group">
          <div id="h-my-page">
            <Link
              id="h-link"
              to="/MyPage"
              onKeyDown={() => {}}
              onClick={() => {
                /* eslint-disable-next-line no-alert */
                alert('마이 페이지는 준비 중입니다.');
              }}
              role="button"
              tabIndex="0"
            >
              <img src={myPage} alt="" />
            </Link>
          </div>
          <div id="h-login">
            <Link id="h-link" to="/Login">
              <img src={login} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
