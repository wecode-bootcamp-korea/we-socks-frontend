import React from "react";
import "./square.scss";

const Square = ({ image_url, title }) => {
  return (
    <div
      className="mainSquare"
      style={{ backgroundImage: `url(${image_url})` }}
    >
      <div className="innerBox">
        <h2 className="squareTitle">{title}</h2>
        <span className="moreSpan">SHOP NOW</span>
      </div>
    </div>
  );
};

export default Square;
