import React from "react";
import "./sockitem.scss";

const SockItem = ({ image }) => {
  return (
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
  );
};

export default SockItem;
