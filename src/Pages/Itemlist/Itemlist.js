import React from "react";
import Header from "Components/Header";
import SockItem from "Components/SockItem";
import "./itemlist.scss";

const itemlist = props => {
  // const category = props.location.query.kind;

  return (
    <>
      <Header />
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
    </>
  );
};

export default itemlist;
