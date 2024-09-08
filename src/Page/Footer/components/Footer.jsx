import React from 'react';
import '../css/Footer.scss';
import insta from '../img/instagram.svg';
import kakao from '../img/kakaotalk.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-contents">
        <div id="f-warp-content">
          <div className="f-content">
            <div>회사소개</div>
            <div>개인정보처리방침</div>
            <div>영상정보처리기기운영 관리방침</div>
            <div>이용약관</div>
            <div>청소년보호방침</div>
          </div>
          <div className="f-hyper-link">
            <div id="f-contact">
              <img src={insta} alt="" />
            </div>
            <div id="f-contact">
              <img src={kakao} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="f-container">
        <div id="f-warp-container">
          <div className="f-group">
            <div className="f-intro">
              <div id="f-title">네편</div>
              <div>대표이사: OOO</div>
              <div>서울특별시 OO구 OOOO로 123 (OO동)</div>
              <div>
                사업자등록번호 : 123-45-67890 / 통신판매업신고 : 9999-12345호
              </div>
              <div>개인정보보호책임자 : OOO</div>
              <div>이메일: rlska0711@naver.com</div>
              <div>Copyright ⓒ OOO DESIGNER ALL RIGHTS RESERVED.</div>
            </div>
            <div className="f-contact">
              <div id="f-title">1234-5678</div>
              <div>오전 9시 ~ 오후 6시(토요일, 공휴일 휴무)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
