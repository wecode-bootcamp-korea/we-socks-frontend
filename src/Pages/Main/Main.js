import React from "react";
import Square from "Components/MainSquare";
import Layout from "Components/Layout";
import "./main.scss";
import { Link } from "react-router-dom";
import casualImg from "assets/images/MainSqure/casual.jpg";
import kidsImg from "assets/images/MainSqure/kids.jpg";
import dressedImg from "assets/images/MainSqure/dressed.jpg";
import athletic from "assets/images/MainSqure/athletic.jpg";

const Main = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Main;
