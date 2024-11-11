import React, { useEffect, useState } from 'react';
import '../../css/ModalType/Modal.result.scss';
import PropTypes from 'prop-types';
import useGlobalState from '../../Hooks/useGlobalState';
import useFetchAPI from '../../API/Hooks/useFetchAPI';

const ModalResult = ({ postData, postContent }) => {
  console.log('모달 데이터: ', postData);
  // user_id값 임시 지정
  const userID = 2;
  const { setModalType, setWorkSheetId } = useGlobalState();
  const [isContent, setContent] = useState();
  const [isRequestData, setRequestData] = useState({
    title: '',
  });
  // post
  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    '',
    'POST',
    isRequestData,
  );
  // POST할 이름 변경
  const transformRequestData = () => {
    /* eslint-disable camelcase */
    return {
      title: `${isRequestData.title}`,
      content: postContent,
      total_pay: postData.total_pay,
      extra_pay: postData.extra_pay,
      week_pay: postData.week_pay,
      night_pay: postData.night_pay,
      overtime_pay: postData.overtime_pay,
      holiday_pay: postData.holiday_pay,
      user_id: userID,
    };
    /* eslint-enable camelcase */
  };

  // 저장하기 버튼 클릭 시 실행할 함수
  const handleSave = () => {
    const requiredFields = Object.keys(isRequestData);
    const isAllFieldsFilled = requiredFields.every(
      field => isRequestData[field] !== '',
    );

    if (isAllFieldsFilled) {
      const requestData = transformRequestData(
        isRequestData,
        postData,
        postContent,
      ); // 데이터 변환
      console.log('Transformed Request Data:', requestData);
      setUrl('worksheet'); // POST 요청 URL 설정
      setRequestData(requestData); // 변환된 데이터로 요청 설정
      return true;
    }
    // eslint-disable-next-line no-alert
    alert('결과지 이름을 입력해주세요.');
    return false;
  };

  // 입력 필드 채워지는지 콘솔에서 확인
  useEffect(() => {
    console.log('Updated isRequestData:', isRequestData);
  }, [isRequestData]);

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
      // 요청 성공시 모달 변경
      setWorkSheetId(isData.data.worksheet_id);
      setModalType('ResultMessage');
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  return (
    <div className="modal-result">
      <div id="modal-title">결과지 이름</div>
      <div className="modal-content">
        <input
          placeholder="이름(ex. ㅁㅁ 카페)"
          type="text"
          value={isRequestData.title}
          onChange={e =>
            setRequestData({ ...isRequestData, title: e.target.value })
          }
        />
        <div id="modal-input-sub">근로 결과지</div>
      </div>
      <div
        id="modal-save"
        onKeyDown={() => {
          console.log('test');
        }} // 키보드 지원
        role="button"
        tabIndex="0"
        onClick={() => {
          handleSave();
        }}
      >
        저장하기
      </div>
    </div>
  );
};

ModalResult.propTypes = {
  postData: PropTypes.shape({
    /* eslint-disable camelcase */
    total_pay: PropTypes.number,
    extra_pay: PropTypes.bool,
    week_pay: PropTypes.bool,
    night_pay: PropTypes.bool,
    overtime_pay: PropTypes.bool,
    holiday_pay: PropTypes.bool,
    /* eslint-enable camelcase */
  }).isRequired,
  postContent: PropTypes.string.isRequired,
};

export default ModalResult;
