import React from "react";
import * as sockImage from "Components/SockItem/socksImages";
import * as patternImage from "Components/SockItem/patternImages";

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

const patternArr = [
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

class SockImage extends React.Component {
  render() {
    const { type, color, pattern, view } = this.props;
    return (
      <div className="itemImageContainer">
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
    );
  }
}

export default SockImage;
