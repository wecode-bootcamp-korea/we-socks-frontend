import React from "react";
import "./custom.scss";
import Header from "Components/Header";
import Button from "Components/Button";
import * as sockImage from "./socksImages";

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
  "#00A591",
  "#006E6D",
  "#3F69AA",
  "#766F57",
  "#2E4A62",
  "#485167"
];

const viewArr = ["front", "back", "side"];
const typeArr = ["noShow", "ankle", "mid", "high"];

class Custom extends React.Component {
  constructor() {
    super();

    this.state = {
      color: "none",
      type: "noShow",
      view: "front"
    };
  }

  changeDesign = (e, value) => {
    this.setState({
      [e.target.name]: value
    });
  };

  render() {
    const { color, view, type } = this.state;
    return (
      <>
        <Header />
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
            </div>
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
                <div className="patternPicker"></div>
              </div>
              <div className="chooseImage">
                <p>Choose Image</p>
                <div className="imagePicker"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Custom;
