import React from "react";
import "./header.scss";
import Button from "Components/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Header className="pageHeader">
      <span className="myAccountWrap">
        <span className="myAccountIcon"></span>
        <Link to="/mypage">
          <Button className="myAccountBtn" text="My Account" />
        </Link>
      </span>
      <span className="logo"></span>
      <span className="cartWrap">
        <span className="cartIcon"></span>
        <Button className="cartBtn" text="Cart" />
      </span>
    </Header>
  );
};

export default Header;
