import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import '../css/login.css';
import SymbolLogo from '../img/symbol-logo.png';
import SymbolLogoText from '../img/symbol-logo-text.png';
import useGlobalState from '../../../Global/Hooks/useGlobalState';

const MyPage = () => {
  const navigate = useNavigate();
  const { setUser } = useGlobalState();
  const [isContent, setContent] = useState();
  // 아이디와 비밀번호를 담을 객체 상태 정의
  const [requestData, setRequestData] = useState({
    username: '',
    password: '',
  });

  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    '',
    'POST',
    requestData,
  );

  const handleLogin = () => {
    // 로그인 로직 실행 (예: API 호출)
    const { username, password } = requestData;
    if (username && password) {
      // 로그인 성공 시 메인 페이지로 이동
      console.log(isData);
      setUrl('/user/login');
      navigate('/');
    } else {
      // eslint-disable-next-line no-alert
      alert('아이디와 비밀번호를 입력해주세요.');
    }
  };

  // 입력 필드 변경 핸들러
  const handleInputChange = e => {
    const { name, value } = e.target;
    setRequestData(prevData => ({
      ...prevData,
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
      const user = isData.data.user_id;
      setUser(user);
      if (isData.status === 200 || isData.status === 201) {
        navigate(`/${user}`);
      }
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  return (
    <div className="Login">
      <div className="container">
        <div className="symbol">
          <img src={SymbolLogo} alt="symbol-logo" />
          <p>더 이상, 혼자가 아닌 너를 위해</p>
          <img src={SymbolLogoText} alt="symbol-logo-text" />
        </div>

        <div className="id">
          <p>아이디</p>
          <input
            name="username"
            placeholder="아이디를 입력해 주세요"
            value={requestData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="pw">
          <p>비밀번호</p>
          <input
            name="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={requestData.password}
            onChange={handleInputChange}
          />
          <p
            style={{
              // display: 'flex',
              display: 'none',
              justifyContent: 'center',
              marginTop: '14px',
              fontSize: '13px',
              color: '#DC0000',
            }}
          >
            아이디 혹은 비밀번호가 옳지 않습니다.
          </p>
        </div>

        <button id="login-button" onClick={handleLogin}>
          로그인
        </button>
        <div className="sign-up">
          <p>아이디/비밀번호 찾기</p>
          <p
            style={{ color: 'black' }}
            onClick={() => {
              navigate('/SignUp');
            }}
            onKeyDown={() => {}}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            tabIndex="0"
            aria-label="Bookmark"
          >
            <strong>회원가입</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
