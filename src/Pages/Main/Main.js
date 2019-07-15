import React from "react";
import Square from "../../Components/MainSquare";
import "./main.scss";
import casualImg from "../../assets/images/casual.jpg";
import kidsImg from "../../assets/images/kids.jpg";
import dressedImg from "../../assets/images/dressed.jpg";
import athletic from "../../assets/images/athletic2.jpg";

const Main = () => {
  return (
    <>
      <div className="mainLogo"></div>
      <div className="mainItems">
        <Square image_url={casualImg} title="SOCKS" />
        <Square image_url={kidsImg} title="KIDS" />
        <Square image_url={dressedImg} title="DRESSED" />
        <Square image_url={athletic} title="ATHLETIC" />
      </div>
    </>
  );
};

export default Main;
