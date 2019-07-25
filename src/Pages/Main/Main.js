import React from "react";
import Square from "Components/MainSquare";
import SquareTwo from "Components/MainSquare2";
import Layout from "Components/Layout";
import "./main.scss";
import { Link } from "react-router-dom";
const s3Url =
  "https://wesocks-design-management.s3.ap-northeast-2.amazonaws.com";

const casualImg = `${s3Url}/casual.jpg`;
const kidsImg = `${s3Url}/kids.jpg`;
const dressedImg = `${s3Url}/dressed.jpg`;
const athletic = `${s3Url}/athletic.jpg`;

const Main = () => {
  return (
    <Layout>
      <div className="mainItems">
        <Link
          className="squareBox"
          to={{
            pathname: "/itemlist",
            query: { kind: "kids" }
          }}
          style={{ textDecoration: "none" }}
        >
          <Square image_url={kidsImg} title="KIDS" />
        </Link>
        <Link
          className="squareBox"
          to={{
            pathname: "/itemlist",
            query: { kind: "casual" }
          }}
          style={{ textDecoration: "none" }}
        >
          <Square image_url={casualImg} title="CASUAL" />
        </Link>
        <Link
          className="squareBox"
          to={{
            pathname: "/itemlist",
            query: { kind: "dressed" }
          }}
          style={{ textDecoration: "none" }}
        >
          <Square image_url={dressedImg} title="DRESSED" />
        </Link>
        <Link
          className="squareBox"
          to={{
            pathname: "/itemlist",
            query: { kind: "athletic" }
          }}
          style={{ textDecoration: "none" }}
        >
          <Square image_url={athletic} title="ATHLETIC" />
        </Link>
      </div>
      <div className="mainFooter">
        <SquareTwo
          imgSrc="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/smiley_2x.png"
          alt="Smiley icon"
          title="SO MUCH MORE THAN SOCKS"
        />
        <SquareTwo
          imgSrc="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/card_2x.png"
          alt="Card icon"
          title="THE PERFECT GIFT"
        />
        <SquareTwo
          imgSrc="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/truck_2x.png"
          alt="Truck icon"
          title="SO MUCH MORE THAN SOCKS"
        />
        <SquareTwo
          imgSrc="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/smiley_2x.png"
          alt="Smiley icon"
          title="SO MUCH MORE THAN SOCKS"
        />
      </div>
    </Layout>
  );
};

export default Main;
