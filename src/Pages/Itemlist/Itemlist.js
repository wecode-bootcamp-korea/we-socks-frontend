/* eslint-disable default-case */
import React, { Component } from "react";
import axios from "axios";
import SockPreview from "Components/SockPreview";
import Layout from "Components/Layout";
import "./itemlist.scss";
import { ADDRESS } from "Config/Config";

class itemlist extends Component {
  constructor(props) {
    super(props);

    this.type = props.history.location.query;
  }

  state = {
    type: "none",
    noShowPreviewArr: [],
    anklePreviewArr: [],
    midPreviewArr: [],
    highPreviewArr: []
  };

  componentDidMount = async () => {
    const noshow = await axios.post(`${ADDRESS}product/most_wished`, {
      main_type: "1"
    });
    const ankle = await axios.post(`${ADDRESS}product/most_wished`, {
      main_type: "2"
    });
    const mid = await axios.post(`${ADDRESS}product/most_wished`, {
      main_type: "3"
    });
    const high = await axios.post(`${ADDRESS}product/most_wished`, {
      main_type: "4"
    });

    this.setState({
      type: this.props.location.query,
      noShowPreviewArr: noshow.data,
      anklePreviewArr: ankle.data,
      midPreviewArr: mid.data,
      highPreviewArr: high.data
    });
  };

  render() {
    const {
      noShowPreviewArr,
      anklePreviewArr,
      midPreviewArr,
      highPreviewArr,
      type
    } = this.state;

    let defaultColor = "";

    switch (type) {
      case "KIDS":
        defaultColor = "#FFFF00";
        break;
      case "CASUAL":
        defaultColor = "#8A2BE2";
        break;
      case "DRESSED":
        defaultColor = "#778899";
        break;
      case "ATHLETIC":
        defaultColor = "#F5F5DC";
        break;
    }

    return (
      <Layout>
        <div className="itemlist">
          <div className="listHeader">
            <h3>Choose Your Socks type</h3>
          </div>
          <div className="list">
            <SockPreview
              defaultType="0"
              defaultColor={defaultColor}
              defaultPattern="0"
              preview={noShowPreviewArr}
              type={type}
            />
            <SockPreview
              defaultType="1"
              defaultColor={defaultColor}
              defaultPattern="0"
              preview={anklePreviewArr}
              type={type}
            />
            <SockPreview
              defaultType="2"
              defaultColor={defaultColor}
              defaultPattern="0"
              preview={midPreviewArr}
              type={type}
            />
            <SockPreview
              defaultType="3"
              defaultColor={defaultColor}
              defaultPattern="0"
              preview={highPreviewArr}
              type={type}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default itemlist;
