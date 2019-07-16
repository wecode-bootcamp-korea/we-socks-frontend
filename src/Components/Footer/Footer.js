/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="innerBox">
        <div className="textBox">
          <span>
            상호명 : WeSocks <span style={{ margin: "0 10px" }}>|</span>
            대표: 그레이스풀레인
            <span style={{ margin: "0 8px" }}>|</span>관리자: WeSocks Team
          </span>
          <br />
          <span>
            위코드등록번호: 20190610
            <span style={{ margin: "0 8px" }}>|</span>
            We Love Socks! ♡
          </span>
          <br />
          <span>주소: 서울특별시 강남구 테헤란로 427, 위워크타워</span>
          <span style={{ margin: "0 8px" }}>|</span>
          <span>전화: 010-1234-5678 (영업일 10:00~18:00)</span>
          <br />
          <br />
          <span>© 2019 WeSocks, All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
