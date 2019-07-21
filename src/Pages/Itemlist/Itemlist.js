import React from "react";
import Layout from "Components/Layout";
import SockItem from "Components/SockItem";
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
          <SockItem type="noShow" color="none" pattern="" view="side" />
          <SockItem type="ankle" color="none" pattern="" view="side" />
          <SockItem type="mid" color="none" pattern="" view="side" />
          <SockItem type="high" color="none" pattern="" view="side" />
        </div>
      </div>
    </Layout>
  );
};

export default itemlist;
