import React, { useEffect, useState } from 'react';
import '../css/ViewMyWork.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import ViewMyWorkOption from './ViewMyWorkOption.component';
import OptionsData from '../data/viewMyWork.data';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import useGlobalState from '../../../Global/Hooks/useGlobalState';

const Option = ViewMyWorkOption;

const ViewMyWork = () => {
  const { isUser, isUserName } = useGlobalState();
  const basePath = isUser ? `/${isUser}` : '';
  const navigate = useNavigate();
  const [isContent, setContent] = useState();
  const [isRequestData, setRequestData] = useState({
    hourPay: '',
    weekWork: '',
    overFive: '',
    overtimeWork: '',
    nightWork: '',
    holidayWork: '',
    tax: '',
  });
  const [isButtonActive, setButtonActive] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [requestData, setTransformedRequestData] = useState(null);
  // post
  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    '',
    'POST',
    requestData,
  );

  // 숫자인지 여부를 확인하는 함수
  const isNumeric = value => {
    return !Number.isNaN(Number(value)) && value.trim() !== '';
  };

  // POST할 이름 변경
  const transformRequestData = data => {
    /* eslint-disable camelcase */
    return {
      hour_pay: data.hourPay,
      week_work: data.weekWork,
      over_five: data.overFive === 'yes',
      overtime_work: data.overtimeWork,
      night_work: data.nightWork,
      holiday_work: data.holidayWork,
      major_insurance: data.tax === 'majorInsurance',
      income_tax: data.tax === 'incomeTax',
    };
    /* eslint-enable camelcase */
  };

  // 입력 필드 변경 함수
  const handleInputChange = e => {
    const { name, value } = e.target;
    setRequestData(prev => ({
      ...prev,
      [name]: value, // 기존 선택은 덮어씌움
    }));

    // 입력 필드가 변경될 때마다 유효성 검사
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name]; // 오류가 해결되면 해당 필드의 오류를 제거
        return newErrors;
      });
    }
  };

  // 검사하기 버튼 클릭 시 실행할 함수
  const handleCalculate = () => {
    const requiredFields = Object.keys(isRequestData);
    const isAllFieldsFilled = requiredFields.every(
      field => isRequestData[field] !== '',
    );
    if (!isAllFieldsFilled) {
      // eslint-disable-next-line no-alert
      alert('모든 필드를 입력해 주세요.');
      return false;
    }

    const numericFields = [
      'hourPay',
      'weekWork',
      'overtimeWork',
      'nightWork',
      'holidayWork',
    ];
    const newValidationErrors = {};

    // 숫자 필드에 대해 유효성 검사 수행
    numericFields.forEach(field => {
      const valid = isNumeric(isRequestData[field]);
      if (!valid) {
        // 데이터에서 필드에 해당하는 경고 메시지를 가져오기
        const optionData = OptionsData.find(option => option.id === field);
        if (optionData) {
          newValidationErrors[field] = optionData.warning;
        }
      }
    });

    setValidationErrors(newValidationErrors);

    // 유효성 검사 실패 시
    if (Object.keys(newValidationErrors).length > 0) {
      return false;
    }

    // 데이터 변환
    const transformedData = transformRequestData(isRequestData);
    setTransformedRequestData(transformedData);
    console.log('transformedData', transformedData);

    return true;
  };

  // 변환된 데이터가 설정되었을 때 POST 요청 URL 설정
  useEffect(() => {
    if (requestData) {
      setUrl('worksheet/calculate');
    }
  }, [requestData, setUrl]);

  useEffect(() => {
    const requiredFields = Object.keys(isRequestData);
    const isAllFieldsFilled = requiredFields.every(
      field => isRequestData[field] !== '',
    );
    setButtonActive(isAllFieldsFilled);
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
      navigate(`${basePath}/viewMyWorkResult`, { state: isData });
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData, navigate]);

  return (
    <div className="view-my-work">
      <Header />
      <div className="vmw-container">
        <div id="vmw-title">내 근로 살펴보기</div>
        {OptionsData.map((el, index) => (
          <Option
            key={el.id}
            option={index === 0 ? `${isUserName}${el.option}` : el.option} // 첫 번째 항목에만 isUserName 추가
            display={el.display}
            description={el.description || ''}
            type={el.type}
            placeholder={el.placeholder || ''}
            unit={el.unit || ''}
            warning={validationErrors[el.id] || ''}
            name={el.id}
            onChange={handleInputChange}
          />
        ))}
      </div>
      <button
        className={`vmw-result ${isButtonActive ? 'active' : ''}`}
        onClick={() => {
          if (handleCalculate()) {
            console.log('POST 처리');
          }
        }}
      >
        검사하기
      </button>
      <Footer />
    </div>
  );
};

export default ViewMyWork;
