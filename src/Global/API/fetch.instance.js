import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

console.log('Environment variable:', process.env.REACT_APP_API_URL);

/**
 * @description
 * 이 함수는 기본 API URL을 설정하고, timeout 및 기본 header와 같은 공통 설정이 포함된 Axios instance를 생성하여 반환한다.
 * `.env` 파일에서 환경 변수 `REACT_APP_API_URL` 값을 가져와 기본 URL로 설정하며 별도로 전달된 `baseURL` 값을 사용할 수도 있다.
 * <br>
 * <span style="color: tomato;">
 * 참고로 하단 property는 axios.create의 속성이므로 착오 없이 fetch.instance.js 함수와는 무관함을 인지해야 한다.
 * </span>
 *
 * @version 1.0.0
 * @author 김동우 | 4BEE <4bee.code@gamil.com>
 * @see {@link https://github.com/HSU-Likelion12-yourSide/YourSide-Front/pull/43}
 * @todo Promise.all을 사용해서 직렬 Fetch를 병렬 Fetch로 변환해본다.
 *
 * @param {string} [baseURL=REACT_APP_API_URL] - API 요청의 기본 URL. 설정하지 않으면 환경 변수 `REACT_APP_API_URL`을 기본값으로 사용
 * @property {string} baseURL - (해당 속성은 axios.create의 속성입니다.) API 요청의 기본 URL
 * @property {number} timeout - (해당 속성은 axios.create의 속성입니다.) 요청 timeout을 5000ms(5초)로 설정
 * @property {Object} headers - (해당 속성은 axios.create의 속성입니다.) 기본 요청 headers를 설정, 기본적으로 `Content-Type: application/json`을 포함한다.
 *
 * @returns {AxiosInstance} 설정된 Axios 인스턴스를 반환한다. 이를 통해 API 요청을 손쉽게 처리할 수 있다.
 *
 * @example
 * // 기본 URL을 사용하여 Axios 인스턴스 생성
 * // useFetchAPI 참조
 * const api = fetchAPI();
 *
 * // 사용자 지정 baseURL을 사용하여 Axios 인스턴스 생성
 * const customAPI = fetchAPI('https://custom-api.example.com');
 *
 * // API 요청 예시
 * api.get('/endpoint')
 *   .then(response => {
 *     console.log('Response data:', response.data);
 *   })
 *   .catch(error => {
 *     console.error('Error:', error);
 *   });
 */

// Axios 인스턴스 생성
const fetchAPI = (baseURL = REACT_APP_API_URL) => {
  return axios.create({
    baseURL, // 'https://api.example.com', // API 서버의 기본 URL
    timeout: 5000, // 요청 타임아웃 설정 : 5초
    headers: {
      'Content-Type': 'application/json', // 기본 헤더 설정
      // Authorization: 'Bearer your_access_token', // 필요한 경우 인증 토큰
    },
  });
};

export default fetchAPI;
