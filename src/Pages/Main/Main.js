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

const ItemArr = [
  { title: "KIDS", img: kidsImg },
  { title: "CASUAL", img: casualImg },
  { title: "DRESSED", img: dressedImg },
  { title: "ATHLETIC", img: athletic }
];

const Main = () => {
  return (
    <Layout>
      <div className="mainItems">
        {ItemArr.map((el, idx) => {
          return (
            <Link
              key={idx}
              className="squareBox"
              to="/itemlist"
              style={{ textDecoration: "none" }}
            >
              <Square image_url={el.img} title={el.title} />
            </Link>
          );
        })}
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
