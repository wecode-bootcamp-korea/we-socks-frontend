import React from "react";

import { Link } from "react-router-dom";
import "./sockPreview.scss";

import * as sockImage from "Components/SockItem/socksImages";
import * as patternImage from "Components/SockItem/patternImages";
import * as uploadedImage from "Components/SockItem/uploadedImages";

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

const typeArr = ["noShow", "ankle", "mid", "high"];
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

class SockPreview extends React.Component {
  state = {
    isHover: false,
    isPreview: false,
    color: "none",
    type: "noShow",
    view: "side",
    pattern: ""
  };

  handleHover = flag => {
    this.setState({
      isHover: flag
    });

    if (this.state.isPreview) {
      this.setState({
        isPreview: flag
      });
    }
  };

  getPreview = e => {
    console.log(e.target);
    // this.setState({
    //   isPreview: true,
    // });
  };
  // Multiple BackgroundImage 를 사용하면 어떨까??
  render() {
    const { defaultType, defaultColor, defaultPattern } = this.props;
    const { isHover, isPreview, type, color, pattern, view } = this.state;

    return (
      <div className="itemWrap" onMouseLeave={() => this.handleHover(false)}>
        <div className="itemImage" onMouseEnter={() => this.handleHover(true)}>
          <img
            className="sockImage imageNotMasked"
            src={
              isHover && isPreview
                ? matching[`${type} side`][0]
                : matching[`${defaultType} side`][0]
            }
            alt={`${defaultType} side`}
          />
          <img
            className="sockImage imageMasked"
            style={
              isHover && isPreview
                ? { backgroundColor: color }
                : { backgroundColor: defaultColor }
            }
            src={
              isHover && isPreview
                ? matching[`${type} side`][1]
                : matching[`${defaultType} side`][1]
            }
            alt={`${defaultType} side`}
          />
          <img
            className="sockImage patternMasked"
            style={
              isHover && isPreview
                ? { backgroundImage: `url(${patternArr[pattern]})` }
                : { backgroundImage: `url(${patternArr[defaultPattern]})` }
            }
            src={
              isHover && isPreview
                ? matching[`${type} side`][1]
                : matching[`${defaultType} side`][1]
            }
            alt={`${defaultType} side`}
          />
        </div>
        <div className="customLabel">
          <span className="miniLogo"></span>
          <span className="miniLabel">Customize</span>

          {/* 미리보기 상품 박스 */}
          <div
            className={
              isHover ? "previewBox previewShow" : "previewBox previewHide"
            }
          >
            <div className="previewSet">
              <div className="previewItem" onMouseEnter={this.getPreview}>
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
                  style={{ backgroundImage: `url(${patternArr[2]})` }}
                  src={matching[`${type} ${view}`][1]}
                  alt={`${type} ${view}`}
                />
              </div>
              <div className="previewItem">
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
                  style={{ backgroundImage: `url(${patternArr[9]})` }}
                  src={matching[`${type} ${view}`][1]}
                  alt={`${type} ${view}`}
                />
              </div>
              <div className="previewItem">
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
                  style={{ backgroundImage: `url(${patternArr[13]})` }}
                  src={matching[`${type} ${view}`][1]}
                  alt={`${type} ${view}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="nameBox">
          <p className="itemName">Nike React Presto By You</p>
          <p className="tagName">Custom Men's Shoe</p>
          <p className="itemPrice">5,000 ₩</p>
        </div>
      </div>
    );
  }
}

export default SockPreview;
