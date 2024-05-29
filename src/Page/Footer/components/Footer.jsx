import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerTopStyle}>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <a href="#company" style={navLinkStyle}>
                회사소개
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="#privacy" style={navLinkStyle}>
                개인정보처리방침
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="#protection" style={navLinkStyle}>
                영상정보처리기기운영 관리방침
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="#terms" style={navLinkStyle}>
                이용약관
              </a>
            </li>
            <li style={navItemStyle}>
              <a href="#youth" style={navLinkStyle}>
                청소년보호방침
              </a>
            </li>
            <li style={iconItemStyle}>
              <a href="https://www.instagram.com">
                <img
                  src="instagramIcon.png"
                  alt="Instagram"
                  style={iconStyle}
                />
              </a>
            </li>
            <li style={iconItemStyle}>
              <a href="https://www.example.com">
                <img src="commentIcon.png" alt="Comment" style={iconStyle} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div style={footerContentStyle}>
        <div style={companyInfoStyle}>
          <h2>네편</h2>
          <p>대표이사: OOO</p>
          <p>서울특별시 OOO 구 OOO 로 123 (OOO동)</p>
          <p>사업자등록번호: 123-45-67890 | 통신판매인신고: 9999-12345호</p>
          <p>개인정보보호책임자: OOO</p>
          <p>이메일: test@naver.com</p>
          <p>Copyright © OOO DESIGNER ALL RIGHTS RESERVED.</p>
        </div>
        <div style={contactInfoStyle}>
          <p>
            <strong>1234-5678</strong>
          </p>
          <p>오전 9시 - 오후 6시(토요일, 공휴일 휴무)</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  borderTop: '1px solid #dee2e6',
};

const footerTopStyle = {
  borderBottom: '1px solid #dee2e6',
  paddingBottom: '10px',
  marginBottom: '10px',
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
};

const navItemStyle = {
  margin: '0 10px',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#000',
};

const iconItemStyle = {
  margin: '0 10px',
};

const iconStyle = {
  width: '20px',
  height: '20px',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
};

const companyInfoStyle = {
  textAlign: 'left',
};

const contactInfoStyle = {
  textAlign: 'right',
};

export default Footer;
