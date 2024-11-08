import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import '../css/SignUp.component.scss';
import SymbolLogo from '../img/symbol-logo-row.png';

const SignUpComponent = () => {
  const [isContent, setContent] = useState();
  const [isRequestData, setRequestData] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    nickname: '',
  });
  const navigate = useNavigate();

  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    '',
    'POST',
    isRequestData,
  );

  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : `, isError);
      setContent(`Error: `, isError);
    } else if (isData) {
      console.log(`Success Contact : `, isData);
      setContent(isData.data);
      console.log(isData);
      if (isData.status === 200 || isData.status === 201) {
        navigate('/Login');
        console.log(isData.status);
      }
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setRequestData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // 회원가입 버튼 클릭 시 실행할 함수
  const handleSignUp = () => {
    const { username, password, email, name, nickname } = isRequestData;
    // 모든 필드가 채워졌는지 확인
    if (username && password && email && name && nickname) {
      setUrl('user/signup'); // 모든 값이 입력된 경우에만 URL 설정하여 POST 요청 트리거
    } else {
      // eslint-disable-next-line no-alert
      alert('모든 필드를 입력해 주세요.');
    }
  };

  return (
    <div className="SignUp-container">
      <div id="SignUp-Logo">
        <div>
          <img src={SymbolLogo} alt="" />
        </div>
      </div>

      <div className="SignUp-group">
        <div className="SignUp-id">
          <span>아이디</span>
          <input
            type="text"
            id="SignUp-input-id"
            name="username"
            placeholder="아이디를 입력해 주세요"
            value={isRequestData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="SignUp-password">
          <span>비밀번호</span>
          <input
            type="password"
            id="SignUp-input-password"
            name="password"
            placeholder="비밀번호를 입력해 주세요"
            value={isRequestData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="SignUp-email">
          <span>이메일</span>
          <input
            type="text"
            id="SignUp-input-email"
            name="email"
            placeholder="이메일을 입력해 주세요"
            value={isRequestData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="SignUp-name">
          <span>이름</span>
          <input
            type="text"
            id="SignUp-input-name"
            name="name"
            placeholder="이름을 입력해 주세요"
            value={isRequestData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="SignUp-nickname">
          <span>닉네임</span>
          <input
            type="text"
            id="SignUp-input-nickname"
            name="nickname"
            placeholder="닉네임을 입력해 주세요"
            value={isRequestData.nickname}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="SignUp-submit">
        <button id="SignUp-button" onClick={handleSignUp}>
          로그인
        </button>
        <div className="SignUp-link">
          <div id="SignUp-mention">이미 네편이 회원이신가요?</div>
          <div id="SignUp-SignUp">로그인</div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
