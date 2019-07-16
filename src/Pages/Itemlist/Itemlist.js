import React from "react";
import Header from "Components/Header";
import "./itemlist.scss";

const itemlist = props => {
  const category = props.location.query.kind;

  return (
    <>
      <Header />
      <div>
        <p>123</p>
      </div>
    </>
  );
};

export default itemlist;
