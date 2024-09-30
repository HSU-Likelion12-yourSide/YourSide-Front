import { useState, useEffect } from 'react';
import fetchAPI from '../fetch.instance';

// useFetchAPI 훅 정의
const useFetchAPI = (initialUrl, method = 'GET', requestData = null) => {
  const [isLoading, setLoading] = useState(false); // 데이터를 요청하는 동안의 로딩 상태 : isLoading으로 요청이 진행 중인지 표시하며
  const [isUrl, setUrl] = useState(initialUrl); // 데이터를 가져올 때 사용할 URL : isUrl로 요청할 URL을 정하고
  const [isData, setData] = useState(null); // API에서 가져온 데이터나 컴포넌트가 렌더링할 데이터 : isData로 가져온 데이터를 저장하고,
  const [isError, setError] = useState(null); // 데이터 요청 중에 발생한 에러 : isError로 오류가 발생했는지 관리합니다.

  // 받아온 데이터를 검증할 수 있는 방법은 prop-types의 shape을 사용하면 가능하다.
  // 이를 더해서 jsdoc을 사용해서 인가받은 코드들에도 타입 힌트를 줄 수 있다.
  // 데이터를 요청하는 함수
  const fetchData = async () => {
    setLoading(true);
    const api = fetchAPI();

    try {
      let response;

      switch (method) {
        case 'GET':
          response = await api.get(isUrl);
          break;
        case 'POST':
          response = await api.post(isUrl, requestData);
          break;
        case 'PUT':
          response = await api.put(isUrl, requestData);
          break;
        case 'DELETE':
          response = await api.delete(isUrl);
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
  }, [isUrl, method, requestData]);

  return { isData, isLoading, isError, setUrl };
};

export default useFetchAPI;
