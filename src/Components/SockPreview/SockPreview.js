import React from "react";
import * as sockImage from "Components/SockItem/socksImages";
import * as patternImage from "Components/SockItem/patternImages";

import { Link } from "react-router-dom";
import "./sockPreview.scss";

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

class SockPreview extends React.Component {
  state = {
    isHover: false,
    isPreview: false,
    color: "none",
    type: "noShow",
    view: "side",
    pattern: ""
  };
}

export default SockPreview;
