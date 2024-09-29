import axios from 'axios';

const { REACT_APP_MOCKING_API_URL } = process.env;

console.log('Environment variable:', process.env.REACT_APP_MOCKING_API_URL);

// Axios 인스턴스 생성
const fetchAPI = (baseURL = REACT_APP_MOCKING_API_URL) => {
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
