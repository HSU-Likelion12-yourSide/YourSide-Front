import { useState, useEffect } from 'react';
import { getData } from './fetch.instance.test';
// API 함수 불러오기
const iGetData = getData;
// 커스텀 훅: 데이터를 fetch하는 로직
const useFetchData = () => {
  const [isData, setData] = useState(null); // 받아온 데이터를 저장할 상태
  const [isLoading, setLoading] = useState(true); // 로딩 상태
  const [isError, setError] = useState(null); // 에러 상태

  useEffect(() => {
    const customFetchData = async () => {
      try {
        const result = await iGetData(); // getData API 호출
        setData(result); // 성공 시 데이터 저장
        setLoading(false); // 로딩 상태 중지
      } catch (err) {
        setError(err); // 에러 발생 시 에러 저장
        setLoading(false); // 로딩 상태 중지
      }
    };

    customFetchData();
  }, []);

  return { isData, isLoading, isError }; // 데이터를 반환
};

export default useFetchData;
