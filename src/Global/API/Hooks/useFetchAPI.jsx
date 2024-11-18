import { useState, useEffect } from 'react';
import fetchAPI from '../fetch.instance';
// API Contact
const { REACT_APP_API_URL } = process.env;

/**
 * @param {string} initialUrl - API 요청을 보낼 초기 URL
 * @param {'GET'|'POST'|'PUT'|'DELETE'} [method='GET'] - 요청에 사용할 HTTP 메서드 (기본값은 'GET')
 * @param {object|null} [requestData=null] - 요청에 포함될 데이터 (POST, PUT 메서드에서 사용)
 *
 * @description <해당 커스텀 훅(Hook)은 `fetch.instance.js`를 기반으로 동작하고 있습니다. 따라서 해당 Axios instance를 모른다면 `fetch.instance.js`를 보고 오시는 것을 추천 합니다.> useFetchAPI는 4가지 상태를 관리하고 반환한다. 차례대로 `isLoading`, `isUrl`, `isData`, `isError`와 같다. useFetchAPI는 현재 fetchData 함수는 단일 요청만 처리하도록 작성되어 있다. 따라서 한 번 호출할 때 하나의 요청만 수행하며 내부에서 병렬로 여러 요청을 처리하는 로직이 포함되어 있지 않다. 그래서 useFetchAPI를 다중으로 사용할 때는 비구조할당 방식으로 useFetchAPI를 두번 호출해야하는 불편함과 단점이 있다.
 * @version 1.0.0
 * @author 김동우 | 4BEE <4bee.code@gamil.com>
 * @see {@link https://github.com/HSU-Likelion12-yourSide/YourSide-Front/pull/43}
 * @todo Promise.all을 사용해서 직렬 Fetch를 병렬 Fetch로 변환해본다.
 *
 * @property {any} isData - API에서 반환된 데이터 / default: `null`
 * @property {boolean} isLoading - 요청이 진행 중인지 나타내는 상태 / default: `false`
 * @property {Error|null} isError - 요청이 실패했을 경우 발생한 에러 객체. 없을 경우 `null` / default: `null`
 * @property {string} setUrl - 요청 URL을 설정하거나 업데이트하는 함수 / default: `initialUrl`
 *
 * @returns {Object} API 요청 상태들을 담은 객체를 반환합니다.
 *
 * @example
 * const { isData, isLoading, isError, setUrl } = useFetchAPI('/api/data', 'GET', { key: 'value' }); // post 요청 시에만 객체 key, value로 설정
 * const [isContent, setContent] = useState();
 *
 * useEffect(() => {
 *    if (isLoading) {
 *      console.log('..is Loading');
 *      setContent('Loading...');
 *    } else if (isError) {
 *      console.log(`is Error : `, isError);
 *      setContent(`Error: `, isError);
 *    } else if (isData && isData.data) {
 *      console.log(`Success Contact : `, isData);
 *      setContent(isData.data);
 *    } else {
 *      setContent(null);
 *    }
 *  }, [isLoading, isError, isData]);
 *
 * setUrl('/api/new-data'); // 요청 URL 업데이트
 */

// useFetchAPI 훅 정의
const useFetchAPI = (initialUrl, method = 'GET', requestData = null) => {
  const [isLoading, setLoading] = useState(false); // 데이터를 요청하는 동안의 로딩 상태 중인지 isLoading으로 나타냅니다.

  const [isUrl, setUrl] = useState(initialUrl); // API 요청에 가져올 때 사용할 URL입니다.

  const [isData, setData] = useState(null); // API에서 가져온 데이터나 렌더링할 컴포넌트를 반환 합니다.

  const [isError, setError] = useState(null); // 데이터 요청 중에 발생한 에러 객체입니다.

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
      console.log('Response received:', response);
      setData(response.data);
    } catch (error) {
      console.error('Error occurred:', error);
      setError(error);
    } finally {
      console.log('Setting isLoading to false');
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
