import { useState, useEffect } from 'react';
import fetchAPI from '../fetch.instance';
// API Contact
const { REACT_APP_API_URL } = process.env;

// useFetchAPI 훅 정의
const useFetchAPI = (initialUrl, method = 'GET', requestData = null) => {
  const [isLoading, setLoading] = useState(false); // 데이터를 요청하는 동안의 로딩 상태 : isLoading으로 요청이 진행 중인지 표시하며
  const [isUrl, setUrl] = useState(initialUrl); // 데이터를 가져올 때 사용할 URL : isUrl로 요청할 URL을 정하고
  const [isData, setData] = useState(null); // API에서 가져온 데이터나 컴포넌트가 렌더링할 데이터 : isData로 가져온 데이터를 저장하고,
  const [isError, setError] = useState(null); // 데이터 요청 중에 발생한 에러 : isError로 오류가 발생했는지 관리합니다.

  // 받아온 데이터를 검증할 수 있는 방법은 prop-types의 shape을 사용하면 가능하다.
  // 이를 더해서 jsdoc을 사용해서 인가받은 코드들에도 타입 힌트를 줄 수 있다.

  const queryUrl = (url, queryData) => {
    const queryString = new URLSearchParams(queryData).toString();
    return `${url}?${queryString}`;
  };

  // 데이터를 요청하는 함수
  const fetchData = async () => {
    setLoading(true);
    const api = fetchAPI(REACT_APP_API_URL);

    try {
      let response;

      let url = isUrl;

      if (method === 'GET' && requestData) {
        url = queryUrl(isUrl, requestData);
      }

      switch (method) {
        case 'GET':
          response = await api.get(url, requestData);
          break;
        case 'POST':
          response = await api.post(url, requestData);
          break;
        case 'PUT':
          response = await api.put(url, requestData);
          break;
        case 'DELETE':
          response = await api.delete(url);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect로 API 호출 실행
  useEffect(() => {
    if (isUrl) fetchData();
    /**
      JSON.stringify(requestData):
      requestData가 객체일 경우, 참조가 변할 때마다 useEffect가 실행되지 않도록 JSON.stringify로 직렬화하여 비교합니다. 이렇게 하면 객체 내부 값이 변하지 않는 한 useEffect가 불필요하게 재실행되지 않습니다.
      
      useEffect 의존성 배열 최적화:
      requestData의 변경 여부는 직렬화된 문자열을 비교하도록 하여 무한 루프를 방지합니다.
    */
    // JSON.stringify(requestData)를 사용하여 의존성 배열에 requestData가 바뀔 때만 useEffect 실행
  }, [isUrl, method, JSON.stringify(requestData)]);

  return { isData, isLoading, isError, setUrl };
};

export default useFetchAPI;
