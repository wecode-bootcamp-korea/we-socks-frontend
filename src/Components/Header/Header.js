import React from "react";
import "./header.scss";
import Button from "Components/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="pageHeader">
      <div className="headerTop">
        <div className="myAccountWrap">
          <div className="myAccountIcon"></div>
          <Link to="/mypage">
            <Button className="myAccountBtn" text="My Account" />
          </Link>
        </div>
        <span className="logo"></span>
        <div className="cartWrap">
          <div className="cartIcon"></div>
          <Button className="cartBtn" text="Cart" />
        </div>
      </div>
      <div className="headerBottom">
        <div className="kids">KIDS</div>
        <div className="casual">CASUAL</div>
        <div className="dressed">DRESSED</div>
        <div className="athletic">ATHLETIC</div>
      </div>
    </header>
  );
};

export default Header;
