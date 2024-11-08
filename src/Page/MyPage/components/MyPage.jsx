import React from 'react';
import '../css/MyPage.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';

const MyPage = () => {
  return (
    <div>
      <Header />
      <div>
        <div>개인정보 프로필</div>
        <div>스위치 버튼 Header와 같은 스타일 참조</div>
        <div>contents 변경 컴포넌트</div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
