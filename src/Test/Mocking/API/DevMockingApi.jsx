import React, { useState } from 'react';
// import URL from '../Key/URL';

const DevMockingApi = () => {
  const [isUsername, setUsername] = useState('');
  const [isPassword, setPassword] = useState('');
  const [isEmail, setEmail] = useState('');
  const [isName, setName] = useState('');
  const [isNickname, setNickname] = useState('');
  const [isState, setState] = useState('');

  const reQuestBody = {
    username: isUsername,
    password: isPassword,
    email: isEmail,
    name: isName,
    nickname: isNickname,
  };
  // const URL = 'http://localhost:3001/users';

  const handleSignUpPost = async e => {
    e.preventDefault();
    try {
      const response = await fetch(URL.mockingURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reQuestBody),
      });

      if (response.ok) {
        console.log('성공');
        setState('성공');
      } else {
        console.error('회원가입 요청 실패');
        setState('회원가입 실패');
      }
    } catch (error) {
      console.error('네트워크 오류:', error);
      setState('네트워크 오류');
    }
  };

  return (
    <div>
      <h1>DevMockingApi for API TEST</h1>
      <h2>로그인</h2>

      <hr />
      <h2>회원가입</h2>
      <form onSubmit={handleSignUpPost}>
        <div>
          <div>
            {/* string */}* userName :{' '}
            <input
              type="text"
              placeholder="userName"
              onChange={e => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            {/* hidden */}* pw :{' '}
            <input
              type="password"
              placeholder="pw"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            {/* email */}* email :{' '}
            <input
              type="email"
              placeholder="email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            {/* string */}* name :{' '}
            <input
              type="text"
              placeholder="name"
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            {/* string */}* nickname :{' '}
            <input
              type="text"
              placeholder="nickname"
              onChange={e => {
                setNickname(e.target.value);
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            * state :
            <p style={{ margin: '0' }}>
              {isState === '' ? 'please, submit' : isState}
            </p>
          </div>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default DevMockingApi;
