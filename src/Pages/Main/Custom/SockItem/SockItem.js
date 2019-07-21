import React from "react";
import * as sockImage from "Components/SockItem/socksImages";
import * as patternImage from "Components/SockItem/patternImages";

const matching = {
  noShow: [sockImage.noShowSide, sockImage.noShowSideMasking],
  ankle: [sockImage.ankleSide, sockImage.ankleSideMasking],
  mid: [sockImage.midSide, sockImage.midSideMasking],
  high: [sockImage.highSide, sockImage.highSideMasking]
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
    const { type, color, pattern } = this.props;
    return (
      <div className="itemImageContainer">
        <img
          className="sockImage imageNotMasked"
          src={matching[`${type}`][0]}
          alt={`${type}`}
        />
        <img
          className="sockImage imageMasked"
          style={{ backgroundColor: color }}
          src={matching[`${type}`][1]}
          alt={`${type}`}
        />
        <img
          className="sockImage patternMasked"
          style={{ backgroundImage: `url(${patternArr[pattern]})` }}
          src={matching[`${type}`][1]}
          alt={`${type}`}
        />
      </div>
    );
  }
}

export default SockImage;
