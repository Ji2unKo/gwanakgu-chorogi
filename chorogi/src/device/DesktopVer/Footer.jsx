import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return(
    <footer>
      <div className="wrapper">
        <img src="/images/logo_white.png" alt="" />
        <div className="footer-bar"></div>
        <p>
            환경을 지키기 위한 지도,<br/>관악구 시민을 위한 환경 지도 서비스 입니다.
        </p>
      </div>
      <ul className="footer-list">
          <li>개인정보 취급 방침 / (08720) 서울특별시 관악구 관악로 145(봉천동)</li>
          <li>문의 : 지도 문의 (hanna0115@naver.com) | 대표 전화 : 02-879-5000(120다산콜센터로 연결)</li>
          <li>copyright ㉿ 2023. Seoul Metropolitan Govemment all rights reserved </li>
        </ul>
    </footer>
  );
};

export default Footer;