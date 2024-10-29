import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SymbolRow from '../img/symbol-logo-row.png';
import useFetchAPI from '../../../../Global/API/Hooks/useFetchAPI';
import '../css/signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [isContent, setContent] = useState();
  const [requestData, setRequestData] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    nickname: '',
  });
  // post
  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    '',
    'POST',
    requestData,
  );

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
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData, navigate]);

  // 입력 필드 변경 함수
  const handleInputChange = e => {
    // name으로 지정되어 있는 input 필드 값에 따라 함수가 useState에 저장될 수 있게 코드 구현
    const { name, value } = e.target;
    setRequestData(pre => ({
      ...pre,
      [name]: value,
    }));
  };

  // 회원가입 버튼 클릭 시 실행할 함수
  const handleSignUp = () => {
    const { username, password, email, name, nickname } = requestData;

    // 모든 필드가 채워졌는지 확인
    if (username && password && email && name && nickname) {
      setUrl('user/signup'); // 모든 값이 입력된 경우에만 URL 설정하여 POST 요청 트리거
    } else {
      // eslint-disable-next-line no-alert
      alert('모든 필드를 입력해 주세요.');
    }
  };

  return (
    <div className="Sign-Up">
      <div className="container">
        <div className="symbol">
          <img src={SymbolRow} alt="symbol-logo-row" />
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
        </div>

        <div className="email">
          <p>이메일</p>
          <input
            name="email"
            placeholder="이메일을 입력해 주세요"
            value={requestData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="name">
          <p>이름</p>
          <input
            name="name"
            placeholder="이름을 입력해 주세요"
            value={requestData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="nickname">
          <p>닉네임</p>
          <input
            name="nickname"
            placeholder="닉네임을 입력해 주세요"
            value={requestData.nickname}
            onChange={handleInputChange}
          />
        </div>

        <button
          id="Sign-Up-button"
          onClick={() => {
            handleSignUp();
            if (isData.status === 200 || isData.status === 201) {
              navigate('/Login');
            }
          }}
        >
          회원가입
        </button>
        <div className="sign-up">
          <p>이미 네편이 회원이신가요?</p>
          <p style={{ color: 'black' }}>
            <strong>로그인</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
