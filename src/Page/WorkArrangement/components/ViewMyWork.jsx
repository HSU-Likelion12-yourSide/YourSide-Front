import React, { useEffect, useState } from 'react';
import '../css/ViewMyWork.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import ViewMyWorkOption from './ViewMyWorkOption.component';
import OptionsData from '../data/viewMyWork.data';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';

const Option = ViewMyWorkOption;

const ViewMyWork = () => {
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
  // post
  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    '',
    'POST',
    isRequestData,
  );
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
  };

  // 검사하기 버튼 클릭 시 실행할 함수
  const handleCalculate = () => {
    const requiredFields = Object.keys(isRequestData);
    const isAllFieldsFilled = requiredFields.every(
      field => isRequestData[field] !== '',
    );

    if (isAllFieldsFilled) {
      const requestData = transformRequestData(isRequestData); // 데이터 변환
      console.log('Transformed Request Data:', requestData);

      setUrl('worksheet/calculate'); // POST 요청 URL 설정
      setRequestData(requestData); // 변환된 데이터로 요청 설정

      return true;
    }
    // eslint-disable-next-line no-alert
    alert('모든 필드를 입력해 주세요.');
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
      navigate('/viewMyWorkResult', { state: isData });
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData, navigate]);

  return (
    <div className="view-my-work">
      <Header />
      <div className="vmw-container">
        <div id="vmw-title">내 근로 살펴보기</div>
        {
          // data를 가져오는 부분을 useEffect로 await으로 가져와서 map을 사용할 수 있게 한다. 이로 예외처리 try, catch를 사용한다. -> useEffect와 async await 사용이 불필요함. 이유는 내부적 데이터를 사용하기 때문에 동기적으롤 동작해야 코드의 최적화와 가독성이 높다. 비동지일 경우 위와 같은 방식으로 동작하게 해야하지만 지금의 경우 불필요.
          OptionsData.map(el => (
            <Option
              key={el.id}
              option={el.option}
              display={el.display}
              description={el.description || ''}
              type={el.type}
              placeholder={el.placeholder || ''}
              unit={el.unit || ''}
              warning={el.warning}
              name={el.id}
              onChange={handleInputChange}
            />
          ))
        }
      </div>
      <button
        className="vmw-result"
        onClick={() => {
          const isValid = handleCalculate();
          if (isValid) {
            // POST 요청 시작
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
