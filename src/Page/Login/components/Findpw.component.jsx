import React, { useEffect, useState } from 'react';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import '../css/Findpw.component.scss';

const FindpwComponent = () => {
  const [isContent, setContent] = useState();
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const [isRequestData, setRequestData] = useState({
    username: '',
    email: '',
    name: '',
  });
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
        // navigate('/Login');
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

  const handleSignUp = () => {
    const { username, email, name } = isRequestData;
    // 모든 필드가 채워졌는지 확인
    if (username && email && name) {
      setUrl(
        `http://13.124.144.93:8080/api/user/search/password?name=${name}&email=${email}&username=${username}`,
      ); // 모든 값이 입력된 경우에만 URL 설정하여 POST 요청 트리거
    } else {
      // eslint-disable-next-line no-alert
      alert('모든 필드를 입력해 주세요.');
    }
  };

  return (
    <div className="Findpw-container">
      <div className="Findpw-group">
        <div className="Findpw-email">
          <span>이메일</span>
          <input
            type="text"
            id="Findpw-input-email"
            name="email"
            placeholder="이메일을 입력해 주세요"
            value={isRequestData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="Findpw-name">
          <span>이름</span>
          <input
            type="text"
            id="Findpw-input-name"
            name="name"
            placeholder="이름을 입력해 주세요"
            value={isRequestData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="Findpw-id">
          <span>아이디</span>
          <input
            type="text"
            id="Findpw-input-id"
            name="username"
            placeholder="아이디를 입력해 주세요"
            value={isRequestData.username}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="Findpw-submit">
        <button id="Findpw-button" onClick={handleSignUp}>
          비밀번호 찾기
        </button>
        <div className="Findpw-link">
          <div id="Findpw-Findpw">회원가입</div>
        </div>
      </div>
    </div>
  );
};

export default FindpwComponent;
