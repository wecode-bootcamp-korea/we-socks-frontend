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
          <SockItem image="https://cdn.shopify.com/s/files/1/0158/7614/products/black_pedla_lightweight_sock_800x.png?v=1544163225" />
          <SockItem image="https://cdn.shopify.com/s/files/1/0158/7614/products/black_pedla_lightweight_sock_800x.png?v=1544163225" />
          <SockItem image="https://cdn.shopify.com/s/files/1/0158/7614/products/black_pedla_lightweight_sock_800x.png?v=1544163225" />
          <SockItem image="https://cdn.shopify.com/s/files/1/0158/7614/products/black_pedla_lightweight_sock_800x.png?v=1544163225" />
        </div>
      </div>
    </Layout>
  );
};

export default itemlist;
