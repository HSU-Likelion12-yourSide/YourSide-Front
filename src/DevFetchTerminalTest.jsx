import React, { useEffect, useState } from 'react';
import useFetchAPI from './Global/API/Hooks/useFetchAPI';
import './DevFetchTerminalTest.scss';

const DevFetchTerminalTest = () => {
  // API URI
  const [isURI, setURI] = useState();
  // API method
  const [isMethod, setMethod] = useState('GET');
  // API Value
  const [isReturnData, setReturnData] = useState({
    inputA: undefined,
    inputB: undefined,
  });
  // 단일 API
  const [isContent, setContent] = useState('');
  // 복합 API

  // input 필드의 값 상태 관리
  const [isInputAValue, setInputAValue] = useState('');
  const [isInputBValue, setInputBValue] = useState('');

  // 로그인
  const postData = {
    username: isInputAValue,
    password: isInputBValue,
    // isInputAValue, // 상태에서 가져온 username
    // isInputBValue, // 상태에서 가져온 password
  };

  // useFetchAPI Hook
  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    isURI,
    isMethod,
    isMethod === 'POST' ? postData : null,
  );

  // API useEffect
  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : ${isError}`);
      setContent(`Error: ${isError}`);
    } else if (isData) {
      console.log('Success Contact:', isData);
      setContent(isData);
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  // local
  const handleSubmit = event => {
    event.preventDefault(); // 폼이 실제로 제출되지 않도록 방지
    const inputValue = event.target.elements.URI.value; // input 필드 값 가져오기
    setURI(inputValue); // 상태 업데이트
    console.log(`URI: ${inputValue}, Method: ${isMethod}`);

    // 선택한 URI와 메서드로 API 호출
    setUrl(inputValue);
  };

  // 체크박스 상태를 관리하는 상태 변수
  const [isInputAEnabled, setIsInputAEnabled] = useState(false);
  const [isInputBEnabled, setIsInputBEnabled] = useState(false);

  // 체크박스 상태 변경 핸들러
  const handleCheckboxChangeA = e => {
    setIsInputAEnabled(e.target.checked); // 체크 여부에 따라 상태 변경
  };

  const handleCheckboxChangeB = e => {
    setIsInputBEnabled(e.target.checked); // 체크 여부에 따라 상태 변경
  };

  // input 값 변경 핸들러
  const handleInputChangeA = e => {
    setInputAValue(e.target.value);
  };

  const handleInputChangeB = e => {
    setInputBValue(e.target.value);
  };

  // 폼 제출 시 input A와 input B의 값을 출력
  const handlePostSubmit = event => {
    event.preventDefault();
    console.log('Input A:', isInputAValue);
    console.log('Input B:', isInputBValue);
    // setMethod('POST'); // POST 메서드를 설정
    // setUrl(isURI); // URL을 설정하여 요청 트리거
  };

  return (
    <div className="DevFetch">
      <h1>DevFetchTest</h1>
      Choose HTTP Method:
      <div className="API-attribute">
        <div className="select-method-type">
          <label htmlFor="httpMethod">
            <select
              id="httpMethod"
              name="method"
              value={isMethod}
              onChange={e => setMethod(e.target.value)}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </label>
        </div>
        <div className="input-API-URI">
          <form className="input-API-group" onSubmit={handleSubmit}>
            <div id="post-URI">
              <input type="text" name="URI" />
            </div>
            <button id="URI-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <span id="API-attribute-result">Submitted URI: {isURI}</span>
      <div className="post-API" disabled="">
        <form onSubmit={handlePostSubmit}>
          <div className="post-API">
            <div id="input-A">
              <span>input A: </span>
              <input
                id="post-element-API"
                type="text"
                disabled={!isInputAEnabled}
                value={isInputAValue}
                onChange={handleInputChangeA}
              />
              {/* 체크박스를 추가하여 활성화/비활성화 */}
              <label id="inputA-label" htmlFor="inputA">
                <input
                  type="checkbox"
                  checked={isInputAEnabled}
                  onChange={handleCheckboxChangeA}
                />
                Enable Input A
              </label>
            </div>

            <div id="input-B">
              <span>input B: </span>
              <input
                id="post-element-API"
                type="text"
                disabled={!isInputBEnabled}
                value={isInputBValue}
                onChange={handleInputChangeB}
              />
              {/* 체크박스를 추가하여 활성화/비활성화 */}
              <label id="inputB-label" htmlFor="inputB">
                <input
                  type="checkbox"
                  checked={isInputBEnabled}
                  onChange={handleCheckboxChangeB}
                />
                Enable Input B
              </label>
            </div>
            <div>
              * 현재 고정된 postData를 사용하고 있습니다. post는 Login만 가능
            </div>
            <button id="post-button" type="submit" disabled={!isInputAEnabled}>
              save
            </button>
          </div>
        </form>
      </div>
      <div className="post-API-result">
        {isData
          ? JSON.stringify(isData, null, 2)
              .split(',')
              .map((item, index) => (
                <div id="API-result" key={index}>
                  {item}
                  <br />
                </div>
              ))
          : 'No data available'}
      </div>
      <div className="post-API-message">
        <div id="fetch-message">
          <span>Fetch Message</span>
          <div>{isContent?.message ? isContent.message : 'No Data'}</div>
        </div>
        <div id="fetch-Error">
          <span>Fetch Error</span>
          <div>{isData?.status ? isData.status : 'No Data'}</div>
        </div>
      </div>
    </div>
  );
};

export default DevFetchTerminalTest;
