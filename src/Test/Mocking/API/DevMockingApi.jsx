import React, { useEffect } from 'react';
// import { getData } from '../../../Global/API/fetch.instance.test';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const DevMockingApi = () => {
  // 만약 useFetchAPI가 여러개라면?
  const { isData, isLoading, isError, setUrl } = useFetchAPI('/results', 'GET');
  // Legacy
  // useEffect(() => {
  //   const FetchData = async () => {
  //     try {
  //       const data = await getData('/results');
  //       console.log(data);
  //     } catch (error) {
  //       console.error('API Error : ', error);
  //     }
  //   };
  //   FetchData();
  // }, []);

  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
    } else {
      console.log(isData);
    }
  });

  return <div>Mocking Test Page</div>;
};

export default DevMockingApi;
