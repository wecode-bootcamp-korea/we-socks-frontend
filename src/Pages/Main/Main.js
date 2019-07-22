import React from "react";
import Square from "Components/MainSquare";
import SquareTwo from "Components/MainSquare2";
import "./main.scss";
import { Link } from "react-router-dom";
import casualImg from "assets/images/MainSqure/casual.jpg";
import kidsImg from "assets/images/MainSqure/kids.jpg";
import dressedImg from "assets/images/MainSqure/dressed.jpg";
import athletic from "assets/images/MainSqure/athletic.jpg";

const Main = () => {
  return (
    <>
      <div className="mainItems">
        <Link
          to={{
            pathname: "/itemlist",
            query: { kind: "kids" }
          }}
          style={{ textDecoration: "none" }}
        >
          <Square image_url={kidsImg} title="KIDS" />
        </Link>
        <Link
          to={{
            pathname: "/itemlist",
            query: { kind: "casual" }
          }}
          style={{ textDecoration: "none" }}
        >
          <Square image_url={casualImg} title="CASUAL" />
        </Link>
        <Link
          to={{
            pathname: "/itemlist",
            query: { kind: "dressed" }
          }}
          style={{ textDecoration: "none" }}
        >
          <Square image_url={dressedImg} title="DRESSED" />
        </Link>
        <Link
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
          imgSrc="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/smiley_1x.png"
          alt="Smiley icon"
          title="SO MUCH MORE THAN SOCKS"
        />
        <SquareTwo
          imgSrc="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/card_1x.png"
          alt="Card icon"
          title="THE PERFECT GIFT"
        />
        <SquareTwo
          imgSrc="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/truck_1x.png"
          alt="Truck icon"
          title="SO MUCH MORE THAN SOCKS"
        />
        <SquareTwo
          imgSrc="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/smiley_1x.png"
          alt="Smiley icon"
          title="SO MUCH MORE THAN SOCKS"
        />
      </div>
    </>
  );
};

export default Main;
