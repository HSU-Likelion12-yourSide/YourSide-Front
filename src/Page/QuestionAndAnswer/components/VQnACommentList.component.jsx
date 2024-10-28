import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import VQnAComment from './VQnAComment.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import '../css/VQnACommentList.scss';

const VQnACommentList = () => {
  const [isComment, setComment] = useState();
  const [isContent, setContent] = useState('');

  // 해당 user_id, posting_id 다시 설정 필요
  const requestData = {
    // eslint-disable-next-line camelcase
    user_id: 1, // 현재 조회하는 회원의 고유 ID
    // eslint-disable-next-line camelcase
    posting_id: 2, // 댓글 고유 ID
  };

  // 해당 user_id, posting_id 다시 설정 필요
  const requestCommentData = {
    // eslint-disable-next-line camelcase
    user_id: 1,
    // eslint-disable-next-line camelcase
    posting_id: 2,
    content: isComment,
  };

  // GET API 수정 예정
  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    '/comment/list',
    'GET',
    requestData,
  );

  const {
    isData: isCommentData,
    isLoading: isCommentLoading,
    isError: isCommentError,
    setUrl: setCommentUrl,
  } = useFetchAPI('', 'POST', requestCommentData);

  const postComment = () => {
    if (isComment.trim()) {
      setCommentUrl('/comment'); // 답변이 있을 때만 URL을 설정하여 POST 요청 발생
    } else {
      // alert('댓글 내용을 입력해주세요.');
    }
  };

  useEffect(() => {
    if (isLoading || isCommentLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError || isCommentError) {
      console.log(`Error: `, isError || isCommentError);
      setContent(`Error: ${isError || isCommentError}`);
    } else {
      if (isData && isData.data) {
        console.log(`Success GET Contact: `, isData);
        setContent(isData.data);
      }
      if (isCommentData && isCommentData.data) {
        console.log(`Success POST Comment: `, isCommentData);
        setContent(isCommentData.data);
      }
    }
  }, [
    isLoading,
    isCommentLoading,
    isError,
    isCommentError,
    isData,
    isCommentData,
  ]);

  useEffect(() => {
    // !!필 요청이 완료된 후 commentUrl 초기화
    if (isCommentData) {
      console.log(`Success POST Comment: `, isCommentData);
      setContent(isCommentData.data);
      setCommentUrl(null); // 초기화하여 재요청 방지
      setComment(''); // 요청 후 입력란 비우기
    }
  }, [isCommentData]);

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
            value={isComment}
            onChange={e => setComment(e.target.value)}
          />
          <div className="qav-button-group">
            <div
              id="qav-comment-button"
              onKeyDown={() => {}}
              onClick={() => {
                console.log('click');
                postComment();
              }}
              role="button"
              tabIndex="0"
              aria-label="comment-btn"
            >
              답변 달기
            </div>
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
