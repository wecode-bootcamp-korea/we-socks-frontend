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
        <div className="footerItem">
          <h2>
            <img
              src="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/smiley_1x.png"
              sizes="35px"
              height="35"
              alt="Smiley icon"
            />
          </h2>
          <h2>SO MUCH MORE THAN SOCKS</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            quibusdam optio laborum minus debitis libero non
          </p>
        </div>
        <div className="footerItem">
          <h2>
            <img
              src="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/card_1x.png"
              sizes="35px"
              height="35"
              alt="Smiley icon"
            />
          </h2>
          <h2>THE PERFECT GIFT</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            quibusdam optio laborum minus debitis libero non
          </p>
        </div>
        <div className="footerItem">
          <h2>
            <img
              src="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/card_1x.png"
              sizes="35px"
              height="35"
              alt="Smiley icon"
            />
          </h2>
          <h2>SO MUCH MORE THAN SOCKS</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            quibusdam optio laborum minus debitis libero non
          </p>
        </div>
        <div className="footerItem">
          <h2>
            <img
              src="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/truck_1x.png"
              sizes="35px"
              height="35"
              alt="Smiley icon"
            />
          </h2>
          <h2>SO MUCH MORE THAN SOCKS</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            quibusdam optio laborum minus debitis libero non
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
