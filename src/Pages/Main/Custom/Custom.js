import React from "react";
import "./custom.scss";
import Layout from "Components/Layout";
import Button from "Components/Button";
import Span from "Components/Span";
import * as sockImage from "Components/SockItem/socksImages";
import * as patternImage from "Components/SockItem/patternImages";
import AddedToCartMessage from "Pages/MyPage/ShoppingCart/AddedToCartMessage";

const matching = {
  "noShow front": [sockImage.noShowFront, sockImage.noShowFrontMasking],
  "noShow back": [sockImage.noShowBack, sockImage.noShowBackMasking],
  "noShow side": [sockImage.noShowSide, sockImage.noShowSideMasking],
  "ankle front": [sockImage.ankleFront, sockImage.ankleFrontMasking],
  "ankle back": [sockImage.ankleBack, sockImage.ankleBackMasking],
  "ankle side": [sockImage.ankleSide, sockImage.ankleSideMasking],
  "mid front": [sockImage.midFront, sockImage.midFrontMasking],
  "mid back": [sockImage.midBack, sockImage.midBackMasking],
  "mid side": [sockImage.midSide, sockImage.midSideMasking],
  "high front": [sockImage.highFront, sockImage.highFrontMasking],
  "high back": [sockImage.highBack, sockImage.highBackMasking],
  "high side": [sockImage.highSide, sockImage.highSideMasking]
};

const colorArr = [
  "#F0EDE5",
  "#EAE6DA",
  "#F1EA7F",
  "#ECDB54",
  "#D1B894",
  "#C0AB8E",
  "#D5AE41",
  "#E47A2E",
  "#E94B3C",
  "#BD3D3A",
  "#BCBCBE",
  "#B4B7BA",
  "#EABEDB",
  "#DBB1CD",
  "#BE9EC9",
  "#BC70A4",
  "#6B5B95",
  "#944743",
  "#7F4145",
  "#6C4F3D",
  "#EC9787",
  "#BFD641",
  "#95DEE3",
  "#6F9FD8",
  "#3F69AA",
  "#00A591",
  "#006E6D",
  "#766F57",
  "#2E4A62",
  "#485167"
];

const patternArr = [
  "",
  patternImage.Argyle,
  patternImage.bear,
  patternImage.bird,
  patternImage.block,
  patternImage.color_block,
  patternImage.crown,
  patternImage.dotted,
  patternImage.flower,
  patternImage.heart,
  patternImage.raindrop,
  patternImage.stripe,
  patternImage.tree,
  patternImage.hive,
  patternImage.money,
  patternImage.tape
];

const viewArr = ["front", "back", "side"];
const typeArr = ["noShow", "ankle", "mid", "high"];

class Custom extends React.Component {
  constructor() {
    super();

    this.state = {
      color: "none",
      type: "noShow",
      view: "front",
      pattern: "",
      price: 6000,
      uploaded: "",
      priceChange: false,
      patternChosen: false,
      imageChosen: false,
      addToCartBtnClicked: true,
      addToWishListBtnClicked: false
    };
  }

  changeDesign = (e, value) => {
    this.setState({
      [e.target.getAttribute("name")]: value
    });
  };

  addToCart = e => {
    this.setState(
      {
        addToCartBtnClicked: !this.state.addToCartBtnClicked
      },
      () => {
        setTimeout(() => {
          this.setState({
            addToCartBtnClicked: !this.state.addToCartBtnClicked
          });
        }, 2000);
      }
    );
  };

  addToWishList = e => {
    this.setState(
      {
        addToWishListBtnClicked: !this.state.addToWishListBtnClicked
      },
      () => {
        setTimeout(() => {
          this.setState({
            addToWishListBtnClicked: !this.state.addToWishListBtnClicked
          });
        }, 2000);
      }
    );
  };

  render() {
    const {
      color,
      view,
      type,
      price,
      pattern,
      addToCartBtnClicked,
      addToWishListBtnClicked
    } = this.state;

    return (
      <Layout>
        <AddedToCartMessage showMessage={addToCartBtnClicked} />
        <div className="customRoot">
          <div className="chooseTypesWrap">
            Type:
            {typeArr.map((el, idx) => (
              <Button
                key={`type-${idx}`}
                className={`type ${type === el ? `${el} clicked` : ""}`}
                name="type"
                text={`${
                  el === "noShow"
                    ? "No-Show"
                    : el[0].toUpperCase() + el.slice(1, el.length)
                }`}
                onClick={e => this.changeDesign(e, el)}
              />
            ))}
          </div>
          <div className="chooseViewsWrap">
            View:
            {viewArr.map((el, idx) => (
              <Button
                key={`view-${idx}`}
                className={`view ${view === el ? `${el} clicked` : ""}`}
                name="view"
                text={el[0].toUpperCase() + el.slice(1, el.length)}
                onClick={e => this.changeDesign(e, el)}
              />
            ))}
          </div>
          <div className="customCenter">
            <div className="socksContainer">
              <img
                className="sockImage imageNotMasked"
                src={matching[`${type} ${view}`][0]}
                alt={`${type} ${view}`}
              />
              <img
                className="sockImage imageMasked"
                style={{ backgroundColor: color }}
                src={matching[`${type} ${view}`][1]}
                alt={`${type} ${view}`}
              />
              <img
                className="sockImage patternMasked"
                style={{ backgroundImage: `url(${patternArr[pattern]})` }}
                src={matching[`${type} ${view}`][1]}
                alt={`${type} ${view}`}
              />
            </div>
            <div className="rightSideWrap">
              <div className="chooseWrap">
                <div className="chooseColor">
                  <p>Choose Color</p>
                  <div className="colorPickerContainer">
                    {colorArr.map((el, idx) => (
                      <Button
                        className="color colorContainer"
                        name="color"
                        style={{ backgroundColor: el }}
                        key={`color-${idx}`}
                        onClick={e => this.changeDesign(e, el)}
                      />
                    ))}
                  </div>
                </div>
                <div className="choosePattern">
                  <p>Choose Pattern</p>
                  <div className="patternPickerContainer">
                    {patternArr.map((image, idx) => {
                      return (
                        <Span
                          style={{ backgroundImage: `url(${image})` }}
                          name="pattern"
                          key={`pattern-${idx}`}
                          onClick={e => this.changeDesign(e, idx)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="chooseImage">
                  <p>Choose Image</p>
                  <div className="imagePicker"></div>
                </div>
                <div className="orderWrap">
                  <div className="priceEstimation">가격: {price}</div>
                  <Button
                    className="addToCartBtn"
                    name="addToCartBtn"
                    text="장바구니 추가"
                    onClick={e => this.addToCart(e)}
                  />
                  <Button
                    className="addToWishListBtn"
                    name="addToWishListBtn"
                    text="위시리스트 추가"
                    onClick={e => this.addToWishList(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          {addToWishListBtnClicked && (
            <div className="messageAddedToWishList">
              해당 상품이 Wish List에 추가되었습니다
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

export default Custom;
