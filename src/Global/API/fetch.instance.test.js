import axios from 'axios';

// Axios 인스턴스 생성
const fetchAPI = () => {
  return axios.create({
    baseURL: 'http://localhost:3001', // 'https://api.example.com', // API 서버의 기본 URL
    timeout: 5000, // 요청 타임아웃 설정 : 5초
    headers: {
      'Content-Type': 'application/json', // 기본 헤더 설정
      // Authorization: 'Bearer your_access_token', // 필요한 경우 인증 토큰
    },
  });
};

// GET 요청 함수
export const getData = async URL => {
  try {
    const api = fetchAPI();
    const response = await api.get(URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // 에러 발생 시 다시 던짐
  }
};

// POST 요청 함수
export const postData = async (URL, data) => {
  try {
    const api = fetchAPI();
    const response = await api.post(URL, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error; // 에러 발생 시 다시 던짐
  }
};

// PUT 요청 함수
export const updateData = async (URL, data) => {
  try {
    const api = fetchAPI();
    const response = await api.put(URL, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error; // 에러 발생 시 다시 던짐
  }
};

// DELETE 요청 함수
export const deleteData = async URL => {
  try {
    const api = fetchAPI();
    const response = await api.delete(URL);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error; // 에러 발생 시 다시 던짐
  }
};
