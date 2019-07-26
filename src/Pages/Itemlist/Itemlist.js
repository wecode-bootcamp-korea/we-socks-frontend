import React, { Component } from "react";
import axios from "axios";
import SockPreview from "Components/SockPreview";
import Layout from "Components/Layout";
import "./itemlist.scss";
import { ADDRESS } from "Config/Config";

class itemlist extends Component {
  state = {
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
      highPreviewArr
    } = this.state;

    return (
      <Layout>
        <div className="itemlist">
          <div className="listHeader">
            <h3>Choose Your Socks type</h3>
          </div>
          <div className="list">
            <SockPreview
              defaultType="0"
              defaultColor="none"
              defaultPattern="0"
              preview={noShowPreviewArr}
            />
            <SockPreview
              defaultType="1"
              defaultColor="none"
              defaultPattern="0"
              preview={anklePreviewArr}
            />
            <SockPreview
              defaultType="2"
              defaultColor="none"
              defaultPattern="0"
              preview={midPreviewArr}
            />
            <SockPreview
              defaultType="3"
              defaultColor="none"
              defaultPattern="0"
              preview={highPreviewArr}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default itemlist;
