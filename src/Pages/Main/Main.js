import React from "react";
import Square from "Components/MainSquare";
import Header from "Components/Header";
import "./main.scss";
import { Link } from "react-router-dom";
import casualImg from "assets/images/casual.jpg";
import kidsImg from "assets/images/kids.jpg";
import dressedImg from "assets/images/dressed.jpg";
import athletic from "assets/images/athletic.jpg";

const Main = () => {
  return (
    <>
      <Header />
      <div className="mainItems">
        <Link
          to={{
            pathname: "/itemlist",
            query: { kind: "kids" }
          }}
          className="move-btn"
          style={{ textDecoration: "none" }}
        >
          <Square image_url={kidsImg} title="KIDS" />
        </Link>
        <Link
          to={{
            pathname: "/itemlist",
            query: { kind: "casual" }
          }}
          className="move-btn"
          style={{ textDecoration: "none" }}
        >
          <Square image_url={casualImg} title="CASUAL" />
        </Link>
        <Link
          to={{
            pathname: "/itemlist",
            query: { kind: "dressed" }
          }}
          className="move-btn"
          style={{ textDecoration: "none" }}
        >
          <Square image_url={dressedImg} title="DRESSED" />
        </Link>
        <Link
          to={{
            pathname: "/itemlist",
            query: { kind: "athletic" }
          }}
          className="move-btn"
          style={{ textDecoration: "none" }}
        >
          <Square image_url={athletic} title="ATHLETIC" />
        </Link>
      </div>
    </>
  );
};

export default Main;
