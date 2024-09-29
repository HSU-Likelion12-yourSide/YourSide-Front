import React, { useEffect } from 'react';
import { getData } from '../../../Global/API/fetch.instance';

const DevMockingApi = () => {
  useEffect(() => {
    const FetchData = async () => {
      try {
        const data = await getData('/results');
        console.log(data);
      } catch (error) {
        console.error('API Error : ', error);
      }
    };
    FetchData();
  }, []);

  return <div>Mocking Test Page</div>;
};

export default DevMockingApi;
