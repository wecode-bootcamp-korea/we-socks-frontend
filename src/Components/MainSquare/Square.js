import React from "react";
import Button from "../Button";
import "./square.scss";

const Square = ({ image_url, title }) => {
  return (
    <div
      className="mainSquare"
      style={{ backgroundImage: `url(${image_url})` }}
    >
      <div className="innerBox">
        <h2 className="squareTitle">{title}</h2>
        <Button className="moreBtn" text="SHOP NOW" />
      </div>
    </div>
  );
};

export default Square;
