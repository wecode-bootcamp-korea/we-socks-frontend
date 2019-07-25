import React from "react";
import { withRouter } from "react-router-dom";
import "./sockPreview.scss";

import * as sockImage from "Components/SockItem/socksImages";
import * as patternImage from "Components/SockItem/patternImages";

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
  constructor(props) {
    super(props);

    this.moveToCustom.bind(this);
  }

  state = {
    isHover: false,
    isTouch: false,
    isClicked: false,
    isPreview: false,
    hoverIdx: 0
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

  handleTouch = () => {
    this.setState({
      isTouch: !this.state.isTouch
    });
  };

  getPreview = (e, idx) => {
    this.setState({
      isPreview: true,
      hoverIdx: idx
    });
  };

  moveToCustom = () => {
    if (!this.state.isTouch) {
      this.props.history.push("/custom");
    }
  };

  render() {
    const { defaultType, defaultColor, defaultPattern, preview } = this.props;
    const { isHover, isPreview, hoverIdx } = this.state;

    return (
      <div className="itemWrap" onMouseLeave={() => this.handleHover(false)}>
        <div
          className="itemImage"
          onMouseEnter={() => this.handleHover(true)}
          onTouchStart={this.handleTouch}
          onClick={this.moveToCustom}
        >
          <img
            className="sockImage imageNotMasked"
            src={
              isHover && isPreview
                ? matching[
                    `${typeArr[preview[hoverIdx].main_type_id - 1]} side`
                  ][0]
                : matching[`${typeArr[defaultType]} side`][0]
            }
            alt={`${defaultType} side`}
          />
          <img
            className="sockImage imageMasked"
            style={
              isHover && isPreview
                ? { backgroundColor: preview[hoverIdx].color }
                : { backgroundColor: defaultColor }
            }
            src={
              isHover && isPreview
                ? matching[
                    `${typeArr[preview[hoverIdx].main_type_id - 1]} side`
                  ][1]
                : matching[`${typeArr[defaultType]} side`][1]
            }
            alt={`${defaultType} side`}
          />
          <img
            className="sockImage patternMasked"
            style={
              isHover && isPreview
                ? {
                    backgroundImage: `url(${
                      patternArr[preview[hoverIdx].pattern_id - 1]
                    })`
                  }
                : { backgroundImage: `url(${patternArr[defaultPattern]})` }
            }
            src={
              isHover && isPreview
                ? matching[
                    `${typeArr[preview[hoverIdx].main_type_id - 1]} side`
                  ][1]
                : matching[`${typeArr[defaultType]} side`][1]
            }
            alt={`${defaultType} side pattern`}
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
              {preview &&
                preview.map((el, idx) => {
                  return (
                    <div
                      key={el.id}
                      className="previewItem"
                      onMouseEnter={e => this.getPreview(e, idx)}
                    >
                      <img
                        className="sockImage imageNotMasked"
                        src={
                          matching[`${typeArr[el.main_type_id - 1]} side`][0]
                        }
                        alt={`${typeArr[el.main_type_id - 1]} side`}
                      />
                      <img
                        className="sockImage imageMasked"
                        style={{ backgroundColor: el.color }}
                        src={
                          matching[`${typeArr[el.main_type_id - 1]} side`][1]
                        }
                        alt={`${typeArr[el.main_type_id - 1]} side`}
                      />
                      <img
                        className="sockImage patternMasked"
                        style={{
                          backgroundImage: `url(${
                            patternArr[el.pattern_id - 1]
                          })`
                        }}
                        src={
                          matching[`${typeArr[el.main_type_id - 1]} side`][1]
                        }
                        alt={`${typeArr[el.main_type_id - 1]} side`}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="nameBox">
          <p className="itemName">React Presto By You</p>
          <p className="tagName">Custom Socks</p>
          <p className="itemPrice">5,000 ₩</p>
        </div>
      </div>
    );
  }
}

export default withRouter(SockPreview);
