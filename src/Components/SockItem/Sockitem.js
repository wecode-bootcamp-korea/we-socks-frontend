import React from "react";
import { Link } from "react-router-dom";
import "./sockitem.scss";

const SockItem = ({ image }) => {
  return (
    <Link to="/custom">
      <div className="item">
        <div
          className="itemImage"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="customLabel">
          <span className="miniLogo"></span>
          <span className="miniLabel">Customize</span>
        </div>
      </div>
    </Link>
  );
};

export default SockItem;
