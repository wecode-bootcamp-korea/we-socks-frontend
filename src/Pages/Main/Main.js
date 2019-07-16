import React from "react";
import Square from "Components/MainSquare";
import Header from "Components/Header";
import "./main.scss";
import { Link } from "react-router-dom";
import casualImg from "assets/images/casual.jpg";
import kidsImg from "assets/images/kids.jpg";
import dressedImg from "assets/images/dressed.jpg";
import athletic from "assets/images/athletic.jpg";

const Main = props => {
  return (
    <>
      <Header />
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
            Discover our wide selection of{" "}
            <b>
              <span>Limited Edition</span>
            </b>{" "}
            styles,
            <b>
              <span>Dressed</span>
            </b>
            ,
            <b>
              <span>Athletic</span>
            </b>
            ,
            <b>
              <span>underwear</span>
            </b>
            for men and women, gifts and Hysteria for women.
          </p>
        </div>
        <div className="footerItem">
          <h2>
            <img
              src="https://www.happysocks.com/media/wysiwyg/Generic/icon-usp/heart_1x.png"
              sizes="35px"
              height="35"
              alt="Smiley icon"
            />
          </h2>
          <h2>THE PERFECT GIFT</h2>
          <span>
            Classic
            <b>
              <span>dotted</span>
            </b>{" "}
            and{" "}
            <b>
              <span>striped</span>
            </b>{" "}
            socks for dad, birthday gifts and Christmas presents in fun colors
            and patterns, there’s a style for every occasion.{" "}
          </span>
        </div>
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
            Discover our wide selection of{" "}
            <b>
              <span>Limited Edition</span>
            </b>{" "}
            styles,
            <b>
              <span>Dressed</span>
            </b>
            ,
            <b>
              <span>Athletic</span>
            </b>
            ,
            <b>
              <span>underwear</span>
            </b>
            for men and women, gifts and Hysteria for women.
          </p>
        </div>
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
            Discover our wide selection of{" "}
            <b>
              <span>Limited Edition</span>
            </b>{" "}
            styles,
            <b>
              <span>Dressed</span>
            </b>
            ,
            <b>
              <span>Athletic</span>
            </b>
            ,
            <b>
              <span>underwear</span>
            </b>
            for men and women, gifts and Hysteria for women.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
