import React from "react";
import "./header.scss";
import Button from "Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSocks, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="pageHeader">
      <span className="myAccountWrap">
        <span className="myAccountIcon">
          <FontAwesomeIcon icon={faSocks} size="2x" />
        </span>
        <Link to="/mypage">
          <Button className="myAccountBtn" text="My Account" />
        </Link>
      </span>
      <span className="logo"></span>
      <span className="cartWrap">
        <span className="cartIcon">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </span>
        <Button className="cartBtn" text="Cart" />
      </span>
    </div>
  );
};

export default Header;
