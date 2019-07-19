import React from "react";
import Layout from "Components/Layout";
import SockItem from "Components/SockItem";
import "./itemlist.scss";
import noShowSide from "assets/images/socks/noShow_Side.png";
import AnkleSide from "assets/images/socks/Ankle_Side.png";
import MidSide from "assets/images/socks/Mid_Side.png";
import HighSide from "assets/images/socks/High_Side.png";

const itemlist = props => {
  return (
    <Layout>
      <div className="lineBox"></div>
      <div className="itemlist">
        <div className="listHeader">
          <h3>Choose Your Socks type</h3>
        </div>
        <div className="list">
          <SockItem image={noShowSide} />
          <SockItem image={AnkleSide} />
          <SockItem image={MidSide} />
          <SockItem image={HighSide} />
        </div>
      </div>
    </Layout>
  );
};

export default itemlist;
