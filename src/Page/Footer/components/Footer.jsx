import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';
import instagram from '../img/instagram.svg';
import kakaotalk from '../img/kakaotalk.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <nav>
          <ul
            className="nav-list"
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div className="nav-item-container">
              <li className="nav-item">
                <a href="#company" className="nav-link">
                  회사소개
                </a>
              </li>
              <li className="nav-item">
                <a href="#privacy" className="nav-link">
                  개인정보처리방침
                </a>
              </li>
              <li className="nav-item">
                <a href="#protection" className="nav-link">
                  영상정보처리기기운영 관리방침
                </a>
              </li>
              <li className="nav-item">
                <a href="#terms" className="nav-link">
                  이용약관
                </a>
              </li>
              <li className="nav-item">
                <a href="#youth" className="nav-link">
                  청소년보호방침
                </a>
              </li>
            </div>
            <div>
              <li className="icon-item">
                <Link to="http://www.instagram.com">
                  <img src={instagram} alt="" className="icon" />
                </Link>
              </li>
              <li className="icon-item">
                <Link to="https://www.kakaotalk.com">
                  <img src={kakaotalk} alt="" className="icon" />
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <div className="footer-content">
        <div className="company-info">
          <h2>네편</h2>
          <p>대표이사: OOO</p>
          <p>서울특별시 OOO 구 OOO 로 123 (OOO동)</p>
          <p>사업자등록번호: 123-45-67890 | 통신판매인신고: 9999-12345호</p>
          <p>개인정보보호책임자: OOO</p>
          <p>이메일: test@naver.com</p>
          <p>Copyright © OOO DESIGNER ALL RIGHTS RESERVED.</p>
        </div>
        <div className="contact-info">
          <p>
            <strong>1234-5678</strong>
          </p>
          <p>오전 9시 - 오후 6시(토요일, 공휴일 휴무)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
