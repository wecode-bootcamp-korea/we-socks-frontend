import React from "react";
import "./custom.scss";
import Header from "Components/Header";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import * as sockImage from "./socksImages";

class Custom extends React.Component {
  constructor() {
    super();

    this.state = {
      pickedColor: "none",
      chosenType: "noShow",
      chosenView: "frontView"
    };

    this.matching = {
      "noShow frontView": [sockImage.noShowFront, sockImage.noShowFrontMasking],
      "noShow backView": [sockImage.noShowBack, sockImage.noShowBackMasking],
      "noShow sideView": [sockImage.noShowSide, sockImage.noShowSideMasking],
      "ankle frontView": [sockImage.ankleFront, sockImage.ankleFrontMasking],
      "ankle backView": [sockImage.ankleBack, sockImage.ankleBackMasking],
      "ankle sideView": [sockImage.ankleSide, sockImage.ankleSideMasking],
      "mid frontView": [sockImage.midFront, sockImage.midFrontMasking],
      "mid backView": [sockImage.midBack, sockImage.midBackMasking],
      "mid sideView": [sockImage.midSide, sockImage.midSideMasking],
      "high frontView": [sockImage.highFront, sockImage.highFrontMasking],
      "high backView": [sockImage.highBack, sockImage.highBackMasking],
      "high sideView": [sockImage.highSide, sockImage.highSideMasking]
    };

    this.colorArr = [
      "#7F4145",
      "#BD3D3A",
      "#3F69AA",
      "#D5AE41",
      "#766F57",
      "#E47A2E",
      "#BE9EC9",
      "#F1EA7F",
      "#006E6D",
      "#485167",
      "#EAE6DA",
      "#D1B894",
      "#BCBCBE",
      "#95DEE3",
      "#ECDB54",
      "#E94B3C",
      "#6F9FD8",
      "#944743",
      "#DBB1CD",
      "#EC9787",
      "#00A591",
      "#6C4F3D",
      "#6B5B95",
      "#EABEDB",
      "#BC70A4",
      "#BFD641",
      "#2E4A62",
      "#B4B7BA",
      "#C0AB8E",
      "#F0EDE5"
    ];
  }

  changeSocksColor(e) {
    this.setState({
      pickedColor: e.target.name
    });
  }

  changeView(e) {
    this.setState({
      chosenView: e.target.name
    });
  }

  changeType(e) {
    this.setState({
      chosenType: e.target.name
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="customRoot">
          <div className="chooseTypesWrap">
            Type:
            <Button
              className={`noShow ${
                this.state.chosenType === "noShow" ? "clicked" : ""
              }`}
              name="noShow"
              text="No-Show"
              onClick={e => this.changeType(e)}
            />
            <Button
              className={`ankle ${
                this.state.chosenType === "ankle" ? "clicked" : ""
              }`}
              name="ankle"
              text="Ankle"
              onClick={e => this.changeType(e)}
            />
            <Button
              className={`mid ${
                this.state.chosenType === "mid" ? "clicked" : ""
              }`}
              name="mid"
              text="Mid"
              onClick={e => this.changeType(e)}
            />
            <Button
              className={`high ${
                this.state.chosenType === "high" ? "clicked" : ""
              }`}
              name="high"
              text="High"
              onClick={e => this.changeType(e)}
            />
          </div>
          <div className="chooseViewsWrap">
            View:
            <Button
              className={`frontView ${
                this.state.chosenView === "frontView" ? "clicked" : ""
              }`}
              name="frontView"
              text="Front"
              onClick={e => this.changeView(e)}
            />
            <Button
              className={`backView ${
                this.state.chosenView === "backView" ? "clicked" : ""
              }`}
              name="backView"
              text="Back"
              onClick={e => this.changeView(e)}
            />
            <Button
              className={`sideView ${
                this.state.chosenView === "sideView" ? "clicked" : ""
              }`}
              name="sideView"
              text="Sides"
              onClick={e => this.changeView(e)}
            />
          </div>
          <div className="customCenter">
            <div className="socksContainer">
              <img
                className="sockImage imageNotMasked"
                src={
                  this.matching[
                    `${this.state.chosenType} ${this.state.chosenView}`
                  ][0]
                }
                alt={`${this.state.chosenType} ${this.state.chosenView}`}
              />
              <img
                className="sockImage imageMasked"
                style={{ backgroundColor: this.state.pickedColor }}
                src={
                  this.matching[
                    `${this.state.chosenType} ${this.state.chosenView}`
                  ][1]
                }
                alt={`${this.state.chosenType} ${this.state.chosenView}`}
              />
            </div>
            <div className="chooseWrap">
              <div className="chooseColor">
                <p>Choose Color</p>
                <div className="colorPickerContainer">
                  {/* <InputBox
                    type="color"
                    className="colorPicker"
                    handleChange={e => this.changeSocksColor(e)}
                  /> */}
                  {this.colorArr.map((el, idx) => (
                    <Button
                      className="colorContainer"
                      name={el}
                      style={{ backgroundColor: el }}
                      key={`color-${idx}`}
                      onClick={e => this.changeSocksColor(e)}
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
