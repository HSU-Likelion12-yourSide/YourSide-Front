import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/ViewMyWorkResult.scss';
import navigateController from '../../../Global/function/navigateController';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import VmwrResult from '../../../Global/components/VmwrResult.component';
import useFetchAPI from '../../../Global/API/Hooks/useFetchAPI';
import useGlobalState from '../../../Global/Hooks/useGlobalState';

const Result = VmwrResult;

const ViewMyWorkResult = () => {
  const navigate = useNavigate();
  const { workSheetId } = useParams();
  const { isData, isLoading, isError, setUrl } = useFetchAPI(
    `/worksheet/${workSheetId}`,
    'GET',
  );
  const [content, setContent] = useState(''); // 렌더링할 content 상태 관리

  const { isModalState, setModalState, isModalType, setModalType } =
    useGlobalState();

  useEffect(() => {
    if (isLoading) {
      console.log('..is Loading');
      setContent('Loading...');
    } else if (isError) {
      console.log(`is Error : ${isError}`);
      setContent(`Error: ${isError}`);
    } else if (isData) {
      console.log(`Success Contact : ${isData}`);
      setContent(<Result resultId={workSheetId} />);
    } else {
      setContent(null);
    }
  }, [isLoading, isError, isData]);

  return (
    <div className="ViewMyWorkResult">
      <Header />
      <div className="vmwr-title">
        {isData && isData.data && isData.data.nickname
          ? `${isData.data.nickname}님의 근로 결과지`
          : '내 근로 결과지'}
      </div>
      <div className="vmwr-result">{content}</div>
      <div id="vmwr-group">
        <div
          className="vmwr-button"
          onKeyDown={() => {
            console.log('test');
          }}
          role="button"
          tabIndex="0"
          onClick={() => {
            navigateController(navigate, '/WorkArrangement/List');
          }}
        >
          목록
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewMyWorkResult;
