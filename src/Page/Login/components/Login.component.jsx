import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SymbolLogo from '../img/symbol-logo.png';
import SymbolLogoText from '../img/symbol-logo-text.png';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import useGlobalState from '../../../Global/Hooks/useGlobalState';
import '../css/Login.component.scss';

const LoginComponent = () => {
  const { setUser, setUserName } = useGlobalState();
  const navigate = useNavigate();
  const [isRequestData, setRequestData] = useState({
    username: '',
    password: '',
  });
  const [isContent, setContent] = useState();
  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    '',
    'POST',
    isRequestData,
  );

  const handleLogin = () => {
    const { username, password } = isRequestData;
    if (username && password) {
      setUrl('/user/login');
    } else {
      // eslint-disable-next-line no-alert
      alert('아이디와 비밀번호를 입력해주세요.');
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setRequestData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : `, isError);
      setContent(`Error: `, isError);
    } else if (isData && isData.data) {
      console.log(`Success Contact : `, isData);
      setContent(isData.data);
      if (isData.status === 200 || isData.status === 201) {
        const user = isData.data.user_id;
        setUser(user);
        setUserName(isRequestData.username);
        navigate(`/${user}`);
      }
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  return (
    <div className="Login-container">
      <div id="Login-Logo">
        <div>
          <img src={SymbolLogo} alt="" />
        </div>
        <div id="Login-mention">더 이상, 혼자가 아닌 너를 위해</div>
        <div>
          <img src={SymbolLogoText} alt="" />
        </div>
      </div>

      <div className="Login-group">
        <div className="Login-id">
          <span>아이디</span>
          <input
            type="text"
            id="Login-input-id"
            name="username"
            placeholder="아이디를 입력해 주세요"
            value={isRequestData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="Login-password">
          <span>비밀번호</span>
          <input
            type="password"
            id="Login-input-password"
            name="password"
            placeholder="비밀번호를 입력해 주세요"
            value={isRequestData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="Login-submit">
        <button id="Login-button" onClick={handleLogin}>
          로그인
        </button>
        <div className="Login-link">
          <div
            id="Login-find"
            onKeyDown={() => {}}
            onClick={() => {
              navigate('/FindUser');
            }}
            role="button"
            tabIndex="0"
          >
            아이디/비밀번호 찾기
          </div>
          <div
            id="Login-SignUp"
            onKeyDown={() => {}}
            onClick={() => {
              navigate('/SignUp');
            }}
            role="button"
            tabIndex="0"
          >
            회원가입
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
