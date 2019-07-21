import React from "react";
import Layout from "Components/Layout";
import SockPreview from "Components/SockPreview";
import "./itemlist.scss";

const itemlist = props => {
  return (
    <Layout>
      <div className="lineBox"></div>
      <div className="itemlist">
        <div className="listHeader">
          <h3>Choose Your Socks type</h3>
        </div>
        <div className="list">
          <SockPreview
            defaultType="noShow"
            defaultColor="none"
            defaultPattern="0"
          />
          <SockPreview
            defaultType="ankle"
            defaultColor="none"
            defaultPattern="0"
          />
          <SockPreview
            defaultType="mid"
            defaultColor="none"
            defaultPattern="0"
          />
          <SockPreview
            defaultType="high"
            defaultColor="none"
            defaultPattern="0"
          />
        </div>
      </div>
    </Layout>
  );
};

export default itemlist;
