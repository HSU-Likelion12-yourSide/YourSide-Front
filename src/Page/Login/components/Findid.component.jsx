import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import '../css/Findid.component.scss';

const FindidComponent = () => {
  const [isRequestData, setRequestData] = useState({
    username: '',
    email: '',
  });
  const [isContent, setContent] = useState();
  const { isData, isLoading, isError, setUrl } = useFetchAPI();
  const navigate = useNavigate();

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
      // if (isData.status === 200 || isData.status === 201) {
      // }
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

  const handleSubmit = () => {
    const { username, email } = isRequestData;
    if (username && email) {
      // URLSearchParams를 사용하지 않고 직접 문자열로 연결
      const url = `http://13.124.144.93:8080/api/user/search/username?name=${username}&email=${email}`;
      setUrl(url);
      console.log(url); // URL을 확인
    } else {
      // eslint-disable-next-line no-alert
      alert('모든 필드를 입력해 주세요.');
    }
  };

  return (
    <div className="Findid-container">
      <div className="Findid-group">
        <div className="Findid-email">
          <span>이메일</span>
          <input
            type="text"
            id="Findid-input-email"
            name="email"
            placeholder="이메일을 입력해 주세요"
            value={isRequestData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="Findid-name">
          <span>이름</span>
          <input
            type="text"
            id="Findid-input-name"
            name="username"
            placeholder="이름을 입력해 주세요"
            value={isRequestData.username}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="Findid-submit">
        <button id="Findid-button" onClick={handleSubmit}>
          아이디 찾기
        </button>
        <div className="Findid-link">
          <div
            id="Findid-Findid"
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

export default FindidComponent;
