import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import VQnAComment from './VQnAComment.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import '../css/VQnACommentList.scss';

const VQnACommentList = () => {
  const requestData = {
    // eslint-disable-next-line camelcase
    user_id: 1, // 현재 조회하는 회원의 고유 ID
    // eslint-disable-next-line camelcase
    posting_id: 2, // 댓글 고유 ID
  };

  // GET API 수정 예정
  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    '/comment/list',
    'GET',
    requestData,
  );

  const [isContent, setContent] = useState('');

  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : `, isError);
      setContent(`Error: `, isError);
    } else if (isData && isData.data) {
      console.log(`Success Contact : `, isData);
      setContent(isData.data);
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  // 임시
  // useEffect(() => {
  //   const fetchDataWithBodyInGet = async () => {
  //     const requestData = {
  //       // eslint-disable-next-line camelcase
  //       user_id: 1, // 현재 조회하는 회원의 고유 ID
  //       // eslint-disable-next-line camelcase
  //       posting_id: 2, // 댓글 고유 ID
  //     };

  //     try {
  //       const response = await axios({
  //         method: 'GET',
  //         url: 'http://13.124.144.93:8080/api/comment/list',
  //         transformRequest: [
  //           /* eslint-disable no-param-reassign */
  //           (data, headers) => {
  //             headers['Content-Type'] = 'application/json';
  //             // payload 확인용 로깅
  //             console.log('Payload:', data);
  //             return JSON.stringify(data);
  //           } /* eslint-enable no-param-reassign */,
  //         ],

  //         data: requestData, // GET 요청에서 body에 데이터 포함
  //       });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchDataWithBodyInGet();
  // }, []);

  return (
    <div className="qav-comment-group">
      <div className="qav-write-comment">
        <div className="qav-group">
          <div id="qav-comment-writer">코카콜라</div>
          <textarea
            cols="80"
            id="qav-comment-textfield"
            type="text"
            placeholder="답변을 남겨주세요"
          />
          <div className="qav-button-group">
            <div id="qav-comment-button">답변 달기</div>
          </div>
        </div>
      </div>
      <div className="qav-comment-array">
        <div className="qav-comment-array-group">
          <div id="qav-comment-array-method">좋아요순</div>
          <div id="qav-comment-array-method">최신순</div>
        </div>
        {/* props필요 */}
        <VQnAComment />
      </div>
    </div>
  );
};

export default VQnACommentList;
