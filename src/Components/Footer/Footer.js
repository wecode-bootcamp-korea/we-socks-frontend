/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftBox">
        <Link href="/">
          <img src="" alt="" />
        </Link>
      </div>
      <div className="rightBox">
        <div className="textBox">
          <span>
            상호명: WeSocks | 대표: 그레이스풀레인 &nbsp;&nbsp;| 관리자: WeSocks
            Team
          </span>{" "}
          <br />
          <span></span> 위코드등록번호: 20190610 | 모든 건 내 마음대로 <br />
          <span></span> 주소: 서울특별시 강남구 테헤란로 427, 위워크타워
           | 전화: 010-1234-5678 (영업일 10:00~18:00)
          <br />
          <br />
          <span>© 2019 WeSocks, All rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
