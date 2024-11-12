import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/Header.scss';
import logo from '../img/logo.svg';
import login from '../img/login.svg';
import myPage from '../img/my-page.svg';
import useGlobalState from '../../../Global/Hooks/useGlobalState';

const Header = () => {
  const { setUser, isUser } = useGlobalState();
  setUser(useParams().user);
  const basePath = isUser ? `/${isUser}` : '';
  console.log(isUser);

  return (
    <div className="header">
      <div className="h-container">
        <div className="h-logo">
          <Link id="h-link" to={`${basePath}/`}>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="h-hyper-group">
          <div className="h-hyper-link">
            <Link id="h-link" to={`${basePath}/`}>
              홈
            </Link>
          </div>
          <div className="h-hyper-link">
            <Link id="h-link" to={`${basePath}/Notice`}>
              공지사항
            </Link>
          </div>
          <div className="h-hyper-link">
            <Link id="h-link" to={`${basePath}/ContractReview`}>
              내 계약서 검토
            </Link>
          </div>
          <div className="h-hyper-link">
            <Link id="h-link" to={`${basePath}/WorkArrangement`}>
              내 근로 정리
            </Link>
          </div>
          <div className="h-hyper-link">
            <Link id="h-link" to={`${basePath}/QuestionAndAnswer`}>
              네편 현답
            </Link>
          </div>
        </div>

        <div className="h-group">
          {useParams().user ? (
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
          ) : (
            <div id="h-my-page" />
          )}
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
